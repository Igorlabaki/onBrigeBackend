import { compare } from "bcryptjs";
import { validateInputs } from "../../../util/validateInputs";
import { ICompanyRepository } from "../../../repository/ICompanyRepository";
import { GenerateRefreshToken } from "../../../provider/GenerateRefreshToken";
import { GenerateTokenProvider } from "../../../provider/GenerateTokenProvider";
import { IGenerateRefreshToken, ITokenRepository } from "../../../repository/ITokenRepository";
import { IAutheticateAccount, IDeveloperRepository } from "../../../repository/IDeveloperRepository";

class AuthenticateAccountCase{
    constructor(private developerRepository: IDeveloperRepository,private companyRepository: ICompanyRepository,private tokenRepository:ITokenRepository){}

    async execute({email,password,userType}: IAutheticateAccount){
        // Validate input
          validateInputs([!!password,!!email,!!userType])
        //

        if(userType.includes('developer')){
            // Validate if user exists
                const developerAlreadyExists = await this.developerRepository.getByEmail(email)

                if(!developerAlreadyExists){
                    throw new Error("Email or password incorrect.")
                }
            //

            // Validate if password is correct
                const passwordMatch = await compare(password, developerAlreadyExists.password)

                if(!passwordMatch){
                    throw new Error("Email or password incorrect.")
                }
            //

            // Provide token to user
               const generateTokenProvider = new GenerateTokenProvider()
               const token = await generateTokenProvider.execute(developerAlreadyExists)
   
               const generateTokenBody : IGenerateRefreshToken = {
                  id: developerAlreadyExists?.id,
                  userType: developerAlreadyExists?.userType
               }
   
               const generateRefreshToke = new GenerateRefreshToken(this.tokenRepository)
               const refreshToken = await generateRefreshToke.execute(generateTokenBody)
           //

           return {token,refreshToken}
        }

        if(userType.includes('company')){
            // Validate if user exists
                const companyAlreadyExists = await this.companyRepository.getByEmail(email)

                if(!companyAlreadyExists){
                    throw new Error("Email or password incorrect.")
                }
            //

            // Validate if password is correct
                const passwordMatch = await compare(password,companyAlreadyExists.password)

                if(!passwordMatch){
                    throw new Error("Email or password incorrect r.")
                }
            //

            // Provide token to user
               const generateTokenProvider = new GenerateTokenProvider()
               const token = await generateTokenProvider.execute(companyAlreadyExists)
               
               const generateTokenBody : IGenerateRefreshToken = {
                  id: companyAlreadyExists?.id,
                  userType: companyAlreadyExists?.userType
               }
   
               const generateRefreshToke = new GenerateRefreshToken(this.tokenRepository)
               const refreshToken = await generateRefreshToke.execute(generateTokenBody)
           //

           return {token,refreshToken}
        }

    }
}

export {AuthenticateAccountCase}