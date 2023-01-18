import { Router } from "express"
import { ensureAutheticate } from "../middleware/ensureAuthenticate"
import { getCityByNameFactory } from "../useCases/city/getCityCaseByName/getCityByNameFactory"
import { listCityFactory } from "../useCases/city/listCityCase/listCityFactory"

const cityRoutes = Router()

// List cities.
cityRoutes.get("/list",ensureAutheticate, (request,response) => {
    return listCityFactory().handle(request,response)
})

//
// Get City By name.
cityRoutes.get("/getByName/:name",ensureAutheticate, (request,response) => {
    return  getCityByNameFactory().handle(request,response)
})
//

export {cityRoutes}