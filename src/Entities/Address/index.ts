import { IAddress } from '../../types';

export class Address {
  private address: IAddress;

  constructor(address: IAddress) {
    this.address = address;
  }

  public getFormatAddress(): string {
    return `${this.address.street}, ${this.address.address_number}, ${this.address.township} - ${this.address.country_name}`;
  }

  public get(): IAddress {
    return this.address;
  }

  // private addressRequiredKeys = [
  //   'country_name',
  //   'country_acronym',
  //   'address_number',
  //   'street',
  //   'township',
  //   'zipCode',
  //   'city',
  //   'latitude',
  //   'longitude',
  // ];
  // private validateAddress(): boolean {
  //   const missedFields = [];
  //   this.addressRequiredKeys.forEach((key: string) => {
  //     if (!this.address[key]) {
  //       missedFields.push(key);
  //     }
  //   });

  //   return !missedFields.length;
  // }
}
