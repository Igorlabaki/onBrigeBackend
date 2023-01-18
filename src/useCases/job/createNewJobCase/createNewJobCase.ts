import { validateInputs } from "../../../util/validateInputs";
import { IAreaRepository } from "../../../repository/IAreaRepository";
import { ICityRepository } from "../../../repository/ICityRepository";
import { ILevelRepository } from "../../../repository/ILevelRepository";
import { IPeriodRepository } from "../../../repository/IPeriodRepository";
import { ICountryRepository } from "../../../repository/ICountryRepository";
import { ICreateNewJob, IJobRepository } from "../../../repository/IJobRepository";
import { validateIfElementExistsAtBd } from "../../../util/validateifElementExistsAtBd";

class CreateNewJobCase {
    constructor(
        private jobRepository : IJobRepository,
        private countryRepository: ICountryRepository,
        private areaRepository: IAreaRepository,
        private cityRepository: ICityRepository,
        private levelRepositoryL: ILevelRepository, 
        private periodRepository: IPeriodRepository
    ){}

    async execute({about,area,cityName,companyId,countryName,level,minimumPercentagem,period}: ICreateNewJob ){
        // Validate input
            validateInputs([!!about,!!area,!!cityName,!!companyId,
                !!countryName,!!level,!!minimumPercentagem,!!period])
        //
    
        // Validate if record exists on bd
            await validateIfElementExistsAtBd(this.areaRepository,area)
            await validateIfElementExistsAtBd(this.levelRepositoryL,level)
            await validateIfElementExistsAtBd(this.periodRepository,period)
            await validateIfElementExistsAtBd(this.cityRepository, cityName)
            await validateIfElementExistsAtBd(this.countryRepository,countryName)           
        //

        // Create new Job
            const jobInput : ICreateNewJob = {
                about,area,cityName,companyId,countryName,level,minimumPercentagem,period
            }

            const newJob = await this.jobRepository.create(jobInput)
        //

        return {newJob}      
    }
}

export {CreateNewJobCase}  