import { IProduct } from "../types/product-d-t";

const product_data:IProduct[] = [
  {
    id: 1,
    img: 'assets/img/shop/product/product_1.png',
    trending:true,
    banner:true,
    related_images: [
      'assets/img/shop/product/product_1.png',
      'assets/img/shop/product/product_2.png',
      'assets/img/shop/product/product_3.png'
    ],
    thumb_img: 'assets/img/shop/product/product_3.png',
    banner_img:'assets/img/shop/banner/banner-big-1.jpg',
    parentCategory:'Decoration & Accessories',
    category: 'Accessories',
    brand: 'Sony',
    title: 'Wooden container Bowl',
    price: 96,
    old_price: 120,
    rating: 3,
    quantity:8,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XL', 'XXL'],
    colors: ['Yellow', 'Blue', 'White','Ocean Blue'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 2,
    img:'assets/img/shop/product/product_2.png',
    trending:true,
    related_images: [
      'assets/img/shop/product/product_2.png',
      'assets/img/shop/product/product_3.png',
      'assets/img/shop/product/product_4.png'
    ],
    thumb_img: 'assets/img/shop/product/product_5.png',
    parentCategory:'Lighting & Chair',
    category: 'Chair',
    brand: 'Sony',
    title: 'Euvira Rocking Chair',
    price: 90,
    old_price: 110,
    rating: 4,
    quantity:5,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XL', 'L'],
    colors: ['White','Ocean Blue'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      }
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 3,
    img: 'assets/img/shop/product/product_3.png',
    trending:true,
    banner:true,
    related_images: [
      'assets/img/shop/product/product_3.png',
      'assets/img/shop/product/product_4.png',
      'assets/img/shop/product/product_5.png'
    ],
    thumb_img: 'assets/img/shop/product/product_1.png',
    banner_img:'assets/img/shop/banner/banner-big-2.jpg',
    parentCategory:'Clothing & Oil',
    category: 'Clothing',
    brand: 'Panasonic',
    title: 'Set of 2 baskets',
    price: 230,
    old_price: 250,
    rating: 5,
    quantity:7,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XXL', 'M'],
    colors: ['Orange','Green'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 4,
    img: 'assets/img/shop/product/product_4.png',
    trending:true,
    discount:8,
    new:true,
    related_images: [
      'assets/img/shop/product/product_4.png',
      'assets/img/shop/product/product_5.png',
      'assets/img/shop/product/product_6.png'
    ],
    thumb_img: 'assets/img/shop/product/product_2.png',
    parentCategory:'Lighting & Chair',
    category: 'Lighting',
    brand: 'Panasonic',
    title: 'Tailored Fit Mesh-Panel',
    price: 67,
    old_price: 80,
    rating: 4,
    quantity:8,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'M'],
    colors: ['Black','White'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 5,
    img: 'assets/img/shop/product/product_5.png',
    trending:true,
    related_images: [
      'assets/img/shop/product/product_5.png',
      'assets/img/shop/product/product_6.png',
      'assets/img/shop/product/product_7.png'
    ],
    thumb_img: 'assets/img/shop/product/product_8.png',
    parentCategory:'Decoration & Accessories',
    category: 'Decoration',
    brand: 'Apple',
    title: 'Rosmo Namino',
    price: 180,
    old_price: 200,
    rating: 3.5,
    quantity:10,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XXL'],
    colors: ['Red','White'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 6,
    img: 'assets/img/shop/product/product_6.png',
    trending:true,
    related_images: [
      'assets/img/shop/product/product_6.png',
      'assets/img/shop/product/product_7.png',
      'assets/img/shop/product/product_8.png'
    ],
    thumb_img: 'assets/img/shop/product/product_1.png',
    parentCategory:'FASHION FOR MEN’S',
    category: 'Shirt',
    brand: 'Apple',
    title: 'Bottle With Wooden Cork',
    price: 270,
    old_price: 290,
    rating: 3,
    quantity:11,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XXL'],
    colors: ['Red','White'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 7,
    img: 'assets/img/shop/product/product_7.png',
    trending:true,
    new:true,
    related_images: [
      'assets/img/shop/product/product_7.png',
      'assets/img/shop/product/product_8.png',
      'assets/img/shop/product/product_9.png'
    ],
    thumb_img: 'assets/img/shop/product/product_6.png',
    parentCategory:'Clothing & Oil',
    category: 'Oil',
    brand: 'Apple',
    title: 'Hauteville Plywood Chair',
    price: 320,
    old_price: 325,
    rating: 4,
    quantity:15,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XXL', 'M'],
    colors: ['Black','Green'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 8,
    img: 'assets/img/shop/product/product_8.png',
    trending:true,
    related_images: [
      'assets/img/shop/product/product_8.png',
      'assets/img/shop/product/product_9.png',
      'assets/img/shop/product/product_10.png'
    ],
    thumb_img: 'assets/img/shop/product/product_4.png',
    parentCategory:'Decoration & Accessories',
    category: 'Decoration',
    brand: 'Samsung',
    title: 'Juicy Pendant Lamp',
    price: 350,
    old_price: 380,
    rating: 4,
    quantity:4,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XXL', 'M'],
    colors: ['Black','White'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 9,
    img: 'assets/img/shop/product/product_9.png',
    discount:12,
    related_images: [
      'assets/img/shop/product/product_9.png',
      'assets/img/shop/product/product_10.png',
      'assets/img/shop/product/product_11.png'
    ],
    thumb_img: 'assets/img/shop/product/product_7.png',
    parentCategory:'Lighting & Chair',
    category: 'Chair',
    brand: 'Samsung',
    title: 'Big sale canvas basket',
    price: 400,
    rating: 4,
    quantity:3,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XL', 'L'],
    colors: ['Gray','White'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 10,
    img: 'assets/img/shop/product/product_10.png',
    discount:25,
    related_images: [
      'assets/img/shop/product/product_10.png',
      'assets/img/shop/product/product_11.png',
      'assets/img/shop/product/product_12.png'
    ],
    thumb_img: 'assets/img/shop/product/product_8.png',
    parentCategory:'Clothing & Oil',
    category: 'Clothing',
    brand: 'Apple',
    title: "Haggar Men's Heather",
    price: 420,
    rating: 4,
    quantity:6,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XL'],
    colors: ['Gray','White'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 11,
    img: 'assets/img/shop/product/product_11.png',
    trending:true,
    discount:16,
    related_images: [
      'assets/img/shop/product/product_11.png',
      'assets/img/shop/product/product_12.png',
      'assets/img/shop/product/product_13.png'
    ],
    thumb_img: 'assets/img/shop/product/product_9.png',
    parentCategory:'Decoration & Accessories',
    category: 'Decoration',
    brand: 'Sony',
    title: "Cotton Twill Suit",
    price: 450,
    rating: 4,
    quantity:7,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['M', 'XXL'],
    colors: ['Red','Orange'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 12,
    img: 'assets/img/shop/product/product_12.png',
    discount:8,
    new:true,
    related_images: [
      'assets/img/shop/product/product_12.png',
      'assets/img/shop/product/product_13.png',
      'assets/img/shop/product/product_14.png'
    ],
    thumb_img: 'assets/img/shop/product/product_10.png',
    parentCategory:'Decoration & Accessories',
    category: 'Accessories',
    brand: 'Panasonic',
    title: "Big sale canvas basket",
    price: 480,
    rating: 4,
    quantity:9,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XL'],
    colors: ['Green','Orange'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 13,
    img: 'assets/img/shop/product/product_13.png',
    discount:14,
    trending:true,
    related_images: [
      'assets/img/shop/product/product_13.png',
      'assets/img/shop/product/product_14.png',
      'assets/img/shop/product/product_15.png'
    ],
    thumb_img: 'assets/img/shop/product/product_11.png',
    parentCategory:'Lighting & Chair',
    category: 'Lighting',
    brand: 'Panasonic',
    title: "Adrianna Papell Women's",
    price: 370,
    rating: 3,
    quantity:11,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XL', 'M'],
    colors: ['White','Orange'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 14,
    img: 'assets/img/shop/product/product_14.png',
    discount:20,
    bestSeller:true,
    related_images: [
      'assets/img/shop/product/product_14.png',
      'assets/img/shop/product/product_15.png',
      'assets/img/shop/product/product_16.png'
    ],
    thumb_img: 'assets/img/shop/product/product_13.png',
    parentCategory:'Clothing & Oil',
    category: 'Clothing',
    brand: 'Sony',
    title: "Calvin Klein Women's",
    price: 269,
    rating: 5,
    quantity:8,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XL'],
    colors: ['White','Black'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 15,
    img: 'assets/img/shop/product/product_15.png',
    trending:true,
    related_images: [
      'assets/img/shop/product/product_15.png',
      'assets/img/shop/product/product_16.png',
      'assets/img/shop/product/product_17.png'
    ],
    thumb_img: 'assets/img/shop/product/product_13.png',
    big_img:'assets/img/shop/product/product-big-1.jpg',
    parentCategory:'Decoration & Accessories',
    category: 'Decoration',
    discount:10,
    brand: 'Apple',
    title: "Creative Design <br>Juicy Pendant Lamp",
    price: 180,
    rating: 5,
    quantity:10,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XL','XXL'],
    colors: ['White','Black'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 16,
    img: 'assets/img/shop/product/product_16.png',
    discount:13,
    related_images: [
      'assets/img/shop/product/product_16.png',
      'assets/img/shop/product/product_17.png',
      'assets/img/shop/product/product_18.png'
    ],
    thumb_img: 'assets/img/shop/product/product_13.png',
    parentCategory:'Lighting & Chair',
    category: 'Lighting',
    brand: 'Samsung',
    title: "Eunice coffee table",
    price: 300,
    rating: 3,
    quantity:12,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XL'],
    colors: ['Green','Orange'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 17,
    img: 'assets/img/shop/product/product_17.png',
    bestSeller:true,
    related_images: [
      'assets/img/shop/product/product_17.png',
      'assets/img/shop/product/product_18.png',
      'assets/img/shop/product/product_19.png'
    ],
    thumb_img: 'assets/img/shop/product/product_15.png',
    big_img:'assets/img/shop/product/fashion/fashion-b2.webp',
    parentCategory:'Decoration & Accessories',
    category: 'Accessories',
    discount:8,
    topRated:true,
    brand: 'Samsung',
    title: "Euvira Rocking Chair",
    price: 450,
    rating: 3,
    quantity:8,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['M','XL'],
    colors: ['Cyan-blue','Pink','Yellow'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 18,
    img: 'assets/img/shop/product/product_18.png',
    topRated:true,
    bestSeller:true,
    related_images: [
      'assets/img/shop/product/product_18.png',
      'assets/img/shop/product/product_19.png',
      'assets/img/shop/product/product_20.png'
    ],
    thumb_img: 'assets/img/shop/product/product_16.png',
    big_img:'assets/img/shop/product/fashion/fashion-b1.webp',
    discount:5,
    parentCategory:'Clothing & Oil',
    category: 'Clothing',
    brand: 'Sony',
    title: "Micro Eslabon Wall Clock",
    price: 420,
    rating: 3,
    quantity:5,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['M','L','S'],
    colors: ['Cyan-blue','Pink','Yellow'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 19,
    img: 'assets/img/shop/product/product_19.png',
    topRated:true,
    bestSeller:true,
    related_images: [
      'assets/img/shop/product/product_19.png',
      'assets/img/shop/product/product_20.png',
      'assets/img/shop/product/product_21.png'
    ],
    thumb_img: 'assets/img/shop/product/product_17.png',
    parentCategory:'FASHION FOR MEN’S',
    category: 'Shirt',
    brand: 'Apple',
    title: "Micro Eslabon Fashion",
    price: 200,
    rating: 3,
    quantity:6,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['M','S'],
    colors: ['Cyan-blue','Pink','Green'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 20,
    img: 'assets/img/shop/product/product_20.png',
    topRated:true,
    bestSeller:true,
    related_images: [
      'assets/img/shop/product/product_20.png',
      'assets/img/shop/product/product_21.png',
      'assets/img/shop/product/product_22.png'
    ],
    thumb_img: 'assets/img/shop/product/product_18.png',
    discount:8,
    parentCategory:'Clothing & Oil',
    category:'Oil',
    brand: 'Apple',
    title: "Panasonic Eslabon Oil",
    price: 149,
    rating: 4,
    quantity:6,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XXL','S'],
    colors: ['Hue','Pink','Green'],
    weight: .30,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 21,
    img: 'assets/img/shop/product/product_21.png',
    trending:true,
    topRated:true,
    related_images: [
      'assets/img/shop/product/product_21.png',
      'assets/img/shop/product/product_22.png',
      'assets/img/shop/product/product_23.png'
    ],
    thumb_img: 'assets/img/shop/product/product_16.png',
    big_img:'assets/img/shop/product/product-big-3.jpg',
    parentCategory:'FASHION FOR WOMEN’S',
    category: 'Shoes',
    discount:10,
    brand: 'Apple',
    title: "Big Sale <br> Canvas Basket",
    price: 150,
    rating: 5,
    quantity:8,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XL','XXL','S'],
    colors: ['White','Black'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 22,
    img: 'assets/img/shop/product/product_22.png',
    trending:true,
    topRated:true,
    related_images: [
      'assets/img/shop/product/product_22.png',
      'assets/img/shop/product/product_23.png',
      'assets/img/shop/product/product_21.png'
    ],
    thumb_img: 'assets/img/shop/product/product_19.png',
    parentCategory:"FASHION FOR BABY",
    category: 'Shoes',
    brand: 'Apple',
    title: 'Bottle With Wooden Cork',
    price: 99,
    rating: 5,
    quantity:8,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['M','S'],
    colors: ['Pink','Black'],
    weight: .30,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 23,
    img: 'assets/img/shop/product/product_23.png',
    bestSeller:true,
    related_images: [
      'assets/img/shop/product/product_23.png',
      'assets/img/shop/product/product_21.png',
      'assets/img/shop/product/product_20.png'
    ],
    thumb_img: 'assets/img/shop/product/product_11.png',
    parentCategory:'FASHION FOR MEN’S',
    category: 'Shirt',
    brand: 'Apple',
    title: 'Bottle With Wooden Cork',
    price: 99,
    rating: 5,
    quantity:8,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['M','S','XL'],
    colors: ['Pink','Black'],
    weight: .30,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
]

export default product_data;
