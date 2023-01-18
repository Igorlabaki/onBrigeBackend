
import { hash } from "bcryptjs";
import { validateInputs } from "../../../util/validateInputs";
import { GenerateRefreshToken } from "../../../provider/GenerateRefreshToken";
import { GenerateTokenProvider } from "../../../provider/GenerateTokenProvider";
import { IGenerateRefreshToken, ITokenRepository } from "../../../repository/ITokenRepository";
import { ICreateNewDeveloperAccount, IDeveloperRepository } from "../../../repository/IDeveloperRepository";
import { ILevelRepository } from "../../../repository/ILevelRepository";
import { IAreaRepository } from "../../../repository/IAreaRepository";
import { validateIfEntityExistsByEmail } from "../../../util/validateIfEntityExistsByEmail";

class CreateNewDeveloperAccountCase {
    constructor(
        private developerRepository: IDeveloperRepository,
        private tokenRepository: ITokenRepository,
        private areaRepository: IAreaRepository, 
        private levelRepository: ILevelRepository
    ){}

    async execute({userType,name,password,email,area,level}: ICreateNewDeveloperAccount ){
        // Validate input
            validateInputs([!!name,!!password,!!email,!!userType,!!area,!!level])
        //

        // Validate if developer exists
           await validateIfEntityExistsByEmail(this.developerRepository,"Developer", email)
        //

        const areaAlreadyExists  = await this.areaRepository.getByName(area)
        const levelAlreadyExists = await this.levelRepository.getByName(level)


        if(!areaAlreadyExists){
            await this.areaRepository.create(area)
        }

        if(!levelAlreadyExists){
            await this.levelRepository.create(level)
        }

        // Criptografar teh password
            const passwordHash = await hash(password, 8)
        //

        // Create new developer account
            const developerInput : ICreateNewDeveloperAccount = {
                email,name,userType,password: passwordHash,area,level
            }
            const newDeveloper = await this.developerRepository.create(developerInput)
        //

        // Provide token to user
            const generateTokenProvider = new GenerateTokenProvider()
            const token = await generateTokenProvider.execute(newDeveloper)

            const generateTokenBody : IGenerateRefreshToken = {
                id: newDeveloper?.id,
                userType: newDeveloper?.userType
            }

            const generateRefreshToke = new GenerateRefreshToken(this.tokenRepository)
            const refreshToken = await generateRefreshToke.execute(generateTokenBody)
        //

        return {token,refreshToken}      
    }
}

export {CreateNewDeveloperAccountCase}  