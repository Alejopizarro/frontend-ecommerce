export type CategoryType = {
  id: number;
  attributes: {
    categoryName: string;
    slug: string;
    mainImage: {
      attributes: {
        url: string;
      };
    };
  };
};
