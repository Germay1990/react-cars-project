let serialNumber = 0;

export class Product {
  #Name;
  #Brand;
  #Price;
  #Category;
  #Image;

  constructor(name, brand, price, category, image) {
    this.#Name = name;
    this.#Brand = brand;
    this.#Price = price;
    this.#Category = category;
    this.#Image = image;
    this.id = this.constructor.countSerial();
  }

  get name() {
    return this.#Name;
  }
  get brand() {
    return this.#Brand;
  }
  get price() {
    return this.#Price;
  }
  get category() {
    return this.#Category;
  }
  get image() {
    return this.#Image;
  }

  static serialNumberStatic = 0;

  static countSerial() {
    this.serialNumberStatic++; // will be reset on each creation.
    return serialNumber++;
  }
}
