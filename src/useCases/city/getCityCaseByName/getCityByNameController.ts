import {Request,Response} from "express"
import { GetCityByNameCase } from "./getCityCaseByName"


class GetCityByNameController{
    constructor(private getCityByNameCase: GetCityByNameCase){}

    async handle(req: Request, resp: Response){
        const {cityName} = req.params

        const city = await this.getCityByNameCase.execute(cityName)

        return resp.json(city)
    }
}

export {GetCityByNameController}