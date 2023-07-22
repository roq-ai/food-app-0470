import { OfferInterface } from 'interfaces/offer';
import { OrderInterface } from 'interfaces/order';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface FoodItemInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  offer?: OfferInterface[];
  order?: OrderInterface[];
  organization?: OrganizationInterface;
  _count?: {
    offer?: number;
    order?: number;
  };
}

export interface FoodItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  organization_id?: string;
}
