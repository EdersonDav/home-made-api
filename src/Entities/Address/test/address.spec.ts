import { Address } from '..';

describe('Address Entity', () => {
  it('should be able to create a new address', () => {
    const address = new Address({
      country_name: 'Portugal',
      country_acronym: 'PT',
      address_number: 245,
      complement: 'store 01',
      street: 'João III',
      township: 'Porto',
      zipCode: '4090-2020',
      city: 'Porto',
      latitude: 1789,
      longitude: 9080,
    });

    expect(address).toBeTruthy();
  });

  it('should be get full address for view', () => {
    const address = new Address({
      country_name: 'Portugal',
      country_acronym: 'PT',
      address_number: 245,
      complement: 'store 01',
      street: 'João III',
      township: 'Porto',
      zipCode: '4090-2020',
      city: 'Porto',
      latitude: 1789,
      longitude: 9080,
    });

    const formatView = 'João III, 245, Porto - Portugal';

    const getAddress = address.getFormatAddress();

    expect(getAddress).toEqual(formatView);
  });

  it('should be able to get a address', () => {
    const addressObject = {
      country_name: 'Portugal',
      country_acronym: 'PT',
      address_number: 245,
      complement: 'store 01',
      street: 'João III',
      township: 'Porto',
      zipCode: '4090-2020',
      city: 'Porto',
      latitude: 1789,
      longitude: 9080,
    };
    const address = new Address(addressObject);

    expect(address.get()).toEqual(addressObject);
  });
});
