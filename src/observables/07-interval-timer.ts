import { interval, timer } from 'rxjs';

const observer = { 
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
}

const hoyEn5Segundos = new Date(); // Ahora
hoyEn5Segundos.setSeconds( hoyEn5Segundos.getSeconds() + 5 )

const interval$ = interval(1000);
// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000);
const timer$ = timer(hoyEn5Segundos);

console.log('Inicio');
// interval$.subscribe( observer );
timer$.subscribe( observer );
console.log('Fin')