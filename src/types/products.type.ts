export interface IProducts {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: Rating;

}

interface Rating {
  rate: number;
  count: number;
}

interface products {
  id: number;
}