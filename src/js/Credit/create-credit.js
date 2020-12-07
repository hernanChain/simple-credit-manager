data = JSON.parse(localStorage.getItem("data"));
document.getElementById("create-credit-btn").addEventListener("click", () => {
  // TODO Validar que se ingresen todos los campos
  // TODO Validar que los campos sean el formato correcto
  const id = document.getElementById("id").value;
  const months = document.getElementById("months").value;
  const date = document.getElementById("date").value;
  const value = document.getElementById("value").value;
  const interest = document.getElementById("interest").value;
  // TODO Agregar numero de credito automatico
  const newCredit = new Credit("999999", value, interest, date, months);
  console.log(JSON.parse(JSON.stringify(newCredit)));
  const found = data.find((customer) => customer.id === id);
  if (found) {
    found.credits.push(JSON.parse(JSON.stringify(newCredit)));
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
  } else {
    // TODO Alerta de que el cliente con esa cedula no existe
    console.log("No existe ese cliente");
  }
});
