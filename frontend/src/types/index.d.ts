export interface Ebook {
  _id: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  img?: string;
  rating: number;
}
