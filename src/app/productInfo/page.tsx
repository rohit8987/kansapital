"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaRegCopy } from "react-icons/fa6";
import { Accordion, AccordionContent, AccordionItem } from "~/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { FaStar } from "react-icons/fa"; // Importing the FaStar icon for ratings
import { Plus } from "lucide-react";



function ProductInfo() {
    const images = [
        "https://res.cloudinary.com/doxwidis4/image/upload/v1729702716/os1vsxt98gsqud1u5nap.jpg",
        "https://res.cloudinary.com/doxwidis4/image/upload/v1729702555/g7wja1km9rp50xastxnu.jpg",
        "https://res.cloudinary.com/doxwidis4/image/upload/v1729702426/r5m1xg0fppnyfd2nrpio.jpg",
        "https://ikaiasai.com/cdn/shop/products/FIINGLDR028_3000x.png?v=1646229819"
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]); // Default image
    const [activeTab, setActiveTab] = useState("description");

    const product = {
        name: "Awesome Product",
        price: 2999,
        description: "This is a short description of the product."
    };

    const items = [
        {
            id: "1",
            title: "Descriptions",
            content: "Origin UI focuses on developer experience and performance...",
        },
        {
            id: "2",
            title: "Product Specifications",
            content: "Use our CSS variables for global styling...",
        },
        {
            id: "3",
            title: "Shipping Policy",
            content: "Yes, with tree-shaking, code splitting, and minimal runtime overhead...",
        },
        {
            id: "4",
            title: "Support",
            content: "All components follow WAI-ARIA standards...",
        },
    ];

    const reviews = [
        {
            id: 1,
            text: "Great product! Highly recommend it!",
            rating: 5, // Rating out of 5
        },
        {
            id: 2,
            text: "Very satisfied with the quality and service.",
            rating: 4, // Rating out of 5
        },
        {
            id: 3,
            text: "Decent product but could be improved.",
            rating: 3, // Rating out of 5
        },
    ];

    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity((prevQty) => prevQty + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prevQty) => prevQty - 1);
        }
    };

    const handleChange = (e) => {
        const value = e.target.value;
        if (value === "" || /^[0-9\b]+$/.test(value)) {
            setQuantity(value === "" ? "" : parseInt(value, 10));
        }
    };

    const relatedProducts = [
        {
            name: "Elegant Necklace",
            price: 2499,
            image: "https://res.cloudinary.com/doxwidis4/image/upload/v1729702716/os1vsxt98gsqud1u5nap.jpg",
        },
        {
            name: "Gold Earrings",
            price: 1799,
            image: "https://res.cloudinary.com/doxwidis4/image/upload/v1729702555/g7wja1km9rp50xastxnu.jpg",
        },
        {
            name: "Diamond Ring",
            price: 3299,
            image: "https://ikaiasai.com/cdn/shop/products/FIINGLDR028_3000x.png?v=1646229819",
        },
        {
            name: "Silver Bracelet",
            price: 1999,
            image: "https://res.cloudinary.com/doxwidis4/image/upload/v1729702555/g7wja1km9rp50xastxnu.jpg",
        },
    ];

    return (
        <>
  <div className="flex flex-wrap px-8 sm:px-8 md:px-16 lg:px-24 py-10">
    {/* Left section */}
    <div className="w-full lg:w-1/2 flex flex-wrap">
      {/* Thumbnail images */}
      <div className="w-1/5 flex flex-col space-y-4 py-14">
        {images.map((img, index) => (
          <div
            key={index}
            className="cursor-pointer flex justify-center"
            onClick={() => setSelectedImage(img)}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              width={100}
              height={200}
              className="object-contain w-20 h-20"
              unoptimized
            />
          </div>
        ))}
      </div>

      {/* Main product image */}
      <div className="w-3/4 flex items-center justify-center">
        <div className="w-[500px] h-[600px] flex items-center justify-center">
          <Image
            src={selectedImage}
            alt="Selected Product Image"
            width={500}
            height={600}
            className="object-contain w-full h-full"
            unoptimized
          />
        </div>
      </div>
    </div>

    {/* Right section */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <div className="mt-4 flex flex-col gap-5 w-full ">
        <h2 className="text-4xl font-semibold">{product.name}</h2>
        <div className="text-lg text-gray-800 mt-2 flex flex-col gap-10 ">
          <span className="font-bold text-2xl">₹{product.price}.00</span>

          {/* Social Media Share Icons */}
          <div className="flex gap-5 items-center text-3xl cursor-pointer">
            <FaWhatsapp className="hover:text-green-500 transition" />
            <FaFacebookF className="hover:text-blue-500 transition" />
            <FaInstagram className="hover:text-pink-500 transition" />
            <FaRegCopy className="hover:text-gray-500 transition" />
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center border w-32 mt-4">
            <button
              onClick={decreaseQuantity}
              className="px-4 py-2 text-xl font-bold text-black hover:bg-gray-300 transition"
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              onChange={handleChange}
              className="w-12 text-center text-lg font-semibold"
            />
            <button
              onClick={increaseQuantity}
              className="px-4 py-2 text-xl font-bold text-black hover:bg-gray-300 transition"
            >
              +
            </button>
          </div>

          {/* Add to Cart & Buy Now Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <button className="px-6 py-3 bg-white text-black border border-black font-semibold hover:bg-gray-100 transition cursor-pointer">
              ADD TO CART
            </button>
            <button className="px-6 py-3 bg-white text-black border border-black font-semibold hover:bg-gray-100 transition cursor-pointer">
              BUY NOW
            </button>
          </div>

          {/* FAQ Accordion */}
          <div className="">
            <Accordion type="single" collapsible className="w-full" defaultValue="3">
              {items.map((item) => (
                <AccordionItem value={item.id} key={item.id} className="py-2">
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[20px] font-semibold leading-6 transition-all">
                      {item.title}
                      <Plus
                        size={20}
                        strokeWidth={4}
                        className="shrink-0 opacity-60 transition-transform duration-200"
                        aria-hidden="true"
                      />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent className="pb-2 text-muted-foreground">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Tabs for Description and Reviews */}
  <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-10">
    <div className="mt-20">
      <div className="flex">
        <b
          className={`border px-5 py-3 text-sm cursor-pointer ${activeTab === "description" ? "bg-gray-100" : ""}`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </b>
        <p
          className={`border px-5 py-3 text-sm cursor-pointer ${activeTab === "reviews" ? "bg-gray-100" : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews (121)
        </p>
      </div>

      <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
        {activeTab === "description" ? (
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, exercitationem quasi illum sed consequatur placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum possimus in nostrum!
            </p>
            <p>
              An E-commerce Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ut expedita dignissimos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet nemo eaque deserunt est corrupti hic!
            </p>
          </div>
        ) : (
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
            {reviews.map((review) => (
              <div key={review.id} className="mb-6 border-b pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`text-yellow-500 ${index < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({review.rating}/5)</span>
                </div>
                <p className="text-gray-700 mt-2">{review.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>

  {/* Related Products */}
  <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-10">
    <h3 className="text-3xl font-semibold mb-6">Related Products</h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {relatedProducts.map((product, index) => (
        <div key={index} className="shadow-md hover:shadow-lg transition group">
          <div className="relative w-full h-48">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
              unoptimized
            />
          </div>
          <h4 className="text-lg font-bold mt-4">{product.name}</h4>
          <p className="text-gray-600 mt-1">₹{product.price}</p>
          <button className="mt-3 w-full bg-black text-white py-2 hover:bg-gray-800 transition cursor-pointer">
            View Product
          </button>
        </div>
      ))}
    </div>
  </div>
</>

    );
}

export default ProductInfo;
