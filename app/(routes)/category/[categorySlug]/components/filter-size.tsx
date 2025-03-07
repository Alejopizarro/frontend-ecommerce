/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetProductField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FiltersType } from "@/types/filters";
import { useEffect, useState } from "react";

type FilterSizeProps = {
  setFilterSize: (size: string) => void;
  products: any[];
};

const FilterSize = (props: FilterSizeProps) => {
  const { setFilterSize, products } = props;
  const { result, loading }: FiltersType = useGetProductField();
  const [sizeCounts, setSizeCounts] = useState<{ [key: string]: number }>({});
  useEffect(() => {
    const counts: { [key: string]: number } = {};
    if (Array.isArray(products)) {
      products.forEach((product) => {
        const size = product.attributes.size;
        counts[size] = (counts[size] || 0) + 1;
      });
      setSizeCounts(counts);
    }
  }, [products]);
  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Talla</p>
      {loading && result === null && <p>Cargando marcas...</p>}

      <RadioGroup onValueChange={(value) => setFilterSize(value)}>
        {result !== null &&
          result.schema.attributes.size.enum.map((size: string) => (
            <div key={size} className="flex items-center space-x-2">
              <RadioGroupItem value={size} id={size} />
              <Label htmlFor={size}>
                {size} ({sizeCounts[size] || 0})
              </Label>
            </div>
          ))}
      </RadioGroup>
    </div>
  );
};

export default FilterSize;
