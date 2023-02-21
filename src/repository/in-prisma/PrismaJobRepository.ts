
import { Job, PrismaClient } from "@prisma/client";
import { IAppliedDeveloper, ICreateNewJob, IJobRepository, IUpdatejob, IUpdateJobListSkillsRequest } from "../IJobRepository";

export class PrismaJobRepository implements IJobRepository {

  constructor (private readonly prisma: PrismaClient){}

  async create({about,area,cityName,countryName,companyId,level,minimumPercentagem,period,skills}: ICreateNewJob): Promise<Job> {
    const newJob = await this.prisma.job.create({
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
    if(skills){
      const allSkills = await this.prisma.skill.findMany()
      skills.map(async (skill: any) => {
        const findSkill = allSkills.find((item: any) => item.name.toLocaleLowerCase() === skill.toLocaleLowerCase())
  
        if(findSkill ){
            const userSkills = await this.prisma.jobsSkills.create({
              data:{
                fk_id_skill: findSkill.id,
                fk_id_job: newJob.id,
                }
              })
        }else if(!findSkill){
          const skillCreate = await this.prisma.skill.create({
              data:{
                name: skill
              }
          })
          const jobsSkills = await this.prisma.jobsSkills.create({
            data:{
                fk_id_skill: skillCreate.id,
                fk_id_job: newJob.id,
              }
            })
        }
    })}

    return newJob
  }

  async developerApplied({jobId,developerId}: IAppliedDeveloper){
    return await this.prisma.usersJobs.create({
      data:{
        fk_id_job: jobId,
        fk_id_user: developerId
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
       Skills:{
        include:{
         skill: true,
        }
       },
       UsersJobs: {
        include:{
          user: {
            include:{
              Area:true,
              City: true,
              Country: true,
              level: true,
              Link: true,
              LocationInteresting:true,
              Skills:{
                include:{
                  skill: true
                }
              },
            }
          }
        }
       }
      }
    })
  }

  async update({about,area,cityName,countryName,companyId,level,minimumPercentagem,period,jobId,skills}: IUpdatejob): Promise<Job> {
    const job = await this.prisma.job.update({
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

    if(skills){
      const allSkills = await this.prisma.skill.findMany()
      const jobSkills = await this.prisma.jobsSkills.findMany({
         where:{
             fk_id_job:jobId,
         },
         include:{
             skill: true
         }
      })

      const findMissSkill = jobSkills?.filter((item: any) => {
      
         return !skills?.includes(item.skill.name)
     })

     if(findMissSkill){
         try {
             findMissSkill.map(async (item : any) => {
                 const deletedSkill = await this.prisma.jobsSkills.delete({
                     where:{
                         fk_id_skill_fk_id_job: {
                            fk_id_skill: item.skill.id,
                            fk_id_job:jobId,
                         }
                     }
                 })               
             })
         } catch (error) {       
         }
       }


      skills.map(async (skill: any) => {
         const findSkill = allSkills.find((item) => item.name.toLocaleLowerCase() === skill.toLocaleLowerCase())

         const jobSkillsMap = jobSkills?.map((item) => item.skill.name)

         const teste = jobSkillsMap?.filter((item: any) => {
             return !skills?.includes(item)
         })

         if(findSkill && !teste.includes(skill)){
             try {
                 const jobSkills = await this.prisma.jobsSkills.create({
                 data:{
                     fk_id_skill: findSkill.id,
                     fk_id_job: jobId,
                     }
                 })
             } catch (error) {                        
             }
         }else if(!findSkill){
             const skillCreate = await this.prisma.skill.create({
                 data:{
                     name: skill
                 }
             })
             const jobSkills = await this.prisma.jobsSkills.create({
                 data:{
                     fk_id_skill: skillCreate.id,
                     fk_id_job: jobId,
                 }
             })
         }
    })
  }

  return job
  }

  async developerDismiss({jobId,developerId}:IAppliedDeveloper){
    return await this.prisma.usersJobs.delete({
      where:{
       fk_id_job_fk_id_user:{
        fk_id_job:jobId,
        fk_id_user:developerId
       }
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
        Skills: {
          include:{
            skill: true 
          }
        },
        UsersJobs: {
          include:{
            user: true
          }
        }
       }
    })
  }
}