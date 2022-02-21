import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';


const click = fromEvent<MouseEvent>(document, 'click');

click.pipe(
    map( ({x,y}) => ({x,y})),
    // takeWhile( ({y}) => y <= 150)

    //el segundo argumento permite incluir el valor que termina el observable
    takeWhile( ({y}) => y <= 150, true)
)
.subscribe({
    next: val => console.log('Next: ', val),
    complete: () => console.log('Complete')
})