class Car {
  id: number;

  carPlaque: string;

  brand: string;

  model: string;

  yearBrand: number;

  yearModel: number;

  carCaster: string;

  constructor(
    id = 0,
    carPlaque = '',
    brand = '',
    model = '',
    yearBrand = 0,
    yearModel = 0,
    carCaster = '',
  ) {
    this.id = id;
    this.carPlaque = carPlaque;
    this.brand = brand;
    this.model = model;
    this.yearBrand = yearBrand;
    this.yearModel = yearModel;
    this.carCaster = carCaster;
  }
}

export default Car;
