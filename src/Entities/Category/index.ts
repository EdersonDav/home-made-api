import { ICategory } from '../../types';

export class Category {
  private category: ICategory;

  constructor(category: ICategory) {
    this.category = category;
  }

  public get(): ICategory {
    return this.category;
  }
}
