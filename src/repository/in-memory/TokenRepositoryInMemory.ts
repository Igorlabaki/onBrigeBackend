import dayjs from "dayjs";
import { v4 as uuid } from "uuid";
import { RefreshToken } from "@prisma/client";
import { ICreateDeveloperTokenRequest,ICreateCompanyTokenRequest, ITokenRepository } from "../ITokenRepository";

export class TokenRepositoryInMemory implements ITokenRepository {
  private refreshTokens: RefreshToken[] = [];

  async createDeveloperToken(reference: string): Promise<RefreshToken | null> {
    const expireIn = dayjs().add(1,'day').unix()

    const token : ICreateDeveloperTokenRequest = {
        id: uuid(),
        userId: reference,
        expireIn: expireIn,
        companyId: ''
    }

    this.refreshTokens.push(token)

    const newUser = this.refreshTokens.find((refreshToken) => refreshToken.userId = reference)

    if(newUser){
      return newUser
    }else{
      return null
    }
  }

  async createCompanyToken(reference: string): Promise<RefreshToken | null> {
    const expireIn = dayjs().add(1,'day').unix()

    const token : ICreateCompanyTokenRequest = {
        id: uuid(),
        expireIn: expireIn,
        companyId: reference,
        userId:''
    }

    this.refreshTokens.push(token)

    const newCompany = this.refreshTokens.find((refreshToken) => refreshToken.companyId = reference)

    if(newCompany){
      return newCompany
    }else{
      return null
    }
  }

  async getDeveloperToken (reference: string): Promise<RefreshToken | null> {
    const user = this.refreshTokens.find((refreshToken) => refreshToken.userId = reference)
    if(user){
      return user
    }else{
      return null
    }
  }

  async getCompanyToken (reference: string): Promise<RefreshToken | null> {
    const user = this.refreshTokens.find((refreshToken) => refreshToken.companyId = reference)
    if(user){
      return user
    }else{
      return null
    }
  }

  async deleteDeveloperToken (reference: string): Promise<RefreshToken | null> {
    const userfind = this.refreshTokens.find((refreshToken) => refreshToken.userId = reference)
    this.refreshTokens.filter((refreshToken) => refreshToken.userId != reference)
    if(userfind){
      return userfind
    }else{
      return null
    }
  }

  async deleteCompanyToken (reference: string): Promise<RefreshToken | null> {
    const userfind = this.refreshTokens.find((refreshToken) => refreshToken.companyId = reference)
    this.refreshTokens.filter((refreshToken) => refreshToken.companyId != reference)
    if(userfind){
      return userfind
    }else{
      return null
    }
  }
}