import { Response,Request } from "express";
import { UpdateDeveloperSkillsCase } from "./updateDeveloperSkillsCase";

class UpdateDeveloperSkillsController {
    constructor(private updateDeveloperSkillsCase: UpdateDeveloperSkillsCase){}


    async handle(resq: Request, resp: Response){
        const {listSkills,developerId} = resq.body

        const developerUpdated = await this.updateDeveloperSkillsCase.execute(
            listSkills, developerId
        )

        return resp.json(developerUpdated)
    }
}

export {UpdateDeveloperSkillsController}