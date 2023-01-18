import { Router } from "express"
import { deletedAccountFactory } from "../useCases/auth/deleteAccountCase/deleteAccountFactory"
import { createNewCompanyAccountFactory } from "../useCases/auth/createNewCompanyAccountCase/createNewCompanyAccountFactory"
import { createNewDeveloperAccountFactory } from "../useCases/auth/createNewDeveloperAccountCase/createNewDeveloperAccountFacory"
import { authenticateAccountFactory } from "../useCases/auth/authenticateAccountCase/authenticateAccountFactory"
import { recoveryAccountDataFactory } from "../useCases/auth/recoveryAccountCase/recoveryAccountDataFactory"
import { ensureAutheticate } from "../middleware/ensureAuthenticate"

const authRoutes = Router()

// Create a new developer account.
    authRoutes.post("/createNewDeveloperAccount", (request,response) => {
        return createNewDeveloperAccountFactory().handle(request,response)
    })
//

// Create a new company account.
    authRoutes.post("/createNewCompanyAccount", (request,response) => {
        return createNewCompanyAccountFactory().handle(request,response)
    })
//

// Athenticate account.
    authRoutes.post("/authenticateAccount", (request,response) => {
        return authenticateAccountFactory().handle(request,response)
    })
//

// Recovery account data.
    authRoutes.get("/recoveryAccountData", (request,response) => {
        return recoveryAccountDataFactory().handle(request,response)
    })
//

// Delete a account.
    authRoutes.delete("/deleteAccount",ensureAutheticate, (request,response) => {
        return deletedAccountFactory().handle(request,response)
    })
//

export {authRoutes}