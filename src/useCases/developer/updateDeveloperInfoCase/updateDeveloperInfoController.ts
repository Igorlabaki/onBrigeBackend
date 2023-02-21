import { Response,Request } from "express";
import { IUpdateDeveloperInfoRequest } from "../../../repository/IDeveloperRepository";
import { UpdateDeveloperInfoCase } from "./updateDeveloperInfoCase";

class UpdateDeveloperInfoController {
    constructor(private updateDeveloperInfoCase: UpdateDeveloperInfoCase){}

    async handle(resq: Request, resp: Response){
        const {email,about,name,developerId,cityName,countryName,area,level,linkList} = resq.body

        const developerUpdated = await this.updateDeveloperInfoCase.execute(
           {email,about,name,developerId,cityName,countryName,area,level,linkList}
        )

        return resp.json(developerUpdated)
    }
}

export {UpdateDeveloperInfoController}