import { range, tap } from 'rxjs';
import { map } from 'rxjs/operators';

const numeros$ = range(1,5);

numeros$.pipe(
    tap( x => {
        console.log('antes', x);
        return 100;
    }),
    map( val => (val * 10).toString()),
    tap({
        next: valor => console.log('Despues' , valor),
        complete: () => console.log('Se termino todo')
    })
)
.subscribe( val => console.log('Subs', val));