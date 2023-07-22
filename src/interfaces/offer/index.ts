import { FoodItemInterface } from 'interfaces/food-item';
import { GetQueryInterface } from 'interfaces';

export interface OfferInterface {
  id?: string;
  name: string;
  description?: string;
  discount: number;
  food_item_id?: string;
  created_at?: any;
  updated_at?: any;

  food_item?: FoodItemInterface;
  _count?: {};
}

export interface OfferGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  food_item_id?: string;
}
