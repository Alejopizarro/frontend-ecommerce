"use client";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ResponseType } from "@/types/response";
import { useGetCategories } from "@/api/getCategories";
import { CategoryType } from "@/types/category";
import { useRouter } from "next/navigation";

const ItemsMenuMobile = () => {
  const { result, loading }: ResponseType = useGetCategories();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Categorias</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {!loading &&
                result !== null &&
                result.map((category: CategoryType) => (
                  <DropdownMenuItem
                    key={category.id}
                    onClick={() =>
                      router.push(`/category/${category.attributes.slug}`)
                    }
                  >
                    {category.attributes.categoryName}
                  </DropdownMenuItem>
                ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem>Ofertas</DropdownMenuItem>
        <DropdownMenuItem>Carrito de compras</DropdownMenuItem>
        <DropdownMenuItem>Productos favoritos</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ItemsMenuMobile;
