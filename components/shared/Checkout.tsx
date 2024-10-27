"use client"
import NoStripe from "@/app/(root)/nostripe/page";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const router=useRouter();
  return (
    <Button
      type="submit"
      role="link"
      className="w-full rounded-full bg-purple-gradient bg-cover"
      onClick={()=>router.push("/nostripe")}
    >
      Buy Credit
    </Button>
  );
};
export default Checkout;