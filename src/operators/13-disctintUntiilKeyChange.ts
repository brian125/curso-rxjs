import { distinct, of, from, distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs';

interface Personaje {
    nombre: string
}

const personajes: Personaje[] = [
    {nombre: "Homero"},
    {nombre: "Homero"},
    {nombre: "Dracula"},
    {nombre: "SpiderMan"},
    {nombre: "Dracula"},
    {nombre: "Homero"},
    {nombre: "SpiderMan"},
    {nombre: "Dr. Strange"},
    {nombre: "Homero"},
    {nombre: "Dr. Strange"},
    {nombre: "Dr. Strange"},
    {nombre: "Luffy"},
];

from( personajes )
.pipe(
    distinctUntilKeyChanged( 'nombre' )
)
.subscribe( console.log )