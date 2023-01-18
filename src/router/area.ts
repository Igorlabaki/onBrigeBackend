import { Router } from "express"
import { ensureAutheticate } from "../middleware/ensureAuthenticate"
import { listAreaFactory } from "../useCases/area/listAreaCase/listAreaFactory"
import { getAreaByNameFactory } from "../useCases/area/getAreaCaseByName/getAreaByNameFactory"

const areaRoutes = Router()

// List areas.
    areaRoutes.get("/list", (request,response) => {
        return listAreaFactory().handle(request,response)
    })
//

// Get area By name.
    areaRoutes.get("/getById/:id",ensureAutheticate, (request,response) => {
        return  getAreaByNameFactory().handle(request,response)
    })
//

export {areaRoutes}