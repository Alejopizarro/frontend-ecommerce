export type ProductType = {
  id: number;
  attributes: {
    productName: string;
    slug: string;
    description: string;
    active: boolean;
    isOffer: boolean;
    oldPrice: number;
    isFeatured: boolean;
    price: number;
    brand: string;
    size: string;
    images: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      }[];
    };
    category: {
      data: {
        attributes: {
          slug: string;
          categoryName: string;
        };
      };
    };
  };
};
