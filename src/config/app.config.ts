interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Manager'],
  customerRoles: [],
  tenantRoles: ['Restaurant Manager'],
  tenantName: 'Organization',
  applicationName: 'Food App',
  addOns: ['file', 'chat', 'notifications'],
};
