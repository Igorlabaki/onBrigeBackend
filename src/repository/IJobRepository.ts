import { Job, JobsSkills } from "@prisma/client"

export interface ICreateNewJob{
    area: string;
    about: string;
    companyId: string;
  /*   skills:  JobsSkills[]; */
    period: string;
    level: string;
    cityName: string;
    countryName: string;
    minimumPercentagem: string;
}

interface IJobRepository {
    list:   () => Promise<Job[]>
    getById:(reference: string) => Promise<Job | null>
    delete: (reference: string) => Promise<Job  | null> 
    create:({area,companyId,about,level,period,cityName,countryName,minimumPercentagem}:ICreateNewJob) => Promise<Job | null>
}

export { IJobRepository };