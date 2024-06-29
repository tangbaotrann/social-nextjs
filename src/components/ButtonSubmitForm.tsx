import React from "react";
import { useFormStatus } from "react-dom";

import Loading from "./Loading";

function ButtonSubmitForm(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const Comp = "button";

  const { pending } = useFormStatus();

  return (
    <Comp {...props} type="submit" disabled={props.disabled || pending}>
      <div className="flex items-center justify-center gap-2">
        {pending && <Loading />}

        {props.children}
      </div>
    </Comp>
  );
}

export default ButtonSubmitForm;
