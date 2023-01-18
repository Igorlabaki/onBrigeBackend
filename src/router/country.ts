import { Router } from "express"
import { ensureAutheticate } from "../middleware/ensureAuthenticate"
import { getCountryByNameFactory } from "../useCases/country/getCountryCaseByName/getCountryByNameFactory"
import { listCountryFactory } from "../useCases/country/listCountryCase/listCountryFactory"

const countryRoutes = Router()

// List countries.
countryRoutes.get("/list",ensureAutheticate, (request,response) => {
    return listCountryFactory().handle(request,response)
})

//
// Get Countr By name.
countryRoutes.get("/getByName/:name",ensureAutheticate, (request,response) => {
    return  getCountryByNameFactory().handle(request,response)
})
//

export {countryRoutes}