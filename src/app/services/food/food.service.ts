import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
    return [
      {
        id:1,
        name:'Pizza Pepperoni',
        price : 10,
        favorite: false,
        origin:['italy'],
        star : 4.5,
        imageUrl: '/assets/food-1.jpg',
        tags:['fastFood','Pizza','lunch'],
        cookTime : '40-50'
      },
      {
        id:2,
        name:'Nắp hố ga 2',
        price : 10,
        favorite: false,
        origin:['italy'],
        star : 4.5,
        imageUrl: '/assets/food-2.jpg',
        tags:['fastFood','Pizza','lunch'],
        cookTime : '40-50'
      },
      {
        id:3,
        name:'Nắp hố ga 2',
        price : 10,
        favorite: false,
        origin:['italy'],
        star : 4.5,
        imageUrl: '/assets/food-3.jpg',
        tags:['fastFood','Pizza','lunch'],
        cookTime : '40-50',
        
      },
      {
        id:4,
        name:'Nắp hố ga 2',
        price : 10,
        favorite: false,
        origin:['italy'],
        star : 4.5,
        imageUrl: '/assets/food-4.jpg',
        tags:['fastFood','Pizza','lunch'],
        cookTime : '40-50'
      },
      {
        id:5,
        name:'Nắp hố ga 2',
        price : 10,
        favorite: false,
        origin:['italy'],
        star : 4.5,
        imageUrl: '/assets/food-5.jpg',
        tags:['fastFood','Pizza','lunch'],
        cookTime : '40-50'
      },
      {
        id:6,
        name:'Nắp hố ga 2',
        price : 10,
        favorite: false,
        origin:['italy'],
        star : 4.5,
        imageUrl: '/assets/food-6.jpg',
        tags:['fastFood','Pizza','lunch'],
        cookTime : '40-50'
      },
      {
        id:7,
        name:'Nắp hố ga 2',
        price : 10,
        favorite: false,
        origin:['italy'],
        star : 4.5,
        imageUrl: '/assets/food-7.jpg',
        tags:['fastFood','Pizza','lunch'],
        cookTime : '40-50'
      },
      {
        id:8,
        name:'Nắp hố ga 2',
        price : 10,
        favorite: false,
        origin:['italy'],
        star : 4.5,
        imageUrl: '/assets/food-8.jpg',
        tags:['fastFood','Pizza','lunch'],
        cookTime : '40-50'
      },
    ];
  }
}

