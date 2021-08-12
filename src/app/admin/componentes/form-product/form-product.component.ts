import { Component, OnInit } from '@angular/core';
//imprttar angular forms
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
import {ProductsService} from './../../../core/services/products/products.service'
//llamo al router
import {Router} from '@angular/router'
//validacion propia 
import  {MyValidators} from './../../../utils/validators'
//subir imagenes a firebase
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form:FormGroup;
  image$:Observable<any>;
  
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router:Router,
    private storage:AngularFireStorage
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  saveProduct(event: Event){
    event.preventDefault();
    //ver si el formulario es valido
    if(this.form.valid){
      const product = this.form.value;
      this.productsService.createProduct(product).subscribe((newProduct)=> {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      })
    }
    //console.log(this.form.value);
  }

  uploadFile(event){
    const file = event.target.files[0];
    //console.log(file);
    const name = 'image';
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name,file);
    task.snapshotChanges()
    .pipe(
      finalize(()=>{
        this.image$ = fileRef.getDownloadURL();
        //asignar la url al campo de la imagen
        this.image$.subscribe(url =>{
          console.log(url);
          this.form.get('image').setValue(url);
        })
      })
    )
    .subscribe();
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id:['',[Validators.required]],
      title:['',[Validators.required]],
      price:['',[Validators.required, MyValidators.isPriceValid]],
      image:[''],
      description:['',[Validators.required]]
    });
  }

  get priceField(){
    return this.form.get('price');
  }

}
