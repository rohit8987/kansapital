"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const AllProduct = () => {
  // Sample data of products
  const products = [
    { 
      id: 1, 
      name: 'Smartphone', 
      category: 'Electronics', 
      price: 500, 
      image: 'https://ikaiasai.com/cdn/shop/products/FIINGLJU001_900x.png?v=1646226542' 
    },
    { 
      id: 2, 
      name: 'Laptop', 
      category: 'Electronics', 
      price: 1000, 
      image: 'https://ikaiasai.com/cdn/shop/products/FIINGLJU001_900x.png?v=1646226542' 
    },
    { 
      id: 3, 
      name: 'T-shirt', 
      category: 'Clothing', 
      price: 20, 
      image: 'https://ikaiasai.com/cdn/shop/products/FIINGLJU001_900x.png?v=1646226542' 
    },
    { 
      id: 4, 
      name: 'Jeans', 
      category: 'Clothing', 
      price: 40, 
      image: 'https://ikaiasai.com/cdn/shop/products/FIINGLJU001_900x.png?v=1646226542' 
    },
    { 
      id: 5, 
      name: 'Necklace', 
      category: 'Jewelry', 
      price: 100, 
      image: 'https://ikaiasai.com/cdn/shop/products/FIINGLJU001_900x.png?v=1646226542' 
    },
    { 
      id: 6, 
      name: 'Sofa', 
      category: 'Furniture', 
      price: 300, 
      image: 'https://ikaiasai.com/cdn/shop/products/FIINGLJU001_900x.png?v=1646226542' 
    },
    { 
      id: 7, 
      name: 'Watch', 
      category: 'Electronics', 
      price: 150, 
      image: 'https://ikaiasai.com/cdn/shop/products/FIINGLJU001_900x.png?v=1646226542' 
    },
    { 
      id: 8, 
      name: 'Headphones', 
      category: 'Electronics', 
      price: 80, 
      image: 'https://ikaiasai.com/cdn/shop/products/FIINGLJU001_900x.png?v=1646226542' 
    },
    { 
      id: 9, 
      name: 'Lamp', 
      category: 'Furniture', 
      price: 50, 
      image: 'https://ikaiasai.com/cdn/shop/products/FIINGLJU001_900x.png?v=1646226542' 
    },
    { 
      id: 10, 
      name: 'Shirt', 
      category: 'Clothing', 
      price: 30, 
      image: 'https://ikaiasai.com/cdn/shop/products/FIINGLJU001_900x.png?v=1646226542' 
    },
    { 
      id: 11, 
      name: 'Ring', 
      category: 'Jewelry', 
      price: 200, 
      image: 'https://ikaiasai.com/cdn/shop/products/FIINGLJU001_900x.png?v=1646226542' 
    },
    { 
      id: 12, 
      name: 'Table', 
      category: 'Furniture', 
      price: 150, 
      image: 'https://ikaiasai.com/cdn/shop/products/FIINGLJU001_900x.png?v=1646226542' 
    },
  ];

  // Display first 10 products
  const displayedProducts = products.slice(0, 10);

  return (
    <main className="pt-16">
      <h1>Hello</h1>
    </main>
  );
};

export default AllProduct;
