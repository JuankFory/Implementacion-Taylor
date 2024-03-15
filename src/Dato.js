// App.js
import React, { useState, useEffect } from 'react';
import { fetchDataFromSoapService } from './service';
import "./Api.css";

const Dato = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Cuando el componente se monta, obtén los datos del servicio SOAP
    const fetchData = async () => {
      try {
        const soapData = await fetchDataFromSoapService();
        // Procesa los datos según la estructura de tu respuesta SOAP y establece el estado
        // Aquí asumo que los datos están en soapData.result o en otra propiedad adecuada
        setTableData(soapData.result);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Tabla de Datos</h1>
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
          </tr>
        </thead>
        <tbody>
          {/* Mapea los datos para renderizar las filas de la tabla */}
          {tableData.map((rowData, index) => (
            <tr key={index}>
              <td>{rowData.columna1}</td>
              <td>{rowData.columna2}</td>
              {/* Renderiza más celdas según sea necesario */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dato;
