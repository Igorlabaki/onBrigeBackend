import { hash } from "bcryptjs";
import { validateInputs } from "../../../util/validateInputs";
import { GenerateRefreshToken } from "../../../provider/GenerateRefreshToken";
import { GenerateTokenProvider } from "../../../provider/GenerateTokenProvider";
import { IGenerateRefreshToken, ITokenRepository } from "../../../repository/ITokenRepository";
import { ICompanyRepository, ICreateNewCompanyAccount } from "../../../repository/ICompanyRepository";

class CreateNewCompanyAccountCase {
    constructor(private companyRepository : ICompanyRepository, private tokenRepository: ITokenRepository){}

    async execute({userType,name,password,email}: ICreateNewCompanyAccount ){
        // Validate input
            validateInputs([!!name,!!password,!!email,!!userType])
        //

        // Validate if company exists
            const companyAlreadyExists = await this.companyRepository.getByEmail(email)

            if(companyAlreadyExists){
                throw  new Error(`Company already exists.`)
            }
        //

        // Criptografar teh password
            const passwordHash = await hash(password, 8)
        //

        // Create new company account
            const companyInput : ICreateNewCompanyAccount = {
                email,name,userType,password: passwordHash
            }
            const newCompany = await this.companyRepository.create(companyInput)
        //

        // Provide token to user
            const generateTokenProvider = new GenerateTokenProvider()
            const token = await generateTokenProvider.execute(newCompany)

            const generateTokenBody : IGenerateRefreshToken = {
               id: newCompany?.id,
               userType: newCompany?.userType
            }

            const generateRefreshToke = new GenerateRefreshToken(this.tokenRepository)
            const refreshToken = await generateRefreshToke.execute(generateTokenBody)
        //

        return {token,refreshToken}      
    }
}

export {CreateNewCompanyAccountCase}  