import { Category } from '..';

describe('Category Entity', () => {
  it('should be able to create a new category', () => {
    const category = new Category({ name: 'restaurant' });
    expect(category).toBeTruthy();
  });

  it('should be able to get a category', () => {
    const categoryObject = { name: 'restaurant' };
    const category = new Category(categoryObject);

    expect(category.get()).toEqual(categoryObject);
  });
});
