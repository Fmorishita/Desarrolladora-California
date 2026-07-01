import * as React from "react";

/**
 * Slot minimalista (patrón shadcn/Radix) para soportar `asChild`.
 * Fusiona props y className en el único hijo React.
 */
export const Slot = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ children, ...props }, ref) => {
    if (!React.isValidElement(children)) return null;
    const child = children as React.ReactElement<Record<string, unknown>>;
    return React.cloneElement(child, {
      ...props,
      ...(child.props as Record<string, unknown>),
      ref,
      className: [
        (props as { className?: string }).className,
        (child.props as { className?: string }).className,
      ]
        .filter(Boolean)
        .join(" "),
    });
  },
);
Slot.displayName = "Slot";
