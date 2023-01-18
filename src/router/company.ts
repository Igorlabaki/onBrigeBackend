import { Router } from "express"
import { ensureAutheticate } from "../middleware/ensureAuthenticate"
import { getCompanyByIdFactory } from "../useCases/company/getCompanyByIdCase.ts/getCompanyByIdFactory"
import { listCopmpanyAccountsFactory } from "../useCases/company/listCompanyAcconts/listCompanyAccountsFactory"
import { updateCompanyAvatarFactory } from "../useCases/company/updateCompanyAvatarCase/updateCompanyAvatarFactory"
import { updateCompanyInfoFactory } from "../useCases/company/updateCompanyInfoCase/updateCompanyInfoFactory"
import { listDeveloperAccountsFactory } from "../useCases/developer/listDeveloperAccountsCase/listDeveloperAccountsFactory"

const companyRoutes = Router()

// List companies accounts.
    companyRoutes.get("/list", (request,response) => {
        return listCopmpanyAccountsFactory().handle(request,response)
    })
//

// update company infos.
companyRoutes.put("/updateInfo",ensureAutheticate, (request,response) => {
    return updateCompanyInfoFactory().handle(request,response)
})
//

// update company avatar.
companyRoutes.put("/updateAvatar",ensureAutheticate, (request,response) => {
    return updateCompanyAvatarFactory().handle(request,response)
})
//

// Get Company by id.
    companyRoutes.get("/getById/:companyId",ensureAutheticate, (request,response) => {
        return getCompanyByIdFactory().handle(request,response)
    })
//

export {companyRoutes}