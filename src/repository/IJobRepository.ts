import { Job, JobsSkills } from "@prisma/client"

export interface ICreateNewJob{
    area: string;
    about: string;
    level: string;
    period: string;
    cityName: string;
    companyId: string;
    countryName: string;
    minimumPercentagem: string;
    /*   skills:  JobsSkills[]; */
}
export interface IUpdatejob{
    area: string;
    jobId: string;
    about: string;
    level: string;
    period: string;
    cityName: string;
    companyId: string;
    countryName: string;
    minimumPercentagem: string;
  /*   skills:  JobsSkills[]; */
}

interface IJobRepository {
    list:   () => Promise<Job[]>
    getById:(reference: string) => Promise<Job | null>
    delete: (reference: string) => Promise<Job  | null> 
    update:({about,area,cityName,companyId,countryName,level,minimumPercentagem,period}: IUpdatejob) => Promise<Job | null>
    create:({area,companyId,about,level,period,cityName,countryName,minimumPercentagem}:ICreateNewJob) => Promise<Job | null>
}

export { IJobRepository };