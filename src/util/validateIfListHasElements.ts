import { City, Company, Country, Job, Skill, User } from "@prisma/client";

export function validateIfListHasElements(list:Job[] | City[] | Country[] | User[] | Company[] | Skill[], message:string){
    if(list?.length === 0){
        throw new Error(`No ${message} registered yet!`)  
    }
}
