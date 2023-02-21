import { Router } from "express"
import { ensureAutheticate } from "../middleware/ensureAuthenticate"
import { getDeveloperByIdFactory } from "../useCases/developer/getDeveloperByIdCase.ts/getDeveloperByIdFactory"
import { updateDeveloperInfoFactory } from "../useCases/developer/updateDeveloperInfoCase/updateDeveloperInfoFactory"
import { listDeveloperAccountsFactory } from "../useCases/developer/listDeveloperAccountsCase/listDeveloperAccountsFactory"
import { updateDeveloperAvatarFactory } from "../useCases/developer/updateDveloperAvatarCase/updateCompanyAvatarFactory"
import { updateDeveloperSkillsFactory } from "../useCases/developer/updateUserSkillsCase/updateCompanySkillsFactory"

const developerRoutes = Router()

// List developers accounts.
    developerRoutes.get("/list", (request,response) => {
        return listDeveloperAccountsFactory().handle(request,response)
    })
//

// Get developer by id.
    developerRoutes.get("/getById/:developerId",ensureAutheticate, (request,response) => {
        return getDeveloperByIdFactory().handle(request,response)
    })
//

// update developer infos.
    developerRoutes.put("/updateInfo",ensureAutheticate, (request,response) => {
        return updateDeveloperInfoFactory().handle(request,response)
    })
//
// update developer avatar.
    developerRoutes.put("/updateAvatar",ensureAutheticate, (request,response) => {
        return updateDeveloperAvatarFactory().handle(request,response)
    })
//
// update developer skills.
    developerRoutes.put("/updateSkills",ensureAutheticate, (request,response) => {
        return updateDeveloperSkillsFactory().handle(request,response)
    })
//

export {developerRoutes}