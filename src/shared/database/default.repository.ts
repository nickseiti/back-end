import { Model } from 'mongoose';

export abstract class DefaultRepository<T, CREATEDTO, UPDATEDTO> {
  constructor(protected readonly model: Model<T>) {}

  async create(dto: Partial<CREATEDTO>): Promise<T> {
    const createdEntity = new this.model(dto);
    return await createdEntity.save();
  }

  async findAll(): Promise<T[]> {
    return await this.model.find().exec();
  }

  async findById(id: string): Promise<T> {
    return await this.model.findById(id).exec();
  }

  async update(id: string, dto: Partial<UPDATEDTO>): Promise<T> {
    return await this.model.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  async delete(id: string): Promise<T> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
