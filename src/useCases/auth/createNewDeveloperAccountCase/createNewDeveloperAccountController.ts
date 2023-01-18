import {Request,Response} from "express"
import { CreateNewDeveloperAccountCase } from "./createNewDeveloperAccountCase";
import { ICreateNewDeveloperAccount } from "../../../repository/IDeveloperRepository";

class CreateNewDeveloperAccountController{
    constructor(private createNewDeveloperAccountCase: CreateNewDeveloperAccountCase){}

    async handle(req:Request, resp: Response){
        const {name,email,password,userType,area,level} = req.body

        const developerInputs : ICreateNewDeveloperAccount = {
            email,password,name,userType,area,level
        }

        const token = await this.createNewDeveloperAccountCase.execute(
            developerInputs
        )

        return resp.json(token)
    }
}

export {CreateNewDeveloperAccountController}