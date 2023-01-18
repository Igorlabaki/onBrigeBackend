import { IGenerateRefreshToken, ITokenRepository } from "../repository/ITokenRepository"

class GenerateRefreshToken{
    constructor(private tokenRepository: ITokenRepository) {}

    async execute({id,userType}: IGenerateRefreshToken){
        if(!id){
            throw new Error("User id undefined.")
        }else{
            if(userType?.includes('developer')){
                const userAlreadyhasRefreshToken =  await this.tokenRepository.getDeveloperToken(id)
        
                if(userAlreadyhasRefreshToken){
                    await this.tokenRepository.deleteDeveloperToken(id)
                }
        
                const generateRefreshToke = await this.tokenRepository.createDeveloperToken(id)
                return generateRefreshToke
            }
    
            if(userType?.includes('company')){
                const userAlreadyhasRefreshToken =  await this.tokenRepository.getCompanyToken(id)
        
                if(userAlreadyhasRefreshToken){
                    await this.tokenRepository.deleteCompanyToken(id)
                }
        
                const generateRefreshToke = await this.tokenRepository.createCompanyToken(id)
                return generateRefreshToke
            }
        }
    }
}

export {GenerateRefreshToken}