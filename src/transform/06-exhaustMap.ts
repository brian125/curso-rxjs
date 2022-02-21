import { interval, take, fromEvent } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';

const interval$ = interval(500).pipe( take(3) );
const click$ = fromEvent( document, 'click' );

click$.pipe(
    exhaustMap( () => interval$ )
).subscribe(console.log)