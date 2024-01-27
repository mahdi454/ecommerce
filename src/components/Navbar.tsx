import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import { Menu, X, ShoppingCart, Heart, Search } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-white sticky z-50 top-0 h-16 inset-x-0">
      <header className="bg-white relative">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex items-center h-16">
              <div className="ml-2 lg:hidden">
                <Menu />
                <X className="hidden" />
              </div>

              <div className=" flex ml-4 lg:ml-0">
                <Link href="/">
                  <Icons.Logo1 className="h-10 " />
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:self-stretch lg:block">
                <NavItems />
              </div>
              <div className="ml-auto flex items-center">
                <div className="flex ">
                  <Search className="cursor-pointer hover:text-slate-400" />

                  <Link
                    href="#"
                    className="relative cursor-pointer hover:text-slate-400 "
                  >
                    <Heart />
                    <span className="w-4 h-4 absolute left-4 bottom-3.5 bg-slate-400 text-white text-xs rounded-full">
                      0
                    </span>
                  </Link>
                  <Link
                    href="#"
                    className="relative cursor-pointer hover:text-slate-400"
                  >
                    <ShoppingCart />
                    <span className="w-4 h-4 absolute left-4 bottom-3.5 bg-slate-400 text-blue-50 text-xs rounded-full">
                      7
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}
