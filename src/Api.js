// import { ReactDOM } from "react-dom/client";
/*import "./Api.css";
import React from "react";
function Api() {
  return (
    <div className="api-tabla">
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
   
     
        <tbody id="tbody">


        </tbody>
      </table>
    </div>
  );

}
export default Api;
*/
/*
function Login(){

    return(

        <iframe
        src="https://jfktest.taylor-johnson.co/" title="Login" height="800rem" width="100%"
        />
            

      
    );
}
export default Login;
*/
import React, { useEffect } from 'react';

const IframeComponent = () => {
  useEffect(() => {
    // Listener para mensajes del iframe
    const handleMessage = (event) => {
      // Verifica que el mensaje provenga del iframe
      if (event.source !== iframeRef.current.contentWindow) return;

      // Actúa según el tipo de mensaje recibido
      const message = event.data;
      if (message.type === 'No se encontro solicitud  del cupo') {
        // Realiza la modificación en base al mensaje recibido
        console.log('Campo modificado:', message.data);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const iframeRef = React.useRef();
  return (
    <iframe
      src="https://jfktest.taylor-johnson.co/"
      title="Iframe"
      ref={iframeRef}
      width="100%"
      height="800rem"
      allowfullscreen
    ></iframe>
  );
};

export default IframeComponent;