/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useGetProductField } from "@/api/getProductField";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FiltersType } from "@/types/filters";
import { useEffect, useState } from "react";

type FilterBrandProps = {
  setFilterBrand: (brand: string) => void;
  products: any[];
};

const FilterBrand = (props: FilterBrandProps) => {
  const { setFilterBrand, products } = props;
  const { result, loading }: FiltersType = useGetProductField();

  console.log("Brand counts: ", products);

  const [brandCounts, setBrandCounts] = useState<{ [key: string]: number }>({});
  useEffect(() => {
    // Calculate brand counts when products change
    const counts: { [key: string]: number } = {};
    if (Array.isArray(products)) {
      products.forEach((product) => {
        const brand = product.attributes.brand;
        counts[brand] = (counts[brand] || 0) + 1;
      });
      setBrandCounts(counts);
    }
  }, [products]);
  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Marca</p>
      {loading && result === null && <p>Cargando marcas...</p>}

      <RadioGroup onValueChange={(value) => setFilterBrand(value)}>
        {result !== null &&
          result.schema.attributes.brand.enum.map((brand: string) => (
            <div key={brand} className="flex items-center space-x-2">
              <RadioGroupItem value={brand} id={brand} />
              <Label htmlFor={brand}>
                {brand} ({brandCounts[brand] || 0})
              </Label>
            </div>
          ))}
      </RadioGroup>
    </div>
  );
};

export default FilterBrand;
