import { first, fromEvent, take, tap } from 'rxjs';
import { map } from 'rxjs/operators';

const click = fromEvent<MouseEvent>( document, 'click' );

click.pipe(
    tap<MouseEvent>(console.log),
    // map( event => ({
    //     clientY: event.clientY,
    //     clientX: event.clientX
    // }))
    map( ({ clientX, clientY }) => ({clientY, clientX})),
    first( event => event.clientY >= 150)
)
.subscribe({
    next: val => console.log('Next: ', val),
    complete: () => console.log('Complete')
});