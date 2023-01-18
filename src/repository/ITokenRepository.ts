import { Company, RefreshToken, User } from "@prisma/client";

export interface ICreateDeveloperTokenRequest{
  id         : string,
  expireIn   : number,
  userId     : string,
  companyId  : string
}

export interface ICreateCompanyTokenRequest{
  id         : string,
  expireIn   : number,
  userId     : string,
  companyId  : string
}

export interface IGenerateRefreshToken{
  id       : string | null | undefined,
  userType : string | null | undefined
}

export interface IHandleRefreshToken{
  user: Company | User | null
  tokenRepository: ITokenRepository
}

export interface IJwtToken{
  id: string,
  iat: number,
  exp: number,
  sub: string,
  email: string,
  userType: string,
}

interface ITokenRepository {
    createDeveloperToken  :(reference: string)  => Promise<RefreshToken | null>
    deleteDeveloperToken  :(reference: string)  => Promise<RefreshToken | null>
    getDeveloperToken     :(reference: string)  => Promise<RefreshToken | null>

    createCompanyToken  :(reference: string)  => Promise<RefreshToken | null>
    deleteCompanyToken  :(reference: string)  => Promise<RefreshToken | null>
    getCompanyToken     :(reference: string)  => Promise<RefreshToken | null>
  }

export { ITokenRepository };