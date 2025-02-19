import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
  return (
    <>
      <div className="mt-4 text-center">
        <p>Sumergete en una experiencia unica</p>
        <h4 className="mt-2 text-5xl font-extrabold uppercase">
          Prendas Unicas
        </h4>
        <p className="my-2 text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <Link href="#" className={buttonVariants()}>
          Comprar
        </Link>
      </div>
      <div className="h-[350px] bg-cover lg:h-[600px] bg-[url('/slider-perico.jpg')] bg-center mt-5" />
    </>
  );
};

export default BannerProduct;
