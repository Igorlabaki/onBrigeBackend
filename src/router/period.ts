import { Router } from "express"
import { ensureAutheticate } from "../middleware/ensureAuthenticate"

import { getCityByNameFactory } from "../useCases/city/getCityCaseByName/getCityByNameFactory"
import { getPeriodByNameFactory } from "../useCases/period/getPeriodCaseByName/getPeriodByNameFactory"
import { listPeriodFactory } from "../useCases/period/listPeriodCase/listPeriodFactory"

const periodRoutes = Router()

// List periods.
    periodRoutes.get("/list", (request,response) => {
        return listPeriodFactory().handle(request,response)
    })
//

// Get period By name.
    periodRoutes.get("/getById/:id",ensureAutheticate, (request,response) => {
        return  getPeriodByNameFactory().handle(request,response)
    })
//

export {periodRoutes}