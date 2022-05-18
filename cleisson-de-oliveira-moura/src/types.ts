export interface Product {
   id: number;
   title: string;
   price: number;
   amount: number;
   description: string;
   image: string;
   category: string;
   rating: {
      rate: number;
      count: number;
   }
}