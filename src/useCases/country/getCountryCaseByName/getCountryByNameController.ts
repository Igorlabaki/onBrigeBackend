import {Request,Response} from "express"
import { GetCountryByNameCase } from "./getCountryCaseByName"

class GetCountryByNameController{
    constructor(private getCountryByNameCase: GetCountryByNameCase){}

    async handle(req: Request, resp: Response){
        const {countryName} = req.params

        const country = await this.getCountryByNameCase.execute(countryName)

        return resp.json(country)
    }
}

export {GetCountryByNameController}