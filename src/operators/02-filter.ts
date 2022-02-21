import { filter, range, of, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

range(20,30).pipe(
    filter( (val,i) => {
            console.log('index', i)
            return val % 2 === 1
        })
)//.subscribe(console.log)

interface Personaje {
    tipo: string;
    nombre: string
}

const personajes: Personaje[] = 
[
    {
        tipo: 'Heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'Heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'Villano',
        nombre: 'Joker'
    }
]

const personajesObs$ = of(...personajes);

personajesObs$.pipe(
    filter(persojane => persojane.tipo === 'Heroe')
).subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' ).pipe(
    map( event =>  event.code ),
    filter( code => code === 'Enter' )
);

keyup$.subscribe(console.log)