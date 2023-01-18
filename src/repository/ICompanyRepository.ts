import { Company } from "@prisma/client"

export interface ICreateNewCompanyAccount{
    name: string;
    email: string;
    password: string;
    userType: string;
}

export interface IUpdateInfoCompanyRequest{
    id          : string
    name        : string
    email       : string
    about         : string           
    cityName         : string           
    countryName         : string           
}

export interface IUpdateCompanyPasswordRequest{
    id          : string
    password    : string
}
  
interface ICompanyRepository {
    list:   () => Promise<Company[]>
    getById:(reference: string) => Promise<Company | null>
    delete: (reference: string) => Promise<Company  | null> 
    updateAvatar: (avatarUrl: string, companyId: string) => Promise<Company| null>
    getByEmail:(reference: string) =>  Promise< Company | null>
    updateInfos: ({email,about,name,id}: IUpdateInfoCompanyRequest) => Promise<Company| null>
    updatePassword: ({id,password}:IUpdateCompanyPasswordRequest) => Promise<Company| null>
    create:({email,password,userType,name}:ICreateNewCompanyAccount) => Promise<Company | null>
}

export { ICompanyRepository };