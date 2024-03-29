"use client"
import { Icons } from "@/components/Icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AuthCredentialValidator,
  TAuthCredentialValidator,
} from "@/lib/validators";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialValidator>({
    resolver: zodResolver(AuthCredentialValidator),
  });
  const onSubmit = ({ email, password }: TAuthCredentialValidator) => {
    console.log({email, password});
  };
  return (
    <>
      <div className="container relative pt-10 flex justify-center items-center lg:px-0">
        <div className="mx-auto w-full sm:w-[350px] space-y-4 flex justify-center flex-col">
          <div className="flex flex-col items-center  text-center ">
            <Icons.Logo2
              className="h-28 w-28 mr-2 dark:fill-white"
              viewBox="0 0 100 60"
            />
            <h1 className="text-2xl font-bold">Create an account</h1>
            <Link href="/sign-in" className="flex items-center gap-1">
              Already have an account? Sign-in
              <ArrowRight className=" h-4 w-4" />
            </Link>          
          </div>
          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-2 py-1">
                  <Label htmlFor="email"> Email</Label>
                  <Input
                    {...register("email")}
                    placeholder="you@example.com"
                    className={cn({ "focus-visible:ring-red-500":errors.email?.message })}
                  />
                </div>
                <div className="grid gap-2 pt-1 pb-4">
                  <Label htmlFor="password"> Password</Label>
                  <Input
                    {...register("password")}
                    placeholder="password"
                    className={cn({ "focus-visible:ring-red-500": errors.password?.message})}
                  />
                </div>
                <Button>Sign Up</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
