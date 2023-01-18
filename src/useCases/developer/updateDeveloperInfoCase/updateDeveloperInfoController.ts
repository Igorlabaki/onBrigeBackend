import { Response,Request } from "express";
import { IUpdateDeveloperInfoRequest } from "../../../repository/IDeveloperRepository";
import { UpdateDeveloperInfoCase } from "./updateDeveloperInfoCase";

class UpdateDeveloperInfoController {
    constructor(private updateDeveloperInfoCase: UpdateDeveloperInfoCase){}

    async handle(resq: Request, resp: Response){
        const {email,bio,name,id,cityName,countryName,area,level} = resq.body

        const developerUpdated = await this.updateDeveloperInfoCase.execute(
           {email,bio,name,id,cityName,countryName,area,level}
        )

        return resp.json(developerUpdated)
    }
}

export {UpdateDeveloperInfoController}