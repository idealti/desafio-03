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

export interface UpdateProductAmountProps {
   productId: number;
   amount: number;
}

export interface CartItemsAmount {
   [key: number]: number;
 }