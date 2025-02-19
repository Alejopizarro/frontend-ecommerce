import { useGetProductField } from "@/api/getProductField";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FiltersType } from "@/types/filters";

type FilterBrandProps = {
  setFilterBrand: (brand: string) => void;
};

const FilterBrand = (props: FilterBrandProps) => {
  const { setFilterBrand } = props;
  const { result, loading }: FiltersType = useGetProductField();

  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Marca</p>
      {loading && result === null && <p>Cargando marcas...</p>}

      <RadioGroup onValueChange={(value) => setFilterBrand(value)}>
        {result !== null &&
          result.schema.attributes.brand.enum.map((brand: string) => (
            <div key={brand} className="flex items-center space-x-2">
              <RadioGroupItem value={brand} id={brand} />
              <Label htmlFor={brand}>{brand}</Label>
            </div>
          ))}
      </RadioGroup>
    </div>
  );
};

export default FilterBrand;
