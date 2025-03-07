/* eslint-disable @next/next/no-img-element */
"use client";
import IconButton from "@/components/icon-button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import { Expand, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = (props: ProductCardProps) => {
  const router = useRouter();
  const { product } = props;
  const { addItem } = useCart();

  return (
    <Link
      href={`/product/${product.attributes.slug}`}
      className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md"
    >
      <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
        <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
          Talla {product.attributes.size}
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {product.attributes.images.data.map((image) => (
            <CarouselItem key={image.id} className="group">
              <div className="">
                <img
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`}
                  alt="Image"
                  className="rounded-xl"
                />
                {product.attributes.active === false && (
                  <div className="relative w-full py-2 text-md font-bold text-center text-white bottom-2 bg-primary ">
                    Vendido
                  </div>
                )}
                {product.attributes.isOffer === true && (
                  <div className="relative w-full py-2 text-md font-bold text-center text-white bottom-2 bg-red-600 ">
                    Oferta
                  </div>
                )}
              </div>
              <div className="absolute w-full px-6 trainsition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                <div className="flex justify-center gap-x-6">
                  <IconButton
                    onClick={() =>
                      router.push(`/product/${product.attributes.slug}`)
                    }
                    icon={<Expand size={20} className="text-gray-600 p-2" />}
                  />
                  <IconButton
                    onClick={() => addItem(product)}
                    icon={
                      <ShoppingCart size={20} className="text-gray-600 p-1" />
                    }
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className="text-1xl text-center">{product.attributes.productName}</p>
      {product.attributes.isOffer === true && (
        <p className="font-bold text-center text-decoration-line: line-through">
          {formatPrice(product.attributes.oldPrice)}
        </p>
      )}
      <p className="font-bold text-center">
        {formatPrice(product.attributes.price)}
      </p>
    </Link>
  );
};

export default ProductCard;
