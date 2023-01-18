import jwt_decode from "jwt-decode";
import { IJwtToken } from "../../../repository/ITokenRepository";
import { ICompanyRepository } from "../../../repository/ICompanyRepository";
import { IDeveloperRepository } from "../../../repository/IDeveloperRepository";

class RecoveryAccountDataCase{
    constructor(private developerRepositoy:IDeveloperRepository,private companyRepository:ICompanyRepository){}

    async execute(token:string){
        // Decode token
            const decoded : IJwtToken  = jwt_decode(token);
        //

        // Recovery developer data 
            if(decoded.userType.includes("developer")){
                const developer = await this.developerRepositoy.getById(decoded.id)
     
                if(!developer){
                    throw new Error("Developer not found.")
                }

                return developer
            }
       //

        // Recovery company data
            if(decoded.userType.includes("company")){
                const company = await this.companyRepository.getById(decoded.id)
     
                if(!company){
                    throw new Error("Company not found.")
                }
                
                return company
            }
       //
    }
}

export {RecoveryAccountDataCase}