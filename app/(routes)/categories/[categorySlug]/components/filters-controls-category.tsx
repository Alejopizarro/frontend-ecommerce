import FilterBrand from "./filter-brand";
import FilterSize from "./filter-size";

type FiltersControlsCategory = {
  setFilterBrand: (brand: string) => void;
  setFilterSize: (size: string) => void;
  products: [];
};

const FiltersControlsCategory = (props: FiltersControlsCategory) => {
  const { setFilterBrand, setFilterSize, products } = props;

  return (
    <div className="sm:w-[350px] sm:mt-5 md:grid-cols-2 p-6">
      <FilterBrand setFilterBrand={setFilterBrand} products={products} />
      <FilterSize setFilterSize={setFilterSize} products={products} />
    </div>
  );
};

export default FiltersControlsCategory;
