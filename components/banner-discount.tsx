import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerDiscount = () => {
  return (
    <div className="p-5 sm:p-10 text-center bg-gray-200">
      <h2 className="uppercase font-black text-2xl">
        Consigue hasta un 25% de descuento
      </h2>
      <h3>-20% al gastar 100€ o -25% al gastar 150€. Usa el codigo PERICO</h3>
      <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
        <Link href="#" className={buttonVariants()}>
          Comprar
        </Link>
      </div>
    </div>
  );
};

export default BannerDiscount;
