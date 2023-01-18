import { Request, Response } from "express";
import { ListJobCase } from "./listJobsCase";


class ListJobController{
    constructor(private listJobCase: ListJobCase){}

    async handle(resq: Request, resp: Response){
        const listJobunts = await this.listJobCase.execute()

        return resp.json(listJobunts)
    }
}

export {ListJobController}