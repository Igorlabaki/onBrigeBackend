import {Request,Response} from "express"
import { GetPeriodByNameCase } from "./getPeriodCaseByName"

class GetPeriodByNameController{
    constructor(private getPeriodByNameCase: GetPeriodByNameCase){}

    async handle(req: Request, resp: Response){
        const {periodName} = req.params

        const period = await this.getPeriodByNameCase.execute(periodName)

        return resp.json(period)
    }
}

export {GetPeriodByNameController}