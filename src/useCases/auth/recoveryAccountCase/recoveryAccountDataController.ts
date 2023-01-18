import { Request, Response } from "express";
import { RecoveryAccountDataCase } from "./recoveryAccountDataCase";

class RecoveryAccountDataController{
    constructor(private recoveryAccountDataCase:RecoveryAccountDataCase){}

    async handle(req:Request, resp:Response){
        const authHeader = req.headers.authorization

        if(authHeader){
            const [,token] = authHeader.split(" ")

            const account = await this.recoveryAccountDataCase.execute(
                token
            )
    
            return resp.json(account)
        }
    }
}

export {RecoveryAccountDataController}