const XMLHttprequest = require('xmlhttprequest');
const API = 'https://api.esculajs.co/api/v1';
function fetchData(urlApi, callback) {
    let xhttp = new XMLHttprequest();
    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback = (null, JSON.parse(xhttp.responseText));
            }
        } else {
            const ERROR = new Error('Error de conexion:' + urlApi);
            return callback(ERROR, null);
        }
    }
    xhttp.send();
}