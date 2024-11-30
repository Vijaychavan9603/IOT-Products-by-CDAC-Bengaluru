import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { components } from "../../../../Data/components";

export default function Product() {
  // State for loader is defined but not used, can be removed.
  const [isLoaderOpen, setIsLoaderOpen] = useState(false);

  return (
    <div className="bg-white -z-20">
      <div>
        <main className="mx-auto px-4 lg:px-14">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Product
            </h1>
            <div className="flex items-center"></div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div>
              {/* Product grid */}
              <div className="lg:col-span-4 w-full">
                <div className="flex flex-wrap justify-center bg-white border py-5 rounded-md">
                  {components.map((item) => (
                    <ProductCard key={item.id} product={item} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
