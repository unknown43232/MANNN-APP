import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>
  ) {}

  async create(data: any): Promise<User> {
    return this.userModel.create(data);
  }
  async findOne(condition: any): Promise<User> {
    return this.userModel.findOne(condition);
  }
}
