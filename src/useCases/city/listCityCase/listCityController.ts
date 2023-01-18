import { Response,Request } from "express";
import { ListCityCase } from "./listCityCase";

class ListCityController{
    constructor(private listCityCase:ListCityCase){}

    async handle(req: Request, resp: Response){
        const cities = await this.listCityCase.execute()

        return resp.json(cities)
    }
}

export {ListCityController}