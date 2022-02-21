import { fromEvent, interval, mergeMap } from 'rxjs';
import { switchMap } from 'rxjs/operators';


const click$ = fromEvent(document, 'click');
const intervalo$ = interval(1000);

click$.pipe(
    switchMap(() => intervalo$)
    // mergeMap(() => intervalo$)
).subscribe(console.log);