
import { PrismaClient, User } from "@prisma/client";
import { IUpdateDeveloperPasswordRequest,IDeveloperRepository,IUpdateDeveloperInfoRequest, ICreateNewDeveloperAccount } from "../IDeveloperRepository";

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

  async updateInfos({email,name,id,bio,cityName,countryName,level,area}: IUpdateDeveloperInfoRequest){
    return await this.prisma.user.update({
      where:{
        id
      },
      data:{
        bio,
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