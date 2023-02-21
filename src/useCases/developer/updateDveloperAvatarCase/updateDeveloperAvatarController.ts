import { Response,Request } from "express";
import { UpdateDeveloperAvatarCase } from "./updateDeveloperAvatarCase";

class UpdateDeveloperAvatarController {
    constructor(private updateDeveloperAvatarCase: UpdateDeveloperAvatarCase){}


    async handle(resq: Request, resp: Response){
        const {avatarUrl,developerId} = resq.body

        const developerUpdated = await this.updateDeveloperAvatarCase.execute(
            avatarUrl, developerId
        )

        return resp.json(developerUpdated)
    }
}

export {UpdateDeveloperAvatarController}