import { IJobRepository } from "../repository/IJobRepository"
import { ICompanyRepository } from "../repository/ICompanyRepository"
import { IDeveloperRepository } from "../repository/IDeveloperRepository"

export  async function validateIfEntityExistsById(repository: IJobRepository |  IDeveloperRepository | ICompanyRepository,message: string,entityId:string){
    const entityExists = await repository.getById(entityId)

    if(!entityExists){
        throw new Error(`${message} not found.`)
    }

    return entityExists
}