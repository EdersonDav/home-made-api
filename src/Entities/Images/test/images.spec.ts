import { Images } from '..';
import { IImages } from '../../../types';

const imagesTest: IImages[] = [
  {
    url: 'lllllllllllll',
    description: 'image test 1',
    name: 'test1',
    priority: true,
  },
  {
    url: 'ccccccccccc',
    description: 'image test 2',
    name: 'test2',
  },
];
describe('Images Entity', () => {
  it('should be able to create images', () => {
    const images = new Images(imagesTest);
    expect(images).toBeTruthy();
  });

  it('should be able get images', () => {
    const images = new Images(imagesTest);
    expect(images.get()).toEqual(imagesTest);
  });

  it('should be set first image to priority when not have priority', () => {
    const newImagesTest: IImages[] = imagesTest.map((i) => ({
      url: i.url,
      description: i.description,
      name: i.name,
    }));

    const firstFindPriority = newImagesTest.find((i) => i.priority);

    const newImages = new Images(newImagesTest);

    expect(firstFindPriority).toBeFalsy();

    expect(newImages.getPriority()).toEqual({
      ...newImagesTest[0],
      priority: true,
    });
  });
});
