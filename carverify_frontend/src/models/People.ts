class People {
  id: number;

  name: string;

  address: string;

  neighborhood: string;

  age: number;

  nmHouse: number;

  city: string;

  constructor(
    id = 0,
    name = '',
    address = '',
    neighborhood = '',
    age = 0,
    nmHouse = 0,
    city = '',
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.neighborhood = neighborhood;
    this.age = age;
    this.nmHouse = nmHouse;
    this.city = city;
  }
}

export default People;
