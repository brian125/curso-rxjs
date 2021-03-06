import { of, from, Observer } from 'rxjs';

/**
 * of = Toma argumentos y genera una secuencia de valores
 * from = array, promise, iterable, observable
 */

const observer = {
    next: val => console.log('Next: ', val),
    complete: () => console.log('complete')
};

const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

// for (const id of miGenerador()) {
//     console.log(id)
// }
from( miIterable ).subscribe( observer );

// const source$ = from([1,2,3,4,5]);
// const source$ = of([1,2,3,4,5]);

// const source$ = from('Brayan');

const source$ = from(fetch('https://api.github.com/users/klerith'));

// source$.subscribe( async(resp) => {
//     console.log(resp);
//     const dataResp = await resp.json();
//     console.log(dataResp);
// })


// source$.subscribe( observer );