import { PrismaClient,  Period } from "@prisma/client";
import { IPeriodRepository } from "../IPeriodRepository";

export class PrismaPeriodRepository implements IPeriodRepository  {
  constructor (private readonly prisma: PrismaClient){}

  async create (reference: string): Promise<Period> {
    return await this.prisma.period.create({
     data:{
      name: reference
     }
    })
  }

  async getByName (reference: string): Promise<Period | null> {
    return await this.prisma.period.findFirst({
      where:{
       name: reference
      }
    })
  }

  async delete (reference: string): Promise<Period> {
    return await this.prisma.period.delete({
      where:{
        name: reference
      }
    })
  }

  async update (reference: string): Promise<Period | null>{
    return await this.prisma.period.delete({
     where:{
      name: reference
     }
    })
  }

  async list(): Promise<Period[] | null>{
    return await this.prisma.period.findMany({
      include:{
        jobs: true
      }
    })
  }
}