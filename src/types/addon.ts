export interface Addon {
  id: string;
  name: string;
  description: string;
  price: { monthly: number; yearly: number };
}
