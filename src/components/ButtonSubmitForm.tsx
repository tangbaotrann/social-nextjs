import React from "react";
import { useFormStatus } from "react-dom";

import Loading from "./Loading";
import { cn } from "@/lib/utils";

function ButtonSubmitForm(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const Comp = "button";

  const { pending } = useFormStatus();

  return (
    <Comp
      {...props}
      type="submit"
      className={cn(
        "w-full bg-blue-500 rounded-md text-white text-md font-medium p-2 hover:opacity-80 hover:duration-500",
        props.className
      )}
      disabled={props.disabled || pending}
    >
      <div className="flex items-center justify-center gap-2">
        {pending && <Loading />}

        {props.children}
      </div>
    </Comp>
  );
}

export default ButtonSubmitForm;
