import { IMenuType, IMobileMenu } from "../types/menu-d-t";

const menuData:IMenuType[] = [
  {
    link: '/',
    title: 'Home',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: '/home/home-style-1', title: 'Home Style 1' },
      { link: '/home/home-style-2', title: 'Home Style 2' },
      { link: '/home/home-style-3', title: 'Home Style 3' },
      { link: '/home/home-style-4', title: 'Home Style 4' },
      { link: '/home/home-style-5', title: 'Home Style 5' },
      { link: '/home/home-style-6', title: 'Home Style 6' },
      { link: '/home/home-style-7', title: 'Home Style 7' },
    ]
  },
  {
    link: '/shop',
    title: 'Shop',
    hasDropdown: true,
    megamenu: true,
    dropdownItems: [
      {
        link: '/shop',
        title: 'Shop Pages',
        dropdownMenu: [
          { link: '/shop', title: 'Standard Shop Page' },
          { link: '/shop/shop-right', title: 'Shop Right Sidebar' },
          { link: '/shop/shop-4-col', title: 'Shop 4 Column' },
          { link: '/shop/shop-3-col', title: 'Shop 3 Column' },
          { link: '/shop', title: 'Shop Page' },
          { link: '/shop', title: 'Shop Page' },
          { link: '/shop', title: 'Shop Infinity' },
        ]
      },
      {
        link: '/shop',
        title: 'Products Pages',
        dropdownMenu: [
          { link: '/shop/shop-details', title: 'Product Details' },
          { link: '/shop/shop-details', title: 'Product Page V2' },
          { link: '/shop/shop-details', title: 'Product Page V3' },
          { link: '/shop/shop-details', title: 'Product Page V4' },
          { link: '/shop/shop-details', title: 'Simple Product' },
          { link: '/shop/shop-details', title: 'Variable Product' },
          { link: '/shop/shop-details', title: 'External Product' },
        ]
      },
      {
        link: '/shop',
        title: 'Other Shop Pages',
        dropdownMenu: [
          { link: '/shop/wishlist', title: 'Wishlist' },
          { link: '/shop/compare', title: 'Compare' },
          { link: '/shop/cart', title: 'Shopping Cart' },
          { link: '/pages/checkout', title: 'Checkout' },
          { link: '/pages/register', title: 'Register' },
          { link: '/pages/login', title: 'Login' },
        ]
      },
    ]
  },
  {
    link: '/pages/blog',
    title: 'Blog',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: '/pages/blog', title: 'Blog' },
      { link: '/pages/blog-left-sidebar', title: 'Blog Left Sidebar' },
      { link: '/pages/blog-no-sidebar', title: 'Blog No Sidebar' },
      { link: '/pages/blog-2-col', title: 'Blog 2 Column' },
      { link: '/pages/blog-3-col', title: 'Blog 3 Column' },
      { link: '/pages/blog-details', title: 'Blog Details' },
    ]
  },
  {
    link: '/shop',
    title: 'Pages',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: '/shop/wishlist', title: 'Wishlist' },
      { link: '/shop/cart', title: 'Shopping Cart' },
      { link: '/pages/checkout', title: 'Checkout' },
      { link: '/pages/account', title: 'Account' },
      { link: '/pages/register', title: 'Register' },
      { link: '/pages/login', title: 'Login' },
      { link: '/404', title: 'Error 404' },
    ]
  },
  {
    link: '/pages/contact',
    title: 'Contact',
  },
]

export default menuData;

// mobile menus
export const mobile_menus:IMobileMenu[] = [
  {
    title: "Home",
    dropdownMenu: [
      { link: '/home/home-style-1', title: 'Home Style 1' },
      { link: '/home/home-style-2', title: 'Home Style 2' },
      { link: '/home/home-style-3', title: 'Home Style 3' },
      { link: '/home/home-style-4', title: 'Home Style 4' },
      { link: '/home/home-style-5', title: 'Home Style 5' },
      { link: '/home/home-style-6', title: 'Home Style 6' },
      { link: '/home/home-style-7', title: 'Home Style 7' },
    ],
  },
  {
    title: "Shop",
    dropdownMenu: [
      { link: '/shop', title: 'Standard Shop Page' },
      { link: '/shop/shop-right', title: 'Shop Right Sidebar' },
      { link: '/shop/shop-4-col', title: 'Shop 4 Column' },
      { link: '/shop/shop-3-col', title: 'Shop 3 Column' },
      { link: '/shop/shop-details', title: 'Product Details' },
    ],
  },
  {
    title: "Other Pages",
    dropdownMenu: [
      { link: '/shop/wishlist', title: 'Wishlist' },
      { link: '/shop/compare', title: 'Compare' },
      { link: '/shop/cart', title: 'Shopping Cart' },
      { link: '/pages/checkout', title: 'Checkout' },
      { link: '/pages/register', title: 'Register' },
      { link: '/pages/account', title: 'Account' },
      { link: '/pages/login', title: 'Login' },
      { link: '/404', title: 'Error 404' },
    ],
  },
  {
    title: "Blog",
    dropdownMenu: [
      { link: '/pages/blog', title: 'Blog' },
      { link: '/pages/blog-left-sidebar', title: 'Blog Left Sidebar' },
      { link: '/pages/blog-no-sidebar', title: 'Blog No Sidebar' },
      { link: '/pages/blog-2-col', title: 'Blog 2 Column' },
      { link: '/pages/blog-3-col', title: 'Blog 3 Column' },
      { link: '/pages/blog-details', title: 'Blog Details' },
    ],
  },
  {
    title: "Contact",
    link: '/pages/contact',
  },
];
