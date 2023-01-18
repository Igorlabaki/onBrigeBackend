import {Request,Response} from "express"
import { CreateNewCompanyAccountCase } from "./createNewCompanyAccountCase";
import { ICreateNewCompanyAccount } from "../../../repository/ICompanyRepository";

class CreateNewCompanyAccountController{
    constructor(private createNewCompanyAccountCase: CreateNewCompanyAccountCase){}

    async handle(req:Request, resp: Response){
        const {name,email,password,userType} = req.body

        const companyInputs : ICreateNewCompanyAccount = {
            email,password,name,userType
        }

        const token = await this.createNewCompanyAccountCase.execute(
            companyInputs
        )

        return resp.json(token)
    }
}

export {CreateNewCompanyAccountController}