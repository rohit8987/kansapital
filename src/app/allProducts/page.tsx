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
    <>
      <div className="w-full mt-10">
        <h1 className="text-4xl text-center">All Products</h1>
      </div>

      <div className="products-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 px-20">
        {displayedProducts.map((product) => (
          <div key={product.id} className="product-card  hover:shadow-lg transition group gap-6 ">
            {/* Product Image */}
            <div className="w-full h-80">
              <Image 
                src={product.image} 
                alt={product.name} 
                width={200} // Set width for image
                height={200} // Set height for image
                className="object-contain w-full h-full rounded-md cursor-pointer size-full aspect-square  transition-transform duration-300 ease-in-out group-hover:scale-110" 
              />
            </div>
            <h4 className="text-lg font-bold mt-4">{product.name}</h4>
            <p className="text-gray-600 mt-1">₹{product.price}</p>
            <button className="mt-3 w-full bg-black text-white py-2 hover:bg-gray-800 transition cursor-pointer">
           <Link href="/allProducts" className="w-full h-full flex justify-center items-center">View Product
            </Link>
            </button>
            
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProduct;
