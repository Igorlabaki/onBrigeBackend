import { ICompanyRepository } from "../../../repository/ICompanyRepository";
import { IDeleteAccount, IDeveloperRepository } from "../../../repository/IDeveloperRepository";

class DeleteAccountCase{
    constructor(private developerRepository: IDeveloperRepository,private companyRepository: ICompanyRepository){}

    async execute({userType,userId}: IDeleteAccount){
        if(userType.includes("developer")){
            const developerDeleted = await this.developerRepository.delete(userId)

            return developerDeleted
        }

        if(userType.includes("company")){
            const companyDeleted = await this.companyRepository.delete(userId)

            return companyDeleted
        }
    }
}

export {DeleteAccountCase}