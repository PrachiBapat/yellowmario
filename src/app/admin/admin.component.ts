import { Component, OnInit } from '@angular/core';
import { adminproduct } from '../interface/admin.interface';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  adminproductList:adminproduct[] =[]



  constructor(private es:ProductService) { }

  ngOnInit(): void {
    this.es.getAllProducts().subscribe( adminproductList => {

      console.log(this.adminproductList);
      this.adminproductList = adminproductList;

    })

  }

}
