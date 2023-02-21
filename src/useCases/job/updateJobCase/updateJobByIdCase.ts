import { ICityRepository } from "../../../repository/ICityRepository";
import { ICountryRepository } from "../../../repository/ICountryRepository";
import { IJobRepository, IUpdatejob } from "../../../repository/IJobRepository";
import { validateIfEntityExistsById } from "../../../util/validateIfEntityExistsById";
import { validateIfElementExistsAtBd } from "../../../util/validateifElementExistsAtBd";
import { IAreaRepository } from "../../../repository/IAreaRepository";
import { ILevelRepository } from "../../../repository/ILevelRepository";
import { IPeriodRepository } from "../../../repository/IPeriodRepository";

class UpdateJobByIdCase {
  constructor(
    private jobRepository : IJobRepository,
    private areaRepository: IAreaRepository,
    private cityRepository: ICityRepository,
    private levelRepositoryL: ILevelRepository, 
    private periodRepository: IPeriodRepository,
    private countryRepository: ICountryRepository
  ) {}

  async execute({area,level,about,period,cityName,companyId,countryName,minimumPercentagem,jobId,skills}: IUpdatejob){
    const job = await validateIfEntityExistsById(this.jobRepository,"Job",jobId)
   
    // Validate if record exists on bd
    await validateIfElementExistsAtBd(this.areaRepository,area)
    await validateIfElementExistsAtBd(this.levelRepositoryL,level)
    await validateIfElementExistsAtBd(this.periodRepository,period)
    await validateIfElementExistsAtBd(this.cityRepository, cityName)
    await validateIfElementExistsAtBd(this.countryRepository,countryName)           
    //

    // Create new Job
    const jobInput : IUpdatejob = {
      about,area,cityName,companyId,countryName,level,minimumPercentagem,period,jobId,skills
    }

    const updatedJob = await this.jobRepository.update(jobInput)
    //
   
    return {updatedJob}
  }
}

export { UpdateJobByIdCase };
