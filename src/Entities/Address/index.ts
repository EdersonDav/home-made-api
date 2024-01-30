import { IAddress } from '../../types';

export class Address {
  private address: IAddress;
  constructor(address: IAddress) {
    this.address = address;
  }
}
