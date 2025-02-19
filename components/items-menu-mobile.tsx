import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>
      <PopoverContent>
        <Link href="/categories/track-jackets" className="block">
          Track Jackets
        </Link>
      </PopoverContent>
    </Popover>
  );
};

export default ItemsMenuMobile;
