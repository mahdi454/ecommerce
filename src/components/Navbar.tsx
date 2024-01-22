import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import { Menu, X, ShoppingCart, Heart } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-white sticky z-50 top-0 h-16 inset-x-0">
      <header className="bg-white relative">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex justify-between text-center h-16">
              {/* mobile menu */}

              <div className="ml-4 flex  lg:ml-0">
                <Link
                  href="/"
                  className="flex justify-center items-center gap-2"
                >
                  <Icons.Logo className="h-10 w-10 text-blue-950" />
                  <p className="text-lg tracking-widest font-bold">
                    City Hunter
                  </p>
                </Link>
              </div>
              <div className="hidden lg:ml-8 lg:block lg:self-stretch z-50">
                <NavItems />
              </div>
              <div className="flex justify-center items-center gap-6">
                <div className=" relative flex gap-6 text-muted-foreground">
                  <Heart />
                  <span className="w-4 h-4 absolute left-4 top-[-2px] bg-slate-400 text-white text-xs rounded-full">0</span>
                  <ShoppingCart />
                  <span className="w-4 h-4 absolute left-16 top-[-2px] bg-slate-400 text-white text-xs rounded-full">8</span>
                </div>
                <div>
                  <Menu />
                  <X className="hidden"/>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}
