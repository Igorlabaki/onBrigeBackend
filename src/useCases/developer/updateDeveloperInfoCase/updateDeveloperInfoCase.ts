import { ICityRepository } from "../../../repository/ICityRepository";
import { IAreaRepository } from "../../../repository/IAreaRepository";
import { ILevelRepository } from "../../../repository/ILevelRepository";
import { ICountryRepository } from "../../../repository/ICountryRepository";
import { validateIfEntityExistsById } from "../../../util/validateIfEntityExistsById";
import { validateIfElementExistsAtBd } from "../../../util/validateifElementExistsAtBd";
import { IDeveloperRepository, IUpdateDeveloperInfoRequest } from "../../../repository/IDeveloperRepository";

class UpdateDeveloperInfoCase{
    constructor(
        private cityRepository      : ICityRepository,
        private areaRepository      : IAreaRepository, 
        private levelRepository     : ILevelRepository,
        private countryRepository    : ICountryRepository,
        private developerRepository : IDeveloperRepository,
    ){}

    async execute({email,about,name,developerId,cityName,countryName,area,level,linkList}:IUpdateDeveloperInfoRequest){
        await validateIfEntityExistsById(this.developerRepository,"Developer",developerId)
    
        await validateIfElementExistsAtBd(this.areaRepository,area)
        await validateIfElementExistsAtBd(this.levelRepository,level)
        await validateIfElementExistsAtBd(this.cityRepository,cityName)
        await validateIfElementExistsAtBd(this.countryRepository,countryName)
 
        const updateDveloper = await this.developerRepository.updateInfos({email,about,name,developerId,cityName,countryName,area,level,linkList})

        return updateDveloper
    }
}

export {UpdateDeveloperInfoCase}