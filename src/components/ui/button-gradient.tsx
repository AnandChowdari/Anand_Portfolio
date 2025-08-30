
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 font-heading",
  {
    variants: {
      variant: {
        default:
         "relative overflow-hidden bg-gradient-to-b from-[#7F00FF] via-[#9D50BB] to-[#33C3F0] text-white bg-[length:200%_200%] animate-gradient-y hover:ring-2 hover:ring-[#2b005a] backdrop-blur-md bg-opacity-80 shadow-[0_0_20px_rgba(127,0,255,0.3)] hover:shadow-[0_0_25px_rgba(127,0,255,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300",
        premium: 
          "relative overflow-hidden bg-gradient-to-r from-[#6A0DAD] via-[#8A2BE2] to-[#51117B] text-white shadow-[0_0_20px_rgba(106,13,173,0.3)] hover:shadow-[0_0_25px_rgba(106,13,173,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300",
        outline:
          "border-2 border-primary/50 bg-background/50 text-primary backdrop-blur-sm hover:bg-primary/10 hover:border-primary transition-colors duration-300",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-14 rounded-md px-10 text-lg",
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

const ButtonGradient = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
ButtonGradient.displayName = "ButtonGradient"

export { ButtonGradient, buttonVariants }
