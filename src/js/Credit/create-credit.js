data = JSON.parse(localStorage.getItem("data"));
const resetFields = () => {
  document.getElementById("id").value = "";
  document.getElementById("months").value = "";
  document.getElementById("date").value = "";
  document.getElementById("value").value = "";
  document.getElementById("interest").value = "";
  document.getElementById("table-content").innerHTML = "";
};

const fillTable = (credit) => {
  credit.cuotas.forEach(cuota => {
    document.getElementById("table-all-customers").innerHTML += `<tr>
    <th scope="row">${cuota.number}</th>
    <td>${cuota.month}</td>
    <td>${cuota.value}</td>
    <td>${cuota.state?"Pagada":"Sin pagar"}</td>
    </tr>`;
  });
};
document.getElementById("create-credit-btn").addEventListener("click", () => {
  // TODO Validar que se ingresen todos los campos
  // TODO Validar que los campos sean el formato correcto
  const id = document.getElementById("id").value;
  const months = document.getElementById("months").value;
  const date = document.getElementById("date").value;
  const value = document.getElementById("value").value;
  const interest = document.getElementById("interest").value;
  
  const newCredit = new Credit(creditNumber(), value, interest, date, months);
  const found = data.find((customer) => customer.id === id);
  if (found) {
    try {
      found.credits.push(JSON.parse(JSON.stringify(newCredit)));
      localStorage.setItem("data", JSON.stringify(data));
      document.getElementById("table-content").innerHTML = `
      <h3>Numero del Credito: <strong>${newCredit.getNumber()}</strong></h3>
      <br>
      <table class="table" id="table-all-customers">
      <thead class="thead-dark">
        <tr>
          <th scope="col">N° de Cuota</th>
          <th scope="col">Mes</th>
          <th scope="col">Valor de Cuota</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>`;
      fillTable(newCredit);
    } catch (error) {
      //TODO Algo ha ocurrido, intente mas tarde alerta
    }

    console.log(data);
  } else {
    // TODO Alerta de que el cliente con esa cedula no existe
    console.log("No existe ese cliente");
  }
});

document.getElementById("id").addEventListener('click', () => {
  resetFields();
});

const creditNumber = ()=>{
  return Math.floor(Math.random()*1000000000);
}