import { UserInterface } from 'interfaces/user';
import { FoodItemInterface } from 'interfaces/food-item';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  status: string;
  user_id?: string;
  food_item_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  food_item?: FoodItemInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  user_id?: string;
  food_item_id?: string;
}
