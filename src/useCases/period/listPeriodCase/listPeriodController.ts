import { Response,Request } from "express";
import { ListPeriodCase } from "./listPeriodCase";

class ListPeriodController{
    constructor(private listPeriodCase:ListPeriodCase){}

    async handle(req: Request, resp: Response){
        const periodList = await this.listPeriodCase.execute()

        return resp.json(periodList)
    }
}

export {ListPeriodController}