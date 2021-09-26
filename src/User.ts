import {name, address} from 'faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = name.firstName();
    this.location = {
      lat: +address.latitude(),
      lng: +address.longitude(),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`
  }
}
