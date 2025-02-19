import FilterBrand from "./filter-brand";
import FilterSize from "./filter-size";

type FiltersControlsCategory = {
  setFilterBrand: (brand: string) => void;
  setFilterSize: (size: string) => void;
};

const FiltersControlsCategory = (props: FiltersControlsCategory) => {
  const { setFilterBrand, setFilterSize } = props;

  return (
    <div className="sm:w-[350px] sm:mt-5 md:grid-cols-2 p-6">
      <FilterBrand setFilterBrand={setFilterBrand} />
      <FilterSize setFilterSize={setFilterSize} />
    </div>
  );
};

export default FiltersControlsCategory;
