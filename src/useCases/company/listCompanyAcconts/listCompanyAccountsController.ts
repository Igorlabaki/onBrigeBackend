import { Request, Response } from "express";
import { ListCompanyAccountsCase } from "./listCompanyAccountsCase";


class ListCompanyAccountsController{
    constructor(private listCompanyAccountsCase: ListCompanyAccountsCase){}

    async handle(resq: Request, resp: Response){
        const listCompanyAccounts = await this.listCompanyAccountsCase.execute()

        return resp.json(listCompanyAccounts)
    }
}

export {ListCompanyAccountsController}