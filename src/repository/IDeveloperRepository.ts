import { Link, Skill, User } from "@prisma/client"

export interface ICreateNewDeveloperAccount{
    email   : string;
    name: string;
    password: string;
    userType: string;
    area    : string;
    level   : string;
}

export interface IUpdateDeveloperInfoRequest{
    developerId          : string;
    about         : string;  
    area        : string;
    level       : string;    
    email       : string;
    name    : string;
    cityName    : string;
    countryName : string; 
    linkList: Link[]
}

export interface IUpdateDeveloperPasswordRequest{
    id          : string;
    password    : string;
}
export interface IUpdateDeveloperListSkillsRequest{
    developerId : string;
    listSkills    : Skill[];
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
    getById:(reference: string) => Promise<User | null>
    delete: (reference: string) => Promise<User  | null> 
    getByEmail:(reference: string) => Promise<User | null>
    updateAvatar: (avatarUrl: string, companyId: string) => Promise<User| null>
    updateSkills: ({developerId, listSkills}: IUpdateDeveloperListSkillsRequest ) => Promise<void>
    updatePassword: ({id,password}:IUpdateDeveloperPasswordRequest) => Promise<User| null>
    create:({email,password,name,userType}: ICreateNewDeveloperAccount) => Promise<User | null>
    updateInfos: ({email,about,name,developerId,cityName,countryName,level,area,linkList}: IUpdateDeveloperInfoRequest) => Promise<User| null>
}

export { IDeveloperRepository };