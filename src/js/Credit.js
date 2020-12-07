class Credit {
  constructor(number, value, interest, date, months) {
    this.number = number;
    this.value = Number(value);
    this.interest = Number(interest);
    this.date = date;
    this.months = Number(months);
    this.total = this.value + (this.value * this.interest) / 100;
    this.cuotas = this.total / this.months;
    this.state = true;
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
  setState(state) {
    this.state = state;
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
  getState() {
    return this.state;
  }
}
// module.exports = Credit;
