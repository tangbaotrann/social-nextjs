import { cn } from "@/lib/utils";
import { ModalTypes } from "@/types/Modal.type";

function Modal({ children, className }: Readonly<ModalTypes>) {
  const Comp = "div";

  return (
    <Comp
      className={cn(
        "fixed w-full h-full top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50",
        className
      )}
    >
      {children}
    </Comp>
  );
}

export default Modal;
