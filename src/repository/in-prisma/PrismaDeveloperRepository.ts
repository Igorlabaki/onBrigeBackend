
import { Link, PrismaClient, Skill, User } from "@prisma/client";
import { IUpdateDeveloperPasswordRequest,IDeveloperRepository,IUpdateDeveloperInfoRequest, ICreateNewDeveloperAccount, IUpdateDeveloperListSkillsRequest } from "../IDeveloperRepository";

export class PrismaDeveloperRepository implements IDeveloperRepository {

  constructor (private readonly prisma: PrismaClient){}

  async create({email,password,name,userType,area,level}: ICreateNewDeveloperAccount): Promise<User> {
    return await this.prisma.user.create({
      data:{
        email,
        userType,
        password,
        name,
        Area:{
          connect:{
            name:area
          }
        },
        level:{
          connect:{
            name: level
          }
        }
      },
      include:{
        Skills: {
            include:{
                skill: true
            }
        },
        City: true,
        Country: true,
        Link: true,
        Area: true,
        level: true
      }
    })
  }

  async updateAvatar(avatarUrl: string, developerId: string){
    return await this.prisma.user.update({
      where:{
        id:developerId
      },
      data:{
        avatar: avatarUrl
      },
      include:{
        City: true,
        Country: true,
      }
    })
  } 

  async updateSkills({developerId, listSkills}:IUpdateDeveloperListSkillsRequest){
    if(listSkills){
   
      const userSkills = await this.prisma.usersSkills.findMany({
         where:{
             fk_id_user:developerId
         },
         include:{
             skill: true
         }
      })
      const allSkills = await this.prisma.skill.findMany()

      const findMissSkill = userSkills?.filter((item : any) => {
         return !listSkills?.includes(item.skill.name)
      })

      const skillsToDelete = userSkills.filter((item: any) => !listSkills.includes(item.skill.name));
      await Promise.all(
        skillsToDelete.map(async (item) => {
          await this.prisma.usersSkills.delete({
            where: {
              fk_id_skill_fk_id_user: {
                fk_id_skill: item.skill.id,
                fk_id_user: developerId
              }
            }
          });
        })
      );
    
    

      listSkills.map(async (skill: any) => {
         const findSkill = allSkills.find((item: any) => item?.name?.toLocaleLowerCase() === skill?.toLocaleLowerCase())

         const userSkillsMap = userSkills?.map((item) => item?.skill.name)

         const teste = userSkillsMap?.filter((item: any) => {
             return !listSkills?.includes(item)
         })

         if(findSkill && !teste.includes(skill)){
             try {
                 const userSkills = await this.prisma.usersSkills.create({
                 data:{
                     fk_id_skill: findSkill.id,
                     fk_id_user: developerId,
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
             const userSkills = await this.prisma.usersSkills.create({
                 data:{
                     fk_id_skill: skillCreate.id,
                     fk_id_user: developerId,
                 }
             })
         }
    })} 
  
}


  async updateInfos({email,name,developerId,about,cityName,countryName,level,area,linkList}: IUpdateDeveloperInfoRequest){
    if(linkList){
      const userLinks = await this.prisma.link.findMany({
          where:{
              fk_id_user:developerId
          },
       })

       const linkListMap = linkList.map((item: Link) => item.name)

       const findMissLinks = userLinks?.filter((item: Link) => {
          return !linkListMap?.includes(item.name)
      })

       if(findMissLinks){
          findMissLinks.map(async (item: Link)=> {
              const findLink = await this.prisma.link.delete({
                  where:{
                      name: item.name,
                  }
              })
          })
       }

       linkList.map(async (Link: Link) => {
           const findLink = await this.prisma.link.findFirst({
               where:{
                   name: Link.name,
                   fk_id_user: developerId
               }
           })
          
           if(!findLink){
               const findLink = await this.prisma.link.create({
                   data:{
                       name: Link.name,
                       fk_id_user: developerId
                   }
               })
           }
       })
   }
    return await this.prisma.user.update({
      where:{
       id:developerId
      },
      data:{
        about,
        email,
        name,
        City: {
          connect:{
            name: cityName
          }
        },
        Country:{
          connect:{
            name: countryName
          }
        },
        Area:{
          connect:{
            name:area
          }
        },
        level:{
          connect:{
            name:level
          }
        }
      },
      include:{
        Skills: {
            include:{
                skill: true
            }
        },
        City: true,
        Country: true,
        Link: true,
        Area: true,
        level: true
        
      }
    })
  } 

  async getById (reference: string): Promise<User | null> {
     return await this.prisma.user.findUnique({
      where:{
        id: reference
      },
      include:{
        Skills: {
            include:{
                skill: true
            }
        },
        City: true,
        level: true,
        Area: true,
        Country: true,
        Link: true,
        UsersJobs:{
          include:{
            job: {
                include:{
                    Company: true,
                    Skills:{
                        include:{
                            skill: true
                        }
                    },
                    area: true,
                    City: true,
                    Country: true,
                    level:true,
                    period:true,
                }
            }
          }
        }
      } 
    })
  }

  async getByEmail(reference: string): Promise<User | null> {
     return await this.prisma.user.findUnique({
      where:{
        email: reference
      },
      include:{
        Skills: {
            include:{
                skill: true
            }
        },
        City: true,
        Country: true,
        Link: true,
        UsersJobs:{
          include:{
            job: {
                include:{
                    Company: true,
                    Skills:{
                        include:{
                            skill: true
                        }
                    },
                    area: true,
                    City: true,
                    Country: true,
                    level:true,
                    period:true,
                }
            }
          }
        }
      } 
    })
  }

  async delete(reference: string): Promise<User> {
    return await this.prisma.user.delete({
      where:{
        id: reference
      }
    })
  }

  async list(): Promise<User[]>{
    return await this.prisma.user.findMany({
      include:{
        City: true,
        Area: true,
        level: true,
        Country: true,
        Link: true,
        LocationInteresting:true,
        Skills:{
          include:{
            skill: true
          }
        },
      }
    })
  }

  async updatePassword ({id,password}: IUpdateDeveloperPasswordRequest): Promise<User> {
    return await this.prisma.user.update({
      where:{
        id
      },
      data:{
        password
      },
    })
  }

}