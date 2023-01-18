import { Router } from "express"
import { ensureAutheticate } from "../middleware/ensureAuthenticate"
import { listJobFactory } from "../useCases/job/listJobs/listJobsFactory"
import { createNewJobFactory } from "../useCases/job/createNewJobCase/createNewJobFactory"
import { getCityByNameFactory } from "../useCases/city/getCityCaseByName/getCityByNameFactory"
import { getJobByIdFactory } from "../useCases/job/getJobByIdCase.ts/getJobByIdFactory"

const jobRoutes = Router()

// List jobs.
jobRoutes.get("/list", (request,response) => {
    return listJobFactory().handle(request,response)
})

//

// create job.
jobRoutes.post("/create",ensureAutheticate, (request,response) => {
    return createNewJobFactory().handle(request,response)
})

//
// Get job By name.
jobRoutes.get("/getById/:id",ensureAutheticate, (request,response) => {
    return  getJobByIdFactory().handle(request,response)
})
//

export {jobRoutes}