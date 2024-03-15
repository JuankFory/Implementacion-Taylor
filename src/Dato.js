import React, { useState, useEffect } from 'react';
import { fetchDataFromSoapService } from './Services';
import "./Api.css"

const App = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const soapResponse = await fetchDataFromSoapService();
        // Extrae los datos XML de la respuesta SOAP
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(soapResponse.data, "text/xml");
        // Encuentra la lista de transacciones dentro del XML
        const transactionList = xmlDoc.querySelectorAll('LIST_OF_LISTATRN');
        // Procesa los datos de la lista de transacciones y construye una matriz de objetos
        const data = Array.from(transactionList).map(transaction => ({
          o_AGCORI: transaction.querySelector('o_AGCORI').textContent,
          o_CODCAJ: transaction.querySelector('o_CODCAJ').textContent,
          o_CODCAN: transaction.querySelector('o_CODCAN').textContent,
          o_CODEMP: transaction.querySelector('o_CODEMP').textContent,
          o_CODOPC: transaction.querySelector('o_CODOPC').textContent,
          o_CODPRO: transaction.querySelector('o_CODPRO').textContent,
          o_DESTRN: transaction.querySelector('o_DESTRN').textContent,
          o_FECING: transaction.querySelector('o_FECING').textContent,
          o_HORING: transaction.querySelector('o_HORING').textContent,
          o_TRNCOM: transaction.querySelector('o_TRNCOM').textContent,
          o_TRNCRE: transaction.querySelector('o_TRNCRE').textContent,
          o_TRNDEB: transaction.querySelector('o_TRNDEB').textContent,
          o_USRING: transaction.querySelector('o_USRING').textContent
        }));

        // Establece los datos en el estado
        setTableData(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>     
      <h1 align="center">Datos de Prueba</h1>
      <table id="t01" border="2" className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">AGCORI</th>
            <th scope="col">CODCAJ</th>
            <th scope="col">CODCAN</th>
            <th scope="col">CODEMP</th>
            <th scope="col">CODOPC</th>
            <th scope="col">CODPRO</th>
            <th scope="col">DESTRN</th>
            <th scope="col">FECING</th>
            <th scope="col">HORING</th>
            <th scope="col">TRNCOM</th>
            <th scope="col">TRNCRE</th>
            <th scope="col">TRNDEB</th>
            <th scope="col">USRING</th>
            <th scope="col">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {/* Comprueba si tableData está definido antes de hacer el mapeo */}
          {tableData && tableData.map((rowData, index) => (
            <tr key={index}>
              <td>{rowData.o_AGCORI}</td>
              <td>{rowData}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
