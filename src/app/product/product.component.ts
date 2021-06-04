// uso de decoradores.
// representa que tipo de rol va a tener si va a ser un componente, servicio o py.
import {
    Component,
    Input,
    Output,
    EventEmitter,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy} 
    from '@angular/core'; // decorador que indica que este sera un componente. Input, ouput
// el decorador se define antes de construir la clase

import {Product} from '../product.model'; //importo el modelo para tipificar el objeto
@Component({  // los componentes tienen metadata
    selector: 'app-product', 
    templateUrl: './product.component.html', //template
    styleUrls:['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {  //creamos la clase, export permite que cualquiera use la clase

    @Input() product: Product; // ahora recibira una propiedad desde otro componente 
    @Output() productClicked:EventEmitter<any> = new EventEmitter(); //creo un evento productClicked 

    today =  new Date();

    // de tipo EventEmitter e inicializado en vacio 
    // que emitira un tipo cualquiera
    constructor(){
        console.log('1 constructor');
    }

    ngOnInit(){ // se ejecuta solo una vez
        console.log('3 ngOnInit');
    }

    ngDoCheck(){
        console.log('4 ngDoCheck');
    }

    ngOnDestroy(){
        console.log('5 ngDestroy');
    }

    /*
    ngOnChanges(changes:SimpleChanges){ //para detectar los cambios necesita una interfaz de acuerdo al evento, detecta cambio 
        //por lo que debe recibir changes que es de tipo SimpleChanges, 
        console.log('2 ngOnChanges');
        //imprimo el cambio
        console.log(changes);
    }
    */

    addCart(){ // creo un metodo
        console.log('añadir al carrito');
        this.productClicked.emit(this.product.id); //emito el valor id cuando pulse agregar
    }
} 

