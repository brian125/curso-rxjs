import { ajax, AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

// const url = 'https://api.github.com/users?per_page=5';
const url = 'https://httpbinxx.org/delay/1';

const manejaError = (res: AjaxError) => {
    console.warn('Error', res.message)
    return of({
        ok: false,
        usuarios: []
    })
}

// const obs$ = ajax.getJSON(url).pipe(
//     catchError( manejaError )
// );
// const obs2$ = ajax(url).pipe(
//     catchError( manejaError )
// );

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);


obs$.pipe(
    catchError( manejaError )
)
.subscribe({ 
    next: val => console.log('next:', val),
    error: err => console.warn('error en subs: ', err),
    complete: () => console.log('complete')
 })
// obs2$.subscribe( data => console.log('Ajax:', data))
