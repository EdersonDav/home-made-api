import { IImages } from '../../types';

export class Images {
  private images: IImages[];

  constructor(images: IImages[]) {
    const findImage = images.find((i) => i.priority);
    this.images = !findImage ? this.setPriorityWhenNotHave(images) : images;
  }

  public get(): IImages[] {
    return this.images;
  }

  public getPriority(): IImages {
    return this.images.find((i) => i.priority);
  }

  private setPriorityWhenNotHave(images: IImages[]): IImages[] {
    images[0].priority = true;
    return images;
  }
}
