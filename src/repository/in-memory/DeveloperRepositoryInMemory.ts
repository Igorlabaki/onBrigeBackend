import { v4 as uuid } from "uuid";
import { User } from "@prisma/client";
import { IUpdateDeveloperPasswordRequest,IDeveloperRepository,IUpdateDeveloperRequest, ICreateNewDeveloperAccount, IUpdateDeveloperInfoRequest } from "../IDeveloperRepository";

class DeveloperRepositoryInMemory implements IDeveloperRepository {
  updateInfos: ({ email, bio, name, id, cityName, countryName }: IUpdateDeveloperInfoRequest) => Promise<User | null>;
  private users: User[] = [];

  async create ({email,password,name,userType}: ICreateNewDeveloperAccount): Promise<User> {
    const user = {
      id: uuid(),
      email: email,
      password: password,
      name: name,
      userType: userType,
      bio: null,
      area: null,
      level: null,
      cityId: null,
      avatar: null,
      countryId: null,
      emailVerified: null,
      created_at: new Date(),
      locationInterestingId: null
    }
    this.users.push(user);
    return user;
  }

  async getById( reference:string): Promise<User | null> {
    const user = this.users.find((user) => user.id === reference);
    if(user){
      return user
    }else{
      return null
    }
  }

  async getByEmail( reference:string): Promise<User | null> {
    const user = this.users.find((user) => user.email === reference);
    if(user){
      return user
    }else{
      return null
    }
  }

  async delete(reference: string): Promise<User | null> {
   const user = this.users.filter((user) => reference != user.id)[0]
   if(user){
    return user
  }else{
    return null
  }
  }

  async list() : Promise<User[]>{
    return this.users
  }

  async update({ email, bio, name,id }: IUpdateDeveloperRequest):  Promise<User | null> {
    const user = this.users.find((user) => user.email === id);
    if(user){
      user.bio = bio
      user.email = email
      user.name = name
    }
    if(user){
      return user
    }else{
      return null
    }
  }

  async updatePassword({id,password}: IUpdateDeveloperPasswordRequest):Promise<User | null>{
    const user = this.users.find((user) => user.id === id);
    if(user){
      user.password = password
    }
    if(user){
      return user
    }else{
      return null
    }
  }
}

export { DeveloperRepositoryInMemory };
