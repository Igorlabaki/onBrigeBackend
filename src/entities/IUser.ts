import uuid from 'uuid'
import { IRefreshToken } from './IRefreshToken'

class IUser {
  public id             : string              
  public username       : string
  public email          : string             
  public password       : string
  public area           : string             
  public level          : string
  public userType       : string
  public avatar?        : string
  public bio?           : string
  public created_at?    : Date
  public emailVerified? : Date
  public refreshToken?  : IRefreshToken

  constructor(username:string,password:string, email:string,area: string,
  level:string,userType:string) {
    this.id = uuid.v4();
    this.area = area;
    this.email = email;
    this.level = level;
    this.userType = userType;
    this.password = password;
    this.username = username;
  }
}

export {IUser}