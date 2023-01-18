import { Request, Response } from "express";
import { GetDeveloperByIdCase } from "./getDeveloperByIdCase";

class GetDeveloperByIdController {
  constructor(private getDeveloperByIdCase: GetDeveloperByIdCase) {}

  async handle(req: Request, resp: Response){
    const {developerId} = req.params

    const developer = await this.getDeveloperByIdCase.execute(developerId)

    return resp.json(developer)
  }
}

export {GetDeveloperByIdController}
