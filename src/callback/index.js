function suma(n1, n2) {
    return n1 + n2;
}
function calculo(n1, n2, callback) {
    return callback(n1, n2);
};
console.log(calculo(4, 5, suma));
setTimeout(function () {
    console.log('Hola Mundo');
}, 5000)
function saludo(name, apellido) {
    console.log('Hola ${name} ${apellido}');
}
setTimeout(saludo, 2000, 'Xavier', 'Valenzuela');