data = JSON.parse(localStorage.getItem("data"));
const id = document.getElementById('read-by-id');
id.addEventListener('change',()=>{
    const found = data.find(customer => customer.id === id.value);
    if (found) {
        found.credits.forEach(credit => {
          if (credit.state) {
            document.getElementById("creditNumber-select").innerHTML += `<option value="${credit.number}">${credit.number}</option>`
          
          }else{
            document.getElementById("creditNumber-select").innerHTML += `<option id="inactive-credit" value="${credit.number}">${credit.number}</option>`
          }
            // TODO ALERTA DE QUE EL CLIENTE EXISTE PERO NO TIENE CREDITOS
        });
    }else{
        console.log("no existe dicho cliente");
        // TODO ALERTA DE CLIENTE NO EXISTE
    }
    
});
id.addEventListener('click',()=>{
    id.value = "";
    document.getElementById("creditNumber-select").innerHTML = `<option selected value="none">N° de Credito</option>`;
    resetDetails()
})
const resetDetails = ()=>{
    document.getElementById('credit-details').classList.add("hidden-credit-data");
}
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
document.getElementById('creditNumber-select').addEventListener('change',(e)=>{
    console.log("---");
    const id_customer = document.getElementById('read-by-id');
    if(e.target.value==='none'){
      id.value = "";
      document.getElementById("creditNumber-select").innerHTML = `<option selected value="none">N° de Credito</option>`;
      return resetDetails()
    }
    const customer = data.find(customer=>customer.id === id_customer.value);
    const credit = customer.credits.find(credit=>credit.number === Number(e.target.value))
    if (customer && credit) {
        console.log(credit);
        document.getElementById('credit-details').classList.remove("hidden-credit-data")
        document.getElementById('number').innerHTML=credit.number;
        document.getElementById('total').innerHTML=credit.total;
        document.getElementById('date').innerHTML=credit.date;
        document.getElementById('cuotas').innerHTML=credit.cuotas.length;
        document.getElementById('interest').innerHTML=`${credit.interest}%`;
        document.getElementById('state').innerHTML = credit.state?"Activo":"Inactivo";
        if(credit.state){
          document.getElementById("table-content").innerHTML = `
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
      fillTable(credit);
      const found = credit.cuotas.find(cuota => cuota.state === false);
      if(found){
        document.getElementById('button-finish').classList.add("hidden-finish-credit");
      }else{
        document.getElementById('button-finish').classList.remove("hidden-finish-credit");
      }
        }
        
    }
})
const isEven = (credit)=>{
  return credit.state === true;
}
document.getElementById('finish-credit').addEventListener('click',()=>{
  const id_customer_finish = document.getElementById('read-by-id').value;
  const credit_finish = document.getElementById('creditNumber-select').value
    const customer_finish = data.find(customer=>customer.id === id_customer_finish);
    const credit_finish_found = customer_finish.credits.find(credit=>credit.number === Number(credit_finish))
  credit_finish_found.state = !credit_finish_found.state;
  localStorage.setItem("data", JSON.stringify(data));
  location.reload();
})