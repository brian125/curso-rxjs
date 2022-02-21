import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.error('Erorr [obs]: ', error),
    complete: () => console.info('Completado [Obs]')
}

// const obs$ = Observable.create()
const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    // Forzar un error
    // const a = undefined;
    // a.nombre = 'Brayan';

    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');
});

obs$.subscribe( observer );

// obs$.subscribe( 
//     valor => console.log('next: ', valor),
//     error => console.error('error: ', error),
//     () => console.info('Completado')
//  );