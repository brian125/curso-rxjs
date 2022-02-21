import { interval, take, fromEvent } from 'rxjs';
import { switchMap, concatMap } from 'rxjs/operators';

const interval$ = interval(500).pipe( take(3) );
const click$ = fromEvent( document, 'click' );

click$.pipe(
    concatMap( () => interval$ )
).subscribe(console.log)
