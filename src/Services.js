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

  try {
    // Realiza la solicitud SOAP usando axios
    const response = await axios.post(url, soapEnvelope, {
      headers: {
        'Content-Type': 'text/xml',
      },
    });    
    // Extrae los datos de la respuesta SOAP y devuelve el resultado
    return console.log(JSON.stringify(response)) ;
    
  } catch (error) {    
    console.error("Error al obtener los datos del servicio SOAP:", error);
    throw error;
  }
};

