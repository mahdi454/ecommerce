import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Span } from "next/dist/trace";
import Cart from "./Cart";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const user = null;
  return (
    <div className="bg-white sticky z-50 top-0 h-16 inset-x-0 dark:bg-slate-950">
      <header className="bg-white relative dark:bg-slate-950">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200 dark:border-slate-800">
            <div className="flex items-center justify-between h-16">

              <div className="flex ">
                <Link href="/">
                  <Icons.Logo2 className="h-20 dark:fill-white" viewBox="20 0 100 100"/>
                </Link>
              </div>
              <div className="lg:hidden flex items-center justify-end flex-1">
                <Menu />
                <X className="hidden" />
              </div>
              <div className="hidden z-50 lg:ml-8 lg:self-stretch lg:block">
                <NavItems />
              </div>
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:items-center lg:justify-end lg:flex-1 space-x-6 ">
                  {user ? null : (
                    <Link
                    href="sign-in"
                      className={buttonVariants({ size: "sm",variant:'ghost' })}
                    >
                      {" "}
                      Sign in
                    </Link>
                  )}
                  {user ? null : (
                    <span className="h-6 bg-gray-200 w-px dark:bg-slate-800" aria-hidden="true" />
                  )}
                  {user ? (
                    <p>Logout</p>
                  ) : (
                    <Link
                      href="sign-up"
                      className={buttonVariants({ size: "sm" ,variant:'ghost'})}
                    >
                      {" "}
                      Create account
                    </Link>
                  )}
                  {user ? (
                    <span className="h-6 bg-gray-200 w-px dark:bg-slate-800" aria-hidden="true" />
                  ) : null}
                  {user ? null : (
                    <div className="flex lg:ml-10">
                      <span
                        className="h-6 bg-gray-200 w-px dark:bg-slate-800"
                        aria-hidden="true"
                        />
                    </div>
                  )}
                  <ModeToggle/>
                  <Cart/>
                  {/* <Search className="cursor-pointer hover:text-slate-400" />
                  <Link
                    href="#"
                    className="relative cursor-pointer hover:text-slate-400"
                  >
                    <ShoppingCart />
                    <span className="w-4 h-4 absolute left-4 bottom-3.5 bg-slate-400 text-blue-50 text-xs rounded-full">
                      7
                    </span>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}
