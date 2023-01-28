import { Request, Response } from "express";
import { UpdateJobByIdCase } from "./updateJobByIdCase";


class UpdateJobByIdController {
  constructor(private updateJobByIdCase: UpdateJobByIdCase) {}

  async handle(req: Request, resp: Response){
    const {area,level,about,period,cityName,companyId,countryName,minimumPercentagem,jobId} = req.body
    
    const job = await this.updateJobByIdCase.execute(
      {area,level,about,period,cityName,companyId,countryName,minimumPercentagem,jobId}
    )

    return resp.json(job)
  }
}

export {UpdateJobByIdController}