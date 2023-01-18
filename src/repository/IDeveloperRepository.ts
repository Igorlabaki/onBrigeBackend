import { User } from "@prisma/client"

export interface ICreateNewDeveloperAccount{
    email   : string;
    name: string;
    password: string;
    userType: string;
    area    : string;
    level   : string;
}

export interface IUpdateDeveloperInfoRequest{
    id          : string;
    bio         : string;  
    area        : string;
    level       : string;    
    email       : string;
    name    : string;
    cityName    : string;
    countryName : string; 
}

export interface IUpdateDeveloperPasswordRequest{
    id          : string;
    password    : string;
}

export interface IAutheticateAccount{
    userType: string;
    password: string;
    email   : string;
}

export interface IDeleteAccount{
    userId      : string;
    userType    : string;
}
  
interface IDeveloperRepository {
    list:   () => Promise<User[]>
    delete: (reference: string) => Promise<User  | null> 
    getById:(reference: string) => Promise<User | null>
    getByEmail:(reference: string) => Promise<User | null>
    updateInfos: ({email,bio,name,id,cityName,countryName,level,area}: IUpdateDeveloperInfoRequest) => Promise<User| null>
    updatePassword: ({id,password}:IUpdateDeveloperPasswordRequest) => Promise<User| null>
    create:({email,password,name,userType}: ICreateNewDeveloperAccount) => Promise<User | null>
}

export { IDeveloperRepository };