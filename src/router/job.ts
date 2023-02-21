import { Router } from "express"
import { ensureAutheticate } from "../middleware/ensureAuthenticate"
import { listJobFactory } from "../useCases/job/listJobs/listJobsFactory"
import { getJobByIdFactory } from "../useCases/job/getJobByIdCase/getJobByIdFactory"
import { deleteJobByIdFactory } from "../useCases/job/deleteJobById/getJobByIdFactory"
import { createNewJobFactory } from "../useCases/job/createNewJobCase/createNewJobFactory"
import { updateJobByIdFactory } from "../useCases/job/updateJobCase/updateJobByIdFactory"
import { developerAppliedFactory } from "../useCases/job/developerApply/developerAppliedFactory"
import { developerDismissFactory } from "../useCases/job/developerDismissApply/developerDismissFactory"

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
// Get job By id.
jobRoutes.get("/getById/:id",ensureAutheticate, (request,response) => {
    return  getJobByIdFactory().handle(request,response)
})
//

// Update job By id.
jobRoutes.put("/update",ensureAutheticate, (request,response) => {
    return  updateJobByIdFactory().handle(request,response)
})
//

// Delete job By id.
jobRoutes.delete("/delete/:id",ensureAutheticate, (request,response) => {
    return  deleteJobByIdFactory().handle(request,response)
})
//

// Developer Applied
jobRoutes.put("/developerApplied",ensureAutheticate, (request,response) => {
    return  developerAppliedFactory().handle(request,response)
})
//

// Developer Applied
jobRoutes.delete("/developerDismiss/:jobId/:developerId",ensureAutheticate, (request,response) => {
    return  developerDismissFactory().handle(request,response)
})
//


export {jobRoutes}