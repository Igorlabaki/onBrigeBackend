import { Router } from "express"
import { ensureAutheticate } from "../middleware/ensureAuthenticate"
import { getDeveloperByIdFactory } from "../useCases/developer/getDeveloperByIdCase.ts/getDeveloperByIdFactory"
import { updateDeveloperInfoFactory } from "../useCases/developer/updateDeveloperInfoCase/updateDeveloperInfoFactory"
import { listDeveloperAccountsFactory } from "../useCases/developer/listDeveloperAccountsCase/listDeveloperAccountsFactory"

const developerRoutes = Router()

// List developers accounts.
    developerRoutes.get("/list", (request,response) => {
        return listDeveloperAccountsFactory().handle(request,response)
    })
//

// Get developer by id.
    developerRoutes.get("/getById/:id",ensureAutheticate, (request,response) => {
        return getDeveloperByIdFactory().handle(request,response)
    })
//

// update developer infos.
    developerRoutes.put("/updateInfo",ensureAutheticate, (request,response) => {
        return updateDeveloperInfoFactory().handle(request,response)
    })
//

export {developerRoutes}