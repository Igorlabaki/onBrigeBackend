import { ICompanyRepository } from "../repository/ICompanyRepository";
import { IDeveloperRepository } from "../repository/IDeveloperRepository";

export  async function validateIfEntityExistsByEmail(repository: IDeveloperRepository | ICompanyRepository,message: string,entityEmail:string){

    const entityExists = await repository.getByEmail(entityEmail)

    if(entityExists){
        throw new Error(`${message} already exists.`)
    }

    return entityExists
}