import { Console } from "console"
import { IAreaRepository } from "../repository/IAreaRepository"
import { ICityRepository } from "../repository/ICityRepository"
import { ICountryRepository } from "../repository/ICountryRepository"
import { ILevelRepository } from "../repository/ILevelRepository"
import { IPeriodRepository } from "../repository/IPeriodRepository"

export async function validateIfElementExistsAtBd(repository: IAreaRepository | ILevelRepository | ICityRepository | ICountryRepository  | IPeriodRepository, value: string){
    let elementAlreadyExists  = await repository.getByName(value)
  
    if(!elementAlreadyExists){
        await repository.create(value)
    }
}