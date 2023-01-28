import { Request, Response } from "express";
import { GetJobByIdCase } from "./getJobByIdCase";


class GetJobByIdController {
  constructor(private getJobByIdCase: GetJobByIdCase) {}

  async handle(req: Request, resp: Response){
    const {id} = req.params

    const job = await this.getJobByIdCase.execute(id)

    return resp.json(job)
  }
}

export {GetJobByIdController}