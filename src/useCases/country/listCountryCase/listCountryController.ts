import { Response,Request } from "express";
import { ListCountryCase } from "./listCountryCase";

class ListCountryController{
    constructor(private listCountryCase:ListCountryCase){}

    async handle(req: Request, resp: Response){
        const listCountry = await this.listCountryCase.execute()

        return resp.json(listCountry)
    }
}

export {ListCountryController}