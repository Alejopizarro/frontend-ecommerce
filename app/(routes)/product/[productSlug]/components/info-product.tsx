import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import { Heart } from "lucide-react";

export type InfoProductProps = {
  product: ProductType;
};

const InfoProduct = (props: InfoProductProps) => {
  const { product } = props;
  const { addItem } = useCart();
  const { addLovedItem, lovedItem } = useLovedProducts();

  console.log("loved items: ", lovedItem);
  return (
    <div className="mb-3 flex flex-col sm:gap-8 ">
      <div className="flex justify-between items-center gap-3">
        <h1 className="text-2xl">{product.attributes.productName}</h1>
        <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
          Talla {product.attributes.size}
        </p>
        <p className="px-2 py-1 text-xs text-white bg-primary rounded-full w-fit">
          {product.attributes.brand}
        </p>
      </div>
      <Separator />
      <span className="font-bold text-2xl">
        {formatPrice(product.attributes.price)}
      </span>
      <p>👕 Descripción: Lorem ipsum dolor, sit amet consectetur adipisicing</p>
      <p>📏 Medidas: Lorem ipsum dolor, sit amet consectetur adipisicing</p>
      <p>🕵️ Estado: Lorem ipsum dolor, sit amet consectetur adipisicing</p>
      <div className="flex items-center gap-5">
        <Button className="w-full" onClick={() => addItem(product)}>
          Comprar
        </Button>
        <Heart
          width={30}
          strokeWidth={1}
          className="transition duration-300 cursor-pointer hover:fill-black"
          onClick={() => addLovedItem(product)}
        />
      </div>
    </div>
  );
};

export default InfoProduct;
