if (localStorage.getItem('data')) {
  data = JSON.parse(localStorage.getItem('data'));
  const resetFields = () => {
    document.getElementById('id').value = '';
    document.getElementById('months').value = '';
    document.getElementById('date').value = '';
    document.getElementById('value').value = '';
    document.getElementById('interest').value = '';
    document.getElementById('table-content').innerHTML = '';
  };

  const fillTable = (credit) => {
    credit.cuotas.forEach((cuota) => {
      document.getElementById('table-all-customers').innerHTML += `<tr>
    <th scope="row">${cuota.number}</th>
    <td>${cuota.month}</td>
    <td>${cuota.value}</td>
    <td>${cuota.state ? 'Pagada' : 'Sin pagar'}</td>
    </tr>`;
    });
  };
  document.getElementById('create-credit-btn').addEventListener('click', () => {
    // debugger;
    if (
      document.getElementById('id').value === '' ||
      document.getElementById('months').value === '' ||
      document.getElementById('date').value === '' ||
      document.getElementById('value').value === '' ||
      document.getElementById('value').value === '' ||
      document.getElementById('interest').value === ''
    ) {
      document.getElementById(
        'alert',
      ).innerHTML = `<div class="alert alert-danger"><strong>Faltan datos! </strong> Se deben completar la totalidad de los campos para seguir con el proceso!</div>`;
      setTimeout(() => {
        document.getElementById('alert').innerHTML = '';
      }, 4000);
    } else {
      const id = document.getElementById('id').value;
      const months = document.getElementById('months').value;
      const date = document.getElementById('date').value;
      const value = document.getElementById('value').value;
      const interest = document.getElementById('interest').value;

      const newCredit = new Credit(creditNumber(), value, interest, date, months);
      const found = data.find((customer) => customer.id === id);
      if (found) {
        if (found.state) {
          try {
            found.credits.push(JSON.parse(JSON.stringify(newCredit)));
            localStorage.setItem('data', JSON.stringify(data));
            document.getElementById('table-content').innerHTML = `
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
            console.error(error);
            document.getElementById(
              'alert',
            ).innerHTML = `<div class="alert alert-danger"><strong>Algo ha ocurrido! </strong>Intenta mas tarde!</div>`;
            setTimeout(() => {
              document.getElementById('alert').innerHTML = '';
            }, 3000);
          }
        } else {
          console.log('El cliente se encuentra inactivo');
          document.getElementById(
            'alert',
          ).innerHTML = `<div class="alert alert-warning"><strong>Cliente Inactivo </strong>El cliente existe pero se encuentra inactivo, debe activarlo y volver a intentar!</div>`;
          setTimeout(() => {
            document.getElementById('alert').innerHTML = '';
          }, 3000);
          resetFields();
        }
      } else {
        document.getElementById(
          'alert',
        ).innerHTML = `<div class="alert alert-danger"><strong>Woow! </strong>NO existe cliente con cedula ${id}</div>`;
        setTimeout(() => {
          document.getElementById('alert').innerHTML = '';
        }, 3000);
      }
    }
  });

  document.getElementById('id').addEventListener('click', () => {
    resetFields();
  });

  const creditNumber = () => {
    return Math.floor(Math.random() * 1000000000);
  };
} else {
  document.getElementById(
    'alert',
  ).innerHTML = `<div class="alert alert-danger"><strong>No se puede mostrar ningun credito </strong>No existen clientes en la base de datos y por ende tampoco creditos</div>`;
  document.getElementById('id').disabled = true;
  document.getElementById('months').disabled = true;
  document.getElementById('date').disabled = true;
  document.getElementById('value').disabled = true;
  document.getElementById('interest').disabled = true;
  document.getElementById('table-content').disabled = true;
}
