export type MenuItem = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  type?: string;
  tag?: "Popular";
};
