import React from 'react';
import {BsCartFill} from 'react-icons/bs'


const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    description: 'Description of Product 1',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    description: 'Description of Product 1',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    description: 'Description of Product 1',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    description: 'Description of Product 1',
  },
  {
    id: 5,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    description: 'Description of Product 1',
  },
]

const Home = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <header className="bg-white shadow-md p-4 mb-4">
        <h1 className="text-2xl font-semibold">Snapdeal Clone</h1>
      </header>
        <div className="mt-10 grid grid-cols-1  gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-10">
          {products.map((product) => (
            <div key={product.id} className="group relative rounded-md border-2">
            <div className="aspect-h-1 aspect-w-1 w-full p-2 overflow-hidden rounded-md lg:aspect-none lg:h-80 lg:w-100">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />  
              </div>
              <div className="mt-4 flex justify-between p-2">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
              <div className="mt-2 p-2 flex justify-between items-center">
                <BsCartFill />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
