import duotone from "components/icons/duotone";
export const navigations = [{
  type: "label",
  label: "Admin"
}, 
// {
//   name: "Dashboard",
//   icon: duotone.Dashboard,
//   path: "/vendor/dashboard"
// }, 
{
  name: "Products",
  icon: duotone.Products,
  children: [{
    name: "Product List",
    path: "/admin/products"
  }, {
    name: "Create Product",
    path: "/admin/products/create"
  },]
}, 
{
  name: "Orders",
  icon: duotone.Products,
  children: [{
    name: "Orders",
    path: "/admin/refund-setting"
  }, {
    name: "Ship Now",
    path: "/admin/seller-package"
  },
  {
    name: "Shipments",
    path: "/admin/categories"
  },]
},     
{
  name: "Settings",
  icon: duotone.Settings,
  children: [{
    name: "Store Location",
    path: "/admin/customers"
  }, 


  // {
  //   name: "Shipping Settings",
  //   path: "/"
  // }
]
}, 
// {

//   name: "Refunds",
//   icon: duotone.Refund,
//   children: [{
//     name: "Refund Request",
//     path: "/admin/refund-request"
//   }, {
//     name: "Refund Settings",
//     path: "/admin/refund-setting"
//   }]
// }, 
// {
//   name: "Sellers",
//   icon: duotone.Seller,
//   children: [{
//     name: "Seller List",
//     path: "/admin/sellers"
//   }, {
//     name: "Seller Package",
//     path: "/admin/seller-package"
//   }, {
//     name: "Package Payments",
//     path: "/admin/package-payment"
//   }, {
//     name: "Earning History",
//     path: "/admin/earning-history"
//   }, {
//     name: "Payouts",
//     path: "/admin/payouts"
//   }, {
//     name: "Payout Request",
//     path: "/admin/payout-request"
//   }]
// }, 
// {
//   type: "label",
//   label: "Vendor"
// }, 
// {
//   name: "Earnings",
//   icon: duotone.ProjectChart,
//   children: [{
//     name: "Earning History",
//     path: "/vendor/earning-history"
//   }, {
//     name: "Payouts",
//     path: "/vendor/payouts"
//   }, {
//     name: "Payout Request",
//     path: "/vendor/payout-requests"
//   }, {
//     name: "Payout Settings",
//     path: "/vendor/payout-settings"
//   }]
// }, 
{
  name: " Tickets",
  icon: duotone.ElementHub,
  path: "/vendor/support-tickets"
}, 
{
  name: "Authentication",
  icon: duotone.ProjectChart,
  children: [{
    name: "Sign In",
    path: "/login"
  }, {
    name: "Sign Up",
    path: "/signup"
  }]
},
// {
//   name: "Refund Request",
//   icon: duotone.Refund,
//   path: "/vendor/refund-request"
// }, {
//   name: "Reviews",
//   icon: duotone.Review,
//   path: "/vendor/reviews"
// },
//  {
//   name: "Shop Setting",
//   icon: duotone.SiteSetting,
//   path: "/vendor/shop-settings"
// }, 
// {
//   name: "Categories",
//   icon: duotone.Accounts,
//   children: [{
//     name: "Category List",
//     path: "/admin/categories"
//   }, {
//     name: "Create Category",
//     path: "/admin/categories/create"
//   }]
// },

// {
//   name: "Account Setting",
//   icon: duotone.AccountSetting,
//   path: "/vendor/account-setting"
// }, {
//   name: "Site Setting",
//   icon: duotone.SiteSetting,
//   path: "/vendor/site-settings"
// }, 
{
  name: "Logout",
  icon: duotone.Session,
  path: "/login"
}];

