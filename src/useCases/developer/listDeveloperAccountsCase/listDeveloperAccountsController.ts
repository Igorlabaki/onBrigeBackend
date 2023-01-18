import { Request, Response } from "express";
import { ListDeveloperAccountsCase } from "./listDeveloperAccountsCase";

class ListDeveloperAccountsController{
    constructor(private listDeveloperAccountsCase: ListDeveloperAccountsCase){}

    async handle(resq: Request, resp: Response){
        const listDeveloperAccounts = await this.listDeveloperAccountsCase.execute()

        return resp.json(listDeveloperAccounts)
    }
}

export {ListDeveloperAccountsController}