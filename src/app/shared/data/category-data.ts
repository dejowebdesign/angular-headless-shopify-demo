import { ICategoryType } from "../types/category-d-t";

const category_data:ICategoryType[] = [
  {
    id: 1,
    img: '/assets/img/shop/banner/banner-sm-1.jpg',
    parentTitle: "Lighting & Chair",
    children:['Lighting','Chair']
  },
  {
    id: 2,
    img: '/assets/img/shop/banner/banner-sm-2.jpg',
    parentTitle: "Decoration & Accessories",
    children:['Decoration','Accessories']
  },
  {
    id: 3,
    img: '/assets/img/shop/banner/banner-sm-3.jpg',
    parentTitle: "Clothing & Oil",
    children:['Clothing','Oil']
  },
  {
    id: 4,
    img: '/assets/img/shop/banner/02/banner-1.webp',
    parentTitle: "FASHION FOR MEN’S",
    children:['Shirt'],
    smDesc:"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."
  },
  {
    id: 5,
    img: '/assets/img/shop/banner/02/banner-2.webp',
    parentTitle: "FASHION FOR WOMEN’S",
    children:['Shoes'],
    smDesc:"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."
  },
  {
    id: 6,
    img: '/assets/img/shop/banner/02/banner-3.webp',
    parentTitle: "FASHION FOR BABY",
    children:['Shoes'],
    smDesc:"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."
  },
]

export default category_data;
