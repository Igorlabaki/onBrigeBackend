import { Area } from "@prisma/client";
import { IAreaRepository } from "../repository/IAreaRepository";
import { ICityRepository } from "../repository/ICityRepository";
import { ICountryRepository } from "../repository/ICountryRepository";
import { IJobRepository } from "../repository/IJobRepository";
import { ILevelRepository } from "../repository/ILevelRepository";

export  async function validateIfEntityExistsByName(repository:ICountryRepository | ICityRepository | IAreaRepository,message: string,entityName:string){

    const entityExists = await repository.getByName(entityName)

    if(!entityExists){
        throw new Error(`${message} not found.`)
    }

    return entityExists
}