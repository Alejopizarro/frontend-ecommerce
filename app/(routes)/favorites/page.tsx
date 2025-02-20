"use client";
import { useLovedProducts } from "@/hooks/use-loved-products";
import FavoriteItem from "./components/favoriteItem";

export default function Page() {
  const { lovedItem } = useLovedProducts();
  return (
    <div className="max-w-4xl py-4 mx-auto sm:py-32 sm:px-24">
      <h1 className="sm:text-2xl">Productos que te gustan</h1>
      <div>
        <div>
          {lovedItem.length === 0 && (
            <p className="py-8 text-gray-400">
              No has seleccionado productos como favoritos.
            </p>
          )}
          <ul>
            {lovedItem.map((item) => (
              <FavoriteItem key={item.id} product={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
