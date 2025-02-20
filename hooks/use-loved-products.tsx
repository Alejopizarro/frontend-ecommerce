import { ProductType } from "@/types/product";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "./use-toast";

interface UseLovedProductsType {
  lovedItem: ProductType[];
  addLovedItem: (data: ProductType) => void;
  removeLovedItem: (id: number) => void;
}

export const useLovedProducts = create(
  persist<UseLovedProductsType>(
    (set, get) => ({
      lovedItem: [],
      addLovedItem: (data: ProductType) => {
        const currentLovedItems = get().lovedItem;
        const existingItem = currentLovedItems.find(
          (item) => item.id === data.id
        );

        if (existingItem) {
          return toast({
            title: "El producto ya existe en la lista💔",
            variant: "destructive",
          });
        }

        set({
          lovedItem: [...get().lovedItem, data],
        });
        toast({
          title: "Producto agregado a la lista de favoritos💛",
        });
      },
      removeLovedItem: (id: number) => {
        set({
          lovedItem: [...get().lovedItem.filter((item) => item.id !== id)],
        });
        toast({
          title: "Producto eliminado de la lista de favoritos❤️‍🔥",
        });
      },
    }),
    {
      name: "loved-products-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
