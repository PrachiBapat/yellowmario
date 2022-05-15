import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  description:string = '';
  price:string = '';
  productTitle:string ='';
  product_image:string = '';
  stockAvailability:string ='';
  display:any = '';
  updateStatus = false;
  showMessage = 'none';
  errorMessage: any = '';





  constructor(private param: ActivatedRoute, private es:ProductService, private router:Router) { }

  edit(){
    // let ID: any = localStorage.getItem("photoUserID");
    // this.es.editProduct(this.description,ID,this.price,this.productTitle,this.product_image,this.stockAvailability).subscribe( editConfirmation =>{
    //   console.log(editConfirmation.edit);
    //   this.updateStatus = editConfirmation.edit;
    //   this.showMessage = 'block';
    //   this.errorMessage = editConfirmation.message;

    // })

  }


  // delete() {
  //   if (confirm('Are you sure?')) {
  //     let id: any = this.param.snapshot.paramMap.get('id');
  //     this.es.deleteProduct(id).subscribe((response) => {
  //       console.log(response);
  //       if (response.delete) {
  //         this.router.navigate(['/admin']);
  //       }
  //     })
  //   }
  // }

  ngOnInit(): void {
  //   console.log(this.param.snapshot.paramMap.get('id'));
  //   let id: any = this.param.snapshot.paramMap.get('id');
  //   this.es.getProductId(id).subscribe((productDetail) => {
  //     console.log(productDetail);
  //     this.description = productDetail.productData[0].description;
  //     this.price = productDetail.productData[0].price;
  //     this.productTitle = productDetail.productData[0].productTitle;
  //     this.product_image = productDetail.productData[0].product_image;
  //     this.stockAvailability = productDetail.productData[0].stockAvailability;

  //     console.log(productDetail.productData[0].display);
  //     if (productDetail.productData[0].display === 1) {
  //       productDetail.productData[0].display = true;
  //     } else {
  //       productDetail.productData[0].display = false;
  //     }
  //     this.display = productDetail.productData[0].display;
  //      console.log(productDetail.productData[0].display);
  //   })
  }

}
