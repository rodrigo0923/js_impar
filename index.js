var cont2 = 0,
    cont3 = 0;
    cont4 = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log(i + ' : Fizz' );
        cont2++;
    }
    if (i % 5 == 0) {
        console.log(i + ' : Buzz');
        cont3++;
    }
    if (i % 5 == 0 && i % 3 == 0 ) {
        console.log(i + ' : Fizz' + 'buzz');
        cont4++;
    }
    console.log(i);
}

console.log('numeros multiplos de 2: ' + cont2);
console.log('numeros multiplos de 3: ' + cont3);
