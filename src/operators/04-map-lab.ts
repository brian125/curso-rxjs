import { fromEvent, tap } from 'rxjs';
import { map } from 'rxjs/operators';
const texto = document.createElement('div');
texto.innerHTML = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis tortor ut felis auctor ultricies. Aenean auctor scelerisque consectetur. Donec vestibulum sodales lectus, at auctor tellus luctus maximus. Curabitur accumsan leo a sem ullamcorper, quis posuere mauris malesuada. Praesent erat leo, euismod nec tristique in, tristique non nunc. Morbi a risus magna. Ut blandit diam ac augue pellentesque elementum. Suspendisse lacinia pretium ante sit amet tristique.
<br/><br/>
Duis ut pretium nisl. Sed porttitor augue ante, et condimentum erat eleifend finibus. Nunc maximus nisl vel elit tincidunt varius. Mauris sed erat urna. Sed venenatis, erat a fringilla imperdiet, ligula dui lacinia tellus, a placerat turpis magna a elit. Pellentesque ligula sapien, sollicitudin id arcu eget, efficitur suscipit metus. In sed nibh rhoncus, pharetra massa eget, sollicitudin odio. Nunc suscipit neque id sem suscipit, non feugiat ante rutrum. Nulla tempor vehicula sapien, ac iaculis orci laoreet eu. Quisque sit amet metus mattis, lacinia urna nec, vehicula ipsum. Maecenas venenatis mauris id lectus vehicula blandit. Suspendisse posuere mi ultrices, dignissim mi vitae, luctus arcu. Cras elit orci, ornare eu cursus quis, tempor a velit. Donec mollis nulla ut sapien pulvinar, sed luctus lacus semper. Integer nec turpis eget elit efficitur ultrices sed nec purus. Fusce congue, eros in posuere ornare, felis neque varius enim, a venenatis augue nisl sed tortor.
<br/><br/>
In id dui lobortis, ullamcorper massa quis, aliquet diam. Nam dapibus erat quis venenatis ultricies. Donec consequat sapien eget vestibulum eleifend. Nam nec maximus libero. Aenean pharetra consectetur lorem ac iaculis. Mauris nec molestie libero, quis interdum neque. Etiam tincidunt, leo elementum rhoncus sagittis, ligula neque rhoncus augue, in aliquet magna erat et ex. Pellentesque nulla quam, dignissim id nulla ut, aliquet consequat erat. In pharetra tristique suscipit. Cras in ipsum vel neque lacinia efficitur.
<br/><br/>
Curabitur in vestibulum dui. Cras eget dolor condimentum, vehicula lectus a, porttitor tortor. Etiam ultricies libero eu aliquet fringilla. Integer dapibus ornare diam, a consequat velit lacinia id. Cras id ipsum ut tellus placerat convallis. Proin maximus eros in fringilla dignissim. Phasellus et eros tincidunt, egestas erat nec, auctor nisi. Etiam posuere nibh sem, et lobortis erat sodales a. Curabitur volutpat urna diam, lobortis ultricies arcu accumsan at. Maecenas massa turpis, porttitor a lacinia sed, dapibus vitae justo. Morbi sed fermentum nunc. Quisque rhoncus molestie metus, ac maximus massa vehicula at. Quisque eu ex mi. Ut id tristique elit, sed bibendum elit. Vestibulum sagittis vulputate molestie.
<br/><br/>
Suspendisse potenti. Phasellus in rhoncus nisi, quis lobortis massa. Suspendisse blandit metus mauris, nec porttitor odio fringilla varius. Mauris quis varius nunc. Sed ultricies dui dui, nec vulputate leo maximus id. Phasellus in aliquet ipsum. Nam ornare consequat pulvinar. Sed porta ante velit, sit amet venenatis mauris molestie eget.
`;

const body = document.querySelector('body');
body.append( texto );

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append( progressBar );

//Funcion que haga el calculo
const calcularPorcentajeScroll = ( event ) => {
    
    const { scrollTop, 
            scrollHeight,
            clientHeight
         } = event.target.documentElement;
    return ( scrollTop / ( scrollHeight - clientHeight ) ) * 100;        
}

//Streams
const scroll$ = fromEvent( document, 'scroll' );

const progress$ = scroll$.pipe(
    // map( event => calcularPorcentajeScroll(event))
    map( calcularPorcentajeScroll ),
    tap( console.log )
);

progress$.subscribe( porcentaje => {
    
    progressBar.style.width = `${ porcentaje }%`;

})
// scroll$.subscribe(console.log)
