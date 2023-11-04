import { Component } from '@angular/core';


@Component({
  selector: 'app-add-product-tdcomponent',
  templateUrl: './add-product-tdcomponent.component.html',
  styleUrls: ['./add-product-tdcomponent.component.css']
})
export class AddProductTDComponentComponent {
  product = {
    idProduit: '',
    code: '',
    libelle: '',
    prixUnitaire: '',
    idDetailsProduit: '',
    dateCreation: '',
    dateDerniereModification: '',
    categorieProduit: ''
  };



  onSubmit() {
    // Handle form submission
    console.log(this.product);
  }

}
