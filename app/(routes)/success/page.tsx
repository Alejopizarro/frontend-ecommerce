"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PageSuccess = () => {
  const router = useRouter();
  return (
    <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
      <div className="flex flex-col-reverse gap-2 sm:flex-row">
        <div className="flex justify-center md:min-w-[400px]">
          <Image
            src="/success.jpg"
            alt="success"
            width={250}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl">¡Gracias por tu compra!</h1>
          <p className="my-3">
            En breve nuestro equipo... Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Debitis nesciunt eligendi facilis amet fuga sed
            minima cupiditate, totam sint officia maiores doloremque laborum.
            Accusamus itaque magni laudantium repudiandae eos quaerat.
          </p>
          <p className="my-3">
            Gracias de nuevo por confiar en nosotros...Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Fugiat molestiae dolor ipsam eum
            explicabo magnam veritatis atque unde voluptate ipsum dolorum,
            quidem distinctio facilis sit neque? Delectus neque placeat non.
          </p>
          <p className="my-3">Disfrutala puto</p>
          <Button onClick={() => router.push("/")}>Volver a la tienda</Button>
        </div>
      </div>
    </div>
  );
};

export default PageSuccess;
