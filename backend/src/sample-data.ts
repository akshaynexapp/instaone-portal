import { Product } from './models/product.model';
import { User } from './models/user.model';
import bcrypt from 'bcryptjs';

export const products: Product[] = [
  {
    name: 'Nike Slim Shirt',
    slug: 'nike-slim-shirt',
    category: 'Shirts',
    image: '../assets/images/p1.jpg',
    description: 'high quality product',
    brand: 'Nike',
    price: 120,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    reviews: [],
  },
  {
    name: 'Adidas Fit Shirt',
    slug: 'adidas-fit-shirt',
    category: 'Shirts',
    image: '/asset',
    price: 100,
    countInStock: 20,
    brand: 'Adidas',
    rating: 4.0,
    numReviews: 10,
    description: 'high quality product',
    reviews: [],
  },
  {
    name: 'Lacoste Free Shirt',
    slug: 'lacoste-free-shirt',
    category: 'Shirts',
    image: '/assets/i3.jpg',
    price: 220,
    countInStock: 0,
    brand: 'Lacoste',
    rating: 4.8,
    numReviews: 17,
    description: 'high quality product',
    reviews: [],
  },
  {
    name: 'Nike Slim Pant',
    slug: 'nike-slim-pant',
    category: 'Pants',
    image: '../assetspg',
    price: 78,
    countInStock: 15,
    brand: 'Nike',
    rating: 4.5,
    numReviews: 14,
    description: 'high quality product',
    reviews: [],
  },
  {
    name: 'Puma Slim Pant',
    slug: 'puma-slim-pant',
    category: 'Pants',
    image: '../assetg',
    price: 65,
    countInStock: 5,
    brand: 'Puma',
    rating: 4.5,
    numReviews: 10,
    description: 'high quality product',
    reviews: [],
  },
  {
    name: 'Adidas Fit Pant',
    slug: 'adidas-fit-pant',
    category: 'Pants',
    image: '../assetjpg',
    price: 139,
    countInStock: 12,
    brand: 'Adidas',
    rating: 4.5,
    numReviews: 15,
    description: 'high quality product',
    reviews: [],
  },
];

export const users: User[] = [
  {
    name: 'akshay',
    email: 'admin@example.com',
    password: bcrypt.hashSync('1212'),
    isAdmin: true,
  },
  {
    name: 'user',
    email: 'user@example.com',
    password: bcrypt.hashSync('1212'),
    isAdmin: false,
  },
];
