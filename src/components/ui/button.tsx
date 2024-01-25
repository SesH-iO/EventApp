import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "YESinline-flex YESitems-center YESjustify-center YESwhitespace-nowrap YESrounded-md YEStext-sm YESfont-medium YESring-offset-background YEStransition-colors focus-visible:YESoutline-none focus-visible:YESring-2 focus-visible:YESring-ring focus-visible:YESring-offset-2 disabled:YESpointer-events-none disabled:YESopacity-50",
  {
    variants: {
      variant: {
        default: "YESbg-primary YEStext-primary-foreground hover:YESbg-primary/90",
        destructive:
          "YESbg-destructive YEStext-destructive-foreground hover:YESbg-destructive/90",
        outline:
          "YESborder YESborder-input YESbg-background hover:YESbg-accent hover:YEStext-accent-foreground",
        secondary:
          "YESbg-secondary YEStext-secondary-foreground hover:YESbg-secondary/80",
        ghost: "hover:YESbg-accent hover:YEStext-accent-foreground",
        link: "YEStext-primary YESunderline-offset-4 hover:YESunderline",
      },
      size: {
        default: "YESh-10 YESpx-4 YESpy-2",
        sm: "YESh-9 YESrounded-md YESpx-3",
        lg: "YESh-11 YESrounded-md YESpx-8",
        icon: "YESh-10 YESw-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
