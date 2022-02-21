import { mergeMap, of, take, fromEvent, interval, takeUntil } from 'rxjs';
import { map, merge } from 'rxjs/operators';


const letras = of('a', 'b', 'c');

letras
.pipe(
    mergeMap( (letra) => interval(1000).pipe(
        map( i => letra + i ),
        take(3)
    ))
)
// .subscribe({
//     next: val => console.log('Next:', val),
//     complete: () => console.log('Complete')
// })

const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mousedown$.pipe(
    mergeMap( () => interval$.pipe(
        takeUntil( mouseup$ )
    ))
)
.subscribe(console.log)