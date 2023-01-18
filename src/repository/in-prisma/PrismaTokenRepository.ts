import dayjs from "dayjs";
import { ITokenRepository } from "../ITokenRepository";
import { PrismaClient, RefreshToken } from "@prisma/client";

export class PrismaTokenRepository implements ITokenRepository {
  constructor (private readonly prisma: PrismaClient){}

  async createDeveloperToken (reference: string): Promise<RefreshToken> {

    const expireIn = dayjs().add(1,'day').unix()

    return await this.prisma.refreshToken.create({
      data:{
        user:{
          connect:{
            id: reference
          }
        },
        expireIn: expireIn
      }
    })

  }

  async createCompanyToken (reference: string): Promise<RefreshToken> {

    const expireIn = dayjs().add(1,'day').unix()

    return await this.prisma.refreshToken.create({
      data:{
        company:{
          connect:{
            id: reference
          }
        },
        expireIn: expireIn
      }
    })

  }

  async getDeveloperToken (reference: string): Promise<RefreshToken | null> {
    return await this.prisma.refreshToken.findFirst({
      where:{
        userId: reference
      }
    })
  }

  async getCompanyToken (reference: string): Promise<RefreshToken | null> {
    return await this.prisma.refreshToken.findFirst({
      where:{
        companyId: reference
      }
    })
  }

  async deleteDeveloperToken (reference: string): Promise<RefreshToken> {
    return await this.prisma.refreshToken.delete({
      where:{
          userId: reference
      }
    })
  }

  async deleteCompanyToken (reference: string): Promise<RefreshToken> {
    return await this.prisma.refreshToken.delete({
      where:{
          companyId: reference
      }
    })
  }
}