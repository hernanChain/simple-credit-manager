class Credit {
  constructor(value, interest, date, months) {
    this.value = value;
    this.interest = interest;
    this.date = date;
    this.months = months;
    this.total = value + (value * interest) / 100;
    this.cuotas = this.total / months;
  }
  setValue(value) {
    this.value = value;
  }
  setInterest(interest) {
    this.interest = interest;
  }
  setDate(date) {
    this.date = date;
  }
  setMonths(months) {
    this.months = months;
  }
  getValue() {
    return this.value;
  }
  getInterest() {
    return this.interest;
  }
  getDate() {
    return this.date;
  }
  getMonths() {
    return this.months;
  }
  getTotal() {
    return this.total;
  }
}
module.exports = Credit;
