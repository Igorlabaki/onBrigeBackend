
import { Company, PrismaClient } from "@prisma/client";
import { ICompanyRepository, ICreateNewCompanyAccount, IUpdateCompanyPasswordRequest, IUpdateInfoCompanyRequest } from "../ICompanyRepository";

export class PrismaCompanyRepository implements ICompanyRepository {

  constructor (private readonly prisma: PrismaClient){}

  async create({email,password,name,userType}: ICreateNewCompanyAccount): Promise<Company> {
    return await this.prisma.company.create({
      data:{
        name,
        email,
        password,
        userType
      },
      include:{
        Jobs:true,
        City: true,
        Country: true,
      }
    })
  }

  async updateInfos({email,name,companyId,cityName,countryName,about}: IUpdateInfoCompanyRequest){
    return await this.prisma.company.update({
      where:{
        id: companyId
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
      },
      include:{
        Jobs:{
          include:{
            City:true,
            Country:true,
            level: true,
            area:true,
            period:true,
            Skills: true,
            UsersJobs:true,
          }
        },
        City: true,
        Country: true,
      }
    })
  } 

  async updateAvatar(avatarUrl: string, companyId: string){
    return await this.prisma.company.update({
      where:{
        id:companyId
      },
      data:{
        avatar: avatarUrl
      },
      include:{
        Jobs:{
          include:{
            City:true,
            Country:true,
            level: true,
            area:true,
            period:true,
            Skills: true,
            UsersJobs:true,
          }
        },
        City: true,
        Country: true,
      }
    })
  } 

  async getById (reference: string): Promise<Company | null> {
     return await this.prisma.company.findUnique({
      where:{
        id: reference
      },
      include:{
        Jobs:{
            include:{
            Company:true,
            Skills:{
                include:{
                skill: true
                }
            },
            City: true,
            area: true,
            Country: true,
            level:true,
            period:true
            } 
        },
        City: true,
        Country: true,
      }
    })
  }

  async getByEmail(reference: string): Promise<Company | null> {
     return await this.prisma.company.findUnique({
      where:{
        email: reference
      },
      include:{
        Jobs:{
            include:{
            Skills:{
                include:{
                skill: true
                }
            },
            City: true,
            area: true,
            Country: true,
            level:true,
            period:true
            } 
        },
        City: true,
        Country: true,
      }
    })
  }

  async delete(reference: string): Promise<Company> {
    return await this.prisma.company.delete({
      where:{
        id: reference
      }
    })
  }

  async list(): Promise<Company[]>{
    return await this.prisma.company.findMany({
      include:{
        Jobs:{
            include:{
              Skills:{
                  include:{
                  skill: true
                }
            },
            City: true,
            area: true,
            level:true,
            period:true,
            Country: true,
          } 
        },
        City: true,
        Country: true,
    }
    })
  }

  async updatePassword ({id,password}: IUpdateCompanyPasswordRequest): Promise<Company> {
    return await this.prisma.company.update({
      where:{
        id
      },
      data:{
        password
      },
    })
  }

}