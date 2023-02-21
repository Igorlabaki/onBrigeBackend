import { Job, JobsSkills, Skill } from "@prisma/client"

export interface ICreateNewJob{
    area: string;
    about: string;
    level: string;
    period: string;
    cityName: string;
    companyId: string;
    countryName: string;
    minimumPercentagem: string;
    skills:  (string | undefined)[]
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
  skills:  JobsSkills[]; 
}

export interface IUpdateJobListSkillsRequest{
    jobId : string;
    listSkills    : Skill[];
}
export interface IAppliedDeveloper{
    jobId : string;
    developerId    : string;
}

interface IJobRepository {
    list:   () => Promise<Job[]>
    getById:(reference: string) => Promise<Job | null>
    delete: (reference: string) => Promise<Job  | null> 
    developerApplied: ({jobId,developerId}: IAppliedDeveloper) => Promise<any | null>
    developerDismiss: ({jobId,developerId}: IAppliedDeveloper) => Promise<any | null>
    update:({about,area,cityName,companyId,countryName,level,minimumPercentagem,period}: IUpdatejob) => Promise<Job | null>
    create:({area,companyId,about,level,period,cityName,countryName,minimumPercentagem,skills}:ICreateNewJob) => Promise<Job | null>
}

export { IJobRepository };