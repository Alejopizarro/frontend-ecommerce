"use client";
import { useGetCategoryProduct } from "@/api/getCategoryProducts";
import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation";
import FiltersControlsCategory from "./components/filters-controls-category";
import SkeletonSchema from "@/components/skeletonSchema";
import ProductCard from "./components/product-card";
import { ProductType } from "@/types/product";
import { useState } from "react";

export default function Page() {
  const params = useParams();
  const { categorySlug } = params;
  const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug);
  const [filterBrand, setFilterBrand] = useState("");
  const [filterSize, setFilterSize] = useState("");
  const filteredProducts =
    result !== null &&
    !loading &&
    result.filter(
      (product: ProductType) =>
        (filterBrand === "" || product.attributes.brand === filterBrand) &&
        (filterSize === "" || product.attributes.size === filterSize)
    );

  console.log("Result desde category slug: ", categorySlug);
  console.log("Result desde category slug: ", result);
  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {result !== null && !loading && (
        <h1 className="text-3xl font-medium px-4 py-2">
          {result[0].attributes.category.categoryName}
        </h1>
      )}
      <Separator />

      <div className="sm:flex sm:justify-between">
        <FiltersControlsCategory
          setFilterBrand={setFilterBrand}
          setFilterSize={setFilterSize}
          products={result}
        />

        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {loading && <SkeletonSchema grid={3} />}
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
  );
}
