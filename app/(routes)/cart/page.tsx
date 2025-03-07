"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import CartItem from "./components/cartItem";
import { makePaymentRequest } from "@/api/payment";
import { useRouter } from "next/navigation";

export default function Page() {
  const { items, removeAll } = useCart();
  const router = useRouter();

  const prices = items.map((product) => product.attributes.price);
  const totalPrice = prices.reduce((total, price) => total + price, 0);
  // const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

  const buyStripe = async () => {
    try {
      const res = await makePaymentRequest.post("/api/orders", {
        products: items,
      });

      if (res.data?.stripeSession?.url) {
        router.push(res.data.stripeSession.url);
      } else {
        console.error("No se recibió una URL de Stripe.");
      }
      removeAll();
    } catch (error) {
      console.error("Error al procesar el pago:", error);
    }
  };

  return (
    <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:min-h-[80vh]">
      <h1 className="mb-5 text-3xl font-bold">Carrito de Compras</h1>
      <div className="grid sm:grid-cols-2 sm:gap-5">
        <div>
          {items.length === 0 && (
            <p className="text-gray-400">No hay productos en el carrito</p>
          )}
          <ul>
            {items.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </ul>
        </div>
        <div className="max-w-xl">
          <div className="p-6 rounded-lg bg-slate-100">
            <p className="mb-3 text-lg font-semibold">Resumen de pedido</p>
            <Separator />
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between py-4 items-center"
              >
                <p>{item.attributes.productName}</p>
                <p>{formatPrice(item.attributes.price)}</p>
              </div>
            ))}
            <div className="flex justify-between gap-5 my-4">
              <p className="font-semibold">Total del pedido</p>
              <p className="font-bold">{formatPrice(totalPrice)}</p>
            </div>
            <div className="flex items-center justify-center w-full mt-3">
              <Button className="w-full" onClick={buyStripe}>
                Comprar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
