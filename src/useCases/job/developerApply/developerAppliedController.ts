import { Request, Response } from "express";
import { DeveloperApplyCase } from "./developerApplyCase";

class DeveloeprAppliedController {
  constructor(private developerApplyCase: DeveloperApplyCase) {}

  async handle(req: Request, resp: Response){
    const {jobId,developerId} = req.body
 
    const job = await this.developerApplyCase.execute(jobId,developerId)
   
    return resp.json(job)
  }
}

export {DeveloeprAppliedController}