class Customer {
  constructor(id, name, lastName, address, city, cellphone, email) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.cellphone = cellphone;
    this.email = email;
    this.credits = [];
  }
  setId(id) {
    this.id = id;
  }
  setName(name) {
    this.name = name;
  }
  setLastName(lastName) {
    this.lastName = lastName;
  }
  setaddress(address) {
    this.address = address;
  }
  setCellphone(cellphone) {
    this.cellphone = cellphone;
  }
  setCredits(credits) {
    this.credits.push(credits);
  }
  setEmail(email) {
    this.email = email;
  }
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getLastName() {
    return this.lastName;
  }
  getaddress() {
    return this.address;
  }
  getCellphone() {
    return this.cellphone;
  }
  getCredits() {
    return this.credits;
  }
  getEmail() {
    return this.email;
  }
}
// module.exports = Customer;
