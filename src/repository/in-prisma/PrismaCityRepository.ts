import { PrismaClient,  City } from "@prisma/client";
import { ICityRepository } from "../ICityRepository";

export class PrismaCityRepository implements ICityRepository  {
  constructor (private readonly prisma: PrismaClient){}

  async create (reference: string): Promise<City> {
    return await this.prisma.city.create({
     data:{
      name: reference
     }
    })
  }

  async getByName (reference: string): Promise<City | null> {
    return await this.prisma.city.findFirst({
      where:{
       name: reference
      }
    })
  }

  async delete (reference: string): Promise<City> {
    return await this.prisma.city.delete({
      where:{
        name: reference
      }
    })
  }

  async update (reference: string): Promise<City | null>{
    return await this.prisma.city.delete({
     where:{
      name: reference
     }
    })
  }

  async list(): Promise<City[] | null>{
    return await this.prisma.city.findMany({
      include:{
        user: true,
        Company: true,
        job: true
      }
    })
  }
}