import { PrismaClient,  Area } from "@prisma/client";
import { IAreaRepository } from "../IAreaRepository";

export class PrismaAreaRepository implements IAreaRepository  {
  constructor (private readonly prisma: PrismaClient){}

  async create (reference: string): Promise<Area> {
    return await this.prisma.area.create({
     data:{
      name: reference
     }
    })
  }

  async getByName (reference: string): Promise<Area | null> {
    return await this.prisma.area.findFirst({
      where:{
       name: reference
      }
    })
  }

  async delete (reference: string): Promise<Area> {
    return await this.prisma.area.delete({
      where:{
        name: reference
      }
    })
  }

  async update (reference: string): Promise<Area | null>{
    return await this.prisma.area.delete({
     where:{
      name: reference
     }
    })
  }

  async list(): Promise<Area[] | null>{
    return await this.prisma.area.findMany({
      include:{
        users: true,
        jobs: true,
      }
    })
  }
}