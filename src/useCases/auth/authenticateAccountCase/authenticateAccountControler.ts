import { Request, Response } from "express";
import { validateInputs } from "../../../util/validateInputs";
import { AuthenticateAccountCase } from "./authenticateAccountCase";
import { IAutheticateAccount } from "../../../repository/IDeveloperRepository";

class AuthenticateAccountController{
    constructor(private authenticateAccountCase: AuthenticateAccountCase){}

    async handle(req:Request,resp:Response){
        const {email,password,userType} = req.body

        // Validate input
         validateInputs([!!password,!!email,!!userType])
        //

        const authenticateAccountBody : IAutheticateAccount = {
            email,
            password,
            userType
        }

        const token = await this.authenticateAccountCase.execute(authenticateAccountBody)

        return resp.json(token)
    }
}

export {AuthenticateAccountController}