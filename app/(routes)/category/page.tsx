/* eslint-disable @next/next/no-img-element */
"use client";
import { useGetCategories } from "@/api/getCategories";
import { useGetProducts } from "@/api/getProducts";
import CategoryCard from "@/components/category-card";
import SkeletonSchema from "@/components/skeletonSchema";
import { Separator } from "@/components/ui/separator";
import { CategoryType } from "@/types/category";
import { ResponseType } from "@/types/response";
import FiltersControlsCategory from "./[categorySlug]/components/filters-controls-category";
import { ProductType } from "@/types/product";
import { useState } from "react";
import ProductCard from "./[categorySlug]/components/product-card";

const Page = () => {
  const { result, loading }: ResponseType = useGetCategories();
  const { result: products, loading: loadingProducts }: ResponseType =
    useGetProducts();
  const [filterBrand, setFilterBrand] = useState("");
  const [filterSize, setFilterSize] = useState("");
  const filteredProducts =
    products !== null &&
    !loading &&
    products.filter(
      (product: ProductType) =>
        (filterBrand === "" || product.attributes.brand === filterBrand) &&
        (filterSize === "" || product.attributes.size === filterSize)
    );

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h1 className="px-6 pb-4 text-3xl">Categorias</h1>
      <Separator />
      <div className="grid py-4 gap-5 sm:grid-cols-3">
        {!loading &&
          result !== null &&
          result.map((category: CategoryType) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        {loading === true && <SkeletonSchema grid={3} />}
      </div>
      <div>
        <h3 className="px-6 py-4 text-xl ">Todos los productos</h3>
        <Separator />

        <div className="sm:flex sm:justify-between">
          <FiltersControlsCategory
            setFilterBrand={setFilterBrand}
            setFilterSize={setFilterSize}
            products={products}
          />

          <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
            {loadingProducts && <SkeletonSchema grid={3} />}
            {filteredProducts !== null &&
              !loading &&
              filteredProducts.map((product: ProductType) => (
                <ProductCard key={product.id} product={product} />
              ))}
            {filteredProducts !== null &&
              !loading &&
              filteredProducts.length === 0 && (
                <p className="text-gray-400 p-6">
                  No hay productos con este filtro.
                </p>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
