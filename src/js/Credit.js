class Credit {
  constructor(number, value, interest, date, months) {
    this.number = number;
    this.value = Number(value);
    this.interest = Number(interest);
    this.date = date;
    this.months = Number(months);
    this.total = this.value + (this.value * this.interest) / 100;
    this.cuotas = this.setCuotas(this.date, this.months, this.total);
    this.state = true;
  }
  setCuotas(date, months, total) {
    
    let roundOff = (num, places) => {
      const x = Math.pow(10,places);
      return Math.round(num * x) / x;
    }
    const cuota_value = roundOff(total / months,2);
    const cuotas = [];
    let dateSplitted = date.split("-");
    dateSplitted = dateSplitted.map((element) => { return Number(element); });
    let currentMonth = dateSplitted[1];
    let currentYear = dateSplitted[0];
    for (let i = 0; i < months; i++) {
      if (currentMonth === 12) {
        currentMonth = 0;
      }
      const nextMonth = ++currentMonth;
      const newYear = nextMonth === 1 ? ++currentYear : currentYear;
      const date = `${nextMonth}/${newYear}`;
      const newCuota = new Cuota(i + 1, date, cuota_value, false);
      cuotas.push(JSON.parse(JSON.stringify(newCuota)));
    }
    return cuotas;
  }
  setNumber(number) {
    this.number = number;
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
  getNumber(){
    return this.number;
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
