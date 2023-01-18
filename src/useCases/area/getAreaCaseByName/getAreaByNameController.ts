import {Request,Response} from "express"
import { GetAreaByNameCase } from "./getAreaCaseByName"


class GetAreaByNameController{
    constructor(private getAreaByNameCase: GetAreaByNameCase){}

    async handle(req: Request, resp: Response){
        const {areaName} = req.params

        const area = await this.getAreaByNameCase.execute(areaName)

        return resp.json(area)
    }
}

export {GetAreaByNameController}