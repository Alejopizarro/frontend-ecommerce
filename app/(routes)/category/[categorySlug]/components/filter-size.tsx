import { useGetProductField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FiltersType } from "@/types/filters";

type FilterSizeProps = {
  setFilterSize: (size: string) => void;
};

const FilterSize = (props: FilterSizeProps) => {
  const { setFilterSize } = props;
  const { result, loading }: FiltersType = useGetProductField();
  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Talla</p>
      {loading && result === null && <p>Cargando marcas...</p>}

      <RadioGroup onValueChange={(value) => setFilterSize(value)}>
        {result !== null &&
          result.schema.attributes.size.enum.map((size: string) => (
            <div key={size} className="flex items-center space-x-2">
              <RadioGroupItem value={size} id={size} />
              <Label htmlFor={size}>{size}</Label>
            </div>
          ))}
      </RadioGroup>
    </div>
  );
};

export default FilterSize;
