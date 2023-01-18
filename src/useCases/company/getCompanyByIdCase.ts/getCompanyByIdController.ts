import { Request, Response } from "express";
import { GetCompanyByIdCase } from "./getCompanyByIdCase";


class GetCompanyByIdController {
  constructor(private getCompanyByIdCase: GetCompanyByIdCase) {}

  async handle(req: Request, resp: Response){
    const {companyId} = req.params

    const company = await this.getCompanyByIdCase.execute(companyId)

    return resp.json(company)
  }
}

export {GetCompanyByIdController}