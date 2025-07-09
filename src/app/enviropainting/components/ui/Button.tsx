
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-base font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-enviro-pink text-enviro-green hover:bg-enviro-pink/90 hover:shadow-lg transform hover:-translate-y-0.5",
        secondary:
          "bg-white text-enviro-green hover:bg-white/90 hover:shadow-lg transform hover:-translate-y-0.5",
        outline:
          "border-2 border-enviro-pink bg-transparent text-enviro-pink hover:bg-enviro-pink hover:text-enviro-green",
        ghost: "bg-transparent text-enviro-green hover:bg-enviro-green/10",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 rounded-full px-4 text-sm",
        lg: "h-14 rounded-full px-10 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
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
