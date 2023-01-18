import { Response,Request } from "express";
import { UpdateCompanyAvatarCase } from "./updateCompanyAvatarCase";

class UpdateCompanyAvatarController {
    constructor(private updateCompanyAvatarCase: UpdateCompanyAvatarCase){}


    async handle(resq: Request, resp: Response){
        const {avatarUrl,companyId} = resq.body

        const companyUpdated = await this.updateCompanyAvatarCase.execute(
            avatarUrl, companyId
        )

        return resp.json(companyUpdated)
    }
}

export {UpdateCompanyAvatarController}