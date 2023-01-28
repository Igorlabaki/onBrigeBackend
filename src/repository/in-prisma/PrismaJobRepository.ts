
import { Job, PrismaClient } from "@prisma/client";
import { ICreateNewJob, IJobRepository, IUpdatejob } from "../IJobRepository";

export class PrismaJobRepository implements IJobRepository {

  constructor (private readonly prisma: PrismaClient){}

  async create({about,area,cityName,countryName,companyId,level,minimumPercentagem,period}: ICreateNewJob): Promise<Job> {
    return await this.prisma.job.create({
      data:{
        Company:{
          connect:{
            id: companyId
          }
        },
        area: {
          connect:{
            name: area
          }
        },
        City:{
          connect:{
            name: cityName
          }
        },
        about,
        Country:{
          connect:{
            name:countryName
          }
        },
        level:{
          connect:{
            name: level
          }
        },
        minimumPercentagem,
        period:{
          connect:{
            name: period
          }
        },
      }
    })
  }

  async getById (reference: string): Promise<Job | null> {
     return await this.prisma.job.findUnique({
      where:{
        id: reference
      },
      include:{
       area: true,
       City: true,
       Company: true,
       Country:true,
       level: true,
       period: true,
       Skills: true,
       UsersJobs: true
      }
    })
  }

  async update({about,area,cityName,countryName,companyId,level,minimumPercentagem,period,jobId}: IUpdatejob): Promise<Job> {
    return await this.prisma.job.update({
      where:{
        id: jobId
      },
      data:{
        area: {
          connect:{
            name: area
          }
        },
        City:{
          connect:{
            name: cityName
          }
        },
        about,
        Country:{
          connect:{
            name:countryName
          }
        },
        level:{
          connect:{
            name: level
          }
        },
        period:{
          connect:{
            name: period
          }
        },
        minimumPercentagem
      }
    })
  }

  async delete(reference: string): Promise<Job> {
    return await this.prisma.job.delete({
      where:{
        id: reference
      }
    })
  }

  async list(): Promise<Job[]>{
    return await this.prisma.job.findMany({
      include:{
        area: true,
        City: true,
        Company: true,
        Country:true,
        level: true,
        period: true,
        Skills: true,
        UsersJobs: true
       }
    })
  }
}