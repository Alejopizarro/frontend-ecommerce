// eslint-disable @next/next/no-img-element
"use client";
import { useGetCategories } from "@/api/getCategories";
import { CategoryType } from "@/types/category";
import { ResponseType } from "@/types/response";
import CategoryCard from "./category-card";
const ChooseCategory = () => {
  const { result, loading }: ResponseType = useGetCategories();

  console.log("Result desde categories", result);
  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 pb-4 text-3xl sm:pb-8">
        Elige tu categoria favorita
      </h3>
      <div className="grid gap-5 sm:grid-cols-3">
        {!loading &&
          result !== undefined &&
          result.map((category: CategoryType) => (
            <CategoryCard key={category.id} category={category} />
          ))}
      </div>
    </div>
  );
};

export default ChooseCategory;
