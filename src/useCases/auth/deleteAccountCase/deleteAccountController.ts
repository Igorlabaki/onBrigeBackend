import { Request, Response } from "express";
import { DeleteAccountCase } from "./deleteAccountCase";
import { IDeleteAccount } from "../../../repository/IDeveloperRepository";

class DeleteAccountController{
    constructor(private deleteAccountCase: DeleteAccountCase){}

    async handle( req: Request, resp: Response){
        const {userType,userId} = req.body

        const deletedBody : IDeleteAccount = {
            userId,
            userType
        }

        const userDeleted = this.deleteAccountCase.execute(
            deletedBody
        )

        return resp.json(userDeleted)
    }
}

export {DeleteAccountController}