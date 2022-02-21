import { fromEvent, debounceTime, Observable, mergeMap } from 'rxjs';
import { pluck, map, mergeAll, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { GitHubUser } from '../interfaces/github-user';
import { GitHubUsersResp } from '../interfaces/github-users';


const body = document.querySelector('body');
const txtInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( txtInput, orderList);

//Helpers
const mostrarUsuarios = ( usuarios:GitHubUser[] ) => {
    console.log(usuarios);
    orderList.innerHTML= '';

    for(const usuario of usuarios){
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blank'

        li.append( img );
        li.append( usuario.login + '  ' );
        li.append( anchor );

        orderList.append(li);
    }
}

const input$ = fromEvent<KeyboardEvent>( txtInput, 'keyup' );


input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>( res => res.target['value']),
    mergeMap<string, Observable<GitHubUsersResp>>( texto =>  ajax.getJSON( `https://api.github.com/search/users?q=${ texto }` )),
    map<GitHubUsersResp, GitHubUser[]>(user => user.items)
);//.subscribe( mostrarUsuarios)

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    pluck('target', 'value'),
    switchMap( texto => ajax.getJSON(`${url}${texto}`) )
).subscribe(console.log)
