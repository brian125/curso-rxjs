import { distinct, of, from, distinctUntilChanged } from 'rxjs';


const numeros = of( 1,'1',1,3,3,2,2,4,4,5,3,1,'1' );

numeros.pipe(
    distinctUntilChanged() // ====
)
.subscribe(console.log)

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
    distinctUntilChanged((ant, act) => ant.nombre === act.nombre)
)
.subscribe( console.log )