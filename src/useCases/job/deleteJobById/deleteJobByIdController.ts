import { Request, Response } from "express";
import { DeleteJobByIdCase } from "./deleteJobByIdCase";


class DeleteJobByIdController {
  constructor(private deleteJobByIdCase: DeleteJobByIdCase) {}

  async handle(req: Request, resp: Response){
    const {id} = req.params

    const deletedJob = await this.deleteJobByIdCase.execute(id)

    return resp.json(deletedJob)
  }
}

export {DeleteJobByIdController}