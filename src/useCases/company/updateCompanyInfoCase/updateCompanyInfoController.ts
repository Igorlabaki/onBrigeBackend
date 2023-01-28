import { Response,Request } from "express";
import { UpdateCompanyInfoCase } from "./updateCompanyInfoCase";

class UpdateCompanyInfoController {
    constructor(private updateCompanyInfoCase: UpdateCompanyInfoCase){}


    async handle(resq: Request, resp: Response){
        const {email,name,companyId,cityName,countryName,about} = resq.body

        const companyUpdated = await this.updateCompanyInfoCase.execute(
           {email,name,companyId,cityName,countryName,about}
        )

        return resp.json(companyUpdated)
    }
}

export {UpdateCompanyInfoController}