import { default as PartModel } from '../part.model';

describe('part model class test', () => {
  it('should return right value through getters', () => {
    const id = 'FAKE_ID';
    const name = 'FAKE_NAME';
    const thumb = 'FAKE_THUMB';

    const partInstance = new PartModel({ id, name, thumb });

    expect(partInstance.getDataValue('id')).toBe(id);
    expect(partInstance.getDataValue('name')).toBe(name);
    expect(partInstance.getDataValue('thumb')).toBe(thumb);
  });
});
