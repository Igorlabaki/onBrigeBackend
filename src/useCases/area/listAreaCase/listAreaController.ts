import { Response,Request } from "express";
import { ListAreaCase } from "./listAreaCase";

class ListAreaController{
    constructor(private listAreaCase:ListAreaCase){}

    async handle(req: Request, resp: Response){
        const areas = await this.listAreaCase.execute()

        return resp.json(areas)
    }
}

export {ListAreaController}