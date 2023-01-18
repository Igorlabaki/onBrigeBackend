import { PrismaClient,  level } from "@prisma/client";
import { ILevelRepository } from "../ILevelRepository";

export class PrismaLevelRepository implements ILevelRepository  {
  constructor (private readonly prisma: PrismaClient){}

  async create (reference: string): Promise<level> {
    return await this.prisma.level.create({
     data:{
      name: reference
     }
    })
  }

  async getByName (reference: string): Promise<level | null> {
    return await this.prisma.level.findFirst({
      where:{
       name: reference
      }
    })
  }

  async delete (reference: string): Promise<level> {
    return await this.prisma.level.delete({
      where:{
        name: reference
      }
    })
  }

  async update (reference: string): Promise<level | null>{
    return await this.prisma.level.delete({
     where:{
      name: reference
     }
    })
  }

  async list(): Promise<level[] | null>{
    return await this.prisma.level.findMany({
      include:{
        users: true,
        jobs: true,
      }
    })
  }
}