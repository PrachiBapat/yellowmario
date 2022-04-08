import { Component, OnInit } from '@angular/core';
import{product} from '../product.interface';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  productList:product[] =[
    {
    productTitle:"Apple iPhone 11 Pro",
    productPicture:'assets/mobile.jpg',
    description: "Apple iPhone 11 Pro, US Version, 256GB, Midnight Green - Unlocked",
    price:1649.99,
    stockAvailability: true




    },

    {
      productTitle:"Canon EOS 250D DSLR Camera",
      productPicture:'assets/camera.png',
      description: "Includes: SanDisk Ultra 64GB SDXC Memory Card + Wide Angle",
      price :949.99,
      stockAvailability: false


    },
    {
      productTitle:"Bose SoundLink Revolve+ ",
      productPicture:'assets/speakers.jpg',
      description: "Bose SoundLink Revolve+ Portable and Long-Lasting Bluetooth 360 Speaker - Triple Black",
      price :349.99,
      stockAvailability: true


    },
    {
      productTitle:"Short Sleeve Criss Cross T-Shirt",
      productPicture:'assets/tshirt13.png',
      description: "yokamira Womens Casual V Neck Short Sleeve Criss Cross T-Shirt Blouse Tops, S-2XL",
      price :49.99,
      stockAvailability: false
    },



    {
      productTitle:"Short Sleeve T Shirts ",
      productPicture:'assets/tshirt1.jpg',
      description: "RANPHEE Womens Short Sleeve T Shirts Henley Summer Cotton Plus Size Tunic Tops",
      price :49.99,
      stockAvailability: true


    },

    {
      productTitle:"Loose Casual Short Sleeve",
      productPicture:'assets/tshirt2.jpg',
      description: "VIISHOW Women's Loose Casual Short Sleeve Chiffon Top T-Shirt Blouse",
      price :32.99,
      stockAvailability: false

    },
    {
      productTitle:"Iron Wheel-Inspired Console Table",
      productPicture:'assets/table.jpg',
      description: "Deco 79 59444 Fir Wood and Iron Wheel-Inspired Console Table,Coffee Table Natural for Living Room for Home Decor Furniture,Wood & Steel Rustic , Brown/Black",
      price :489.99,
      stockAvailability: true


    },

    {
      productTitle:"Set of 3– Two-Toned Real Touch Plastic Fake Plants",
      productPicture:'assets/vase1.png',
      description: "Set of 3– Two-Toned Real Touch Plastic Fake Plants in Beautiful Mandala Pattern Ceramic Pots– Faux and Ultra Cute: 5x3 inches",
      price :489.99,
      stockAvailability: false

    },
    {
      productTitle:"Sofa Pillow Covers",
      productPicture:'assets/cushions.jpg',
      description: "RABUSOFA Sofa Pillow Covers Green 18x18 inches Set 4 Decorative Square Throw Pillow Cover Cushion Covers Pillow case, Home Decor Decorations for Sofa Couch Bed Chair Car",
      price :32.99,
      stockAvailability: false

    }






    ]





  constructor() { }

  ngOnInit(): void {
  }

}
