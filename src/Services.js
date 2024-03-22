// Importa la biblioteca necesaria para hacer solicitudes SOAP
import axios from 'axios';

// Define la función para hacer la solicitud SOAP
export const fetchDataFromSoapService = async () => {
  const url = "https://servicios.taylor-johnson.co:10105/web/services/parametrizarUrsCanTrnService/parametrizarUrsCanTrn";

  const soapEnvelope = '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:par="http://parametrizarurscantrn.wsbeans.iseries/">' +
   '<soap:Header/>' +
   '<soap:Body>' +
   '<par:bnkws156>' +
   '<arg0>' +
   '<i_AGCORI></i_AGCORI>' +
   '<i_CODCAN></i_CODCAN>' +
   '<i_CODOPC></i_CODOPC>' +
   '<i_CODPRO></i_CODPRO>' +
   '<i_CODTRN></i_CODTRN>' +
   '<i_DIREIP></i_DIREIP>' +
   '<i_MSGIDE></i_MSGIDE>' +
   '<i_TIPACC>' + 2 + '</i_TIPACC>' +
   '<i_TRNCOM></i_TRNCOM>' +
   '<i_TRNCRE></i_TRNCRE>' +
   '<i_TRNDEB></i_TRNDEB>' +
   '<i_USRING></i_USRING>' +
   '</arg0>' +
   '</par:bnkws156>' +
   '</soap:Body>' +
   '</soap:Envelope>';
// Crear la solicitud XMLHttpRequest
var xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'text/xml');
// Manejar la respuesta
xhr.onreadystatechange = function () {
   if (xhr.readyState === 4 && xhr.status === 200) {
       // La respuesta está en xhr.responseText
       console.log(xhr.responseText);
       // Mostrar la respuesta en la tabla
       //updateTable(xhr.responseText);
   }
};

// Enviar la solicitud SOAP
xhr.send(soapEnvelope);


function updateTable(responseText) {
    //var t01 = jQ('#t01').DataTable(); // Obtén la referencia de DataTable

    // Limpiar la tabla antes de agregar nuevos datos
    //t01.clear().draw();

    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(responseText, 'application/xml');

    // Obtener los datos que quieres mostrar en la tabla
    var listatrnArray = xmlDoc.getElementsByTagName('LIST_OF_LISTATRN');

    // Iterar sobre los elementos LIST_OF_LISTATRN y construir las filas de la tabla
    for (var i = 0; i < listatrnArray.length; i++) {
        var rowData = listatrnArray[i].children;

        // Agregar nueva fila a la tabla DataTable
       /* t01.row.add([
            rowData[0].textContent,
            rowData[1].textContent,
            rowData[2].textContent,
            rowData[3].textContent,
            rowData[4].textContent,
            rowData[5].textContent,
            rowData[6].textContent,
            rowData[7].textContent,
            rowData[8].textContent,
            rowData[9].textContent,
            rowData[10].textContent,
            rowData[11].textContent,
            rowData[12].textContent		
	  ]).draw();*/
    }
}

}

export default Services;
