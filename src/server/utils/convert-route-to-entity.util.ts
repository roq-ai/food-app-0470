const mapping: Record<string, string> = {
  'food-items': 'food_item',
  offers: 'offer',
  orders: 'order',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
