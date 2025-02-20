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

const ItemsMenuMobile = () => {
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
              <DropdownMenuItem>Track Jackets</DropdownMenuItem>
              <DropdownMenuItem>Track Pants</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Más categorias...</DropdownMenuItem>
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
