import { Request, Response } from "express";
import { DeveloperDismissCase } from "./developerDismissCase";

class DeveloperDismissController {
  constructor(private developerDismissCase: DeveloperDismissCase) {}

  async handle(req: Request, resp: Response){
    const {jobId,developerId} = req.params
 
    const job = await this.developerDismissCase.execute(jobId,developerId)
   
    return resp.json(job)
  }
}

export {DeveloperDismissController}