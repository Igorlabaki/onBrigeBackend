import {Request,Response} from "express"
import { CreateNewJobCase } from "./createNewJobCase";
import { ICreateNewJob } from "../../../repository/IJobRepository";


class CreateNewJobController{
    constructor(private createNewJobCase: CreateNewJobCase){}

    async handle(req:Request, resp: Response){
        const {about,area,cityName,companyId,countryName,level,minimumPercentagem,period} = req.body

        const jobInputs : ICreateNewJob = {
            about,area,cityName,companyId,countryName,level,minimumPercentagem,period
        }

        const token = await this.createNewJobCase.execute(
            jobInputs
        )

        return resp.json(token)
    }
}

export {CreateNewJobController}