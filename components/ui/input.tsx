import * as React from "react"

import { cn } from "@/lib/utils"
import { Label } from "./label"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    labelTitle?: string
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, labelTitle, ...props }, ref) => {
    return (
      <>
     {labelTitle && <Label className="text-[.7rem] text-[#333333]/50">{labelTitle}</Label>}
      <input
        type={type}
        className={cn(
          "flex h-8 w-full rounded-sm border border-input bg-[#FAFAFA] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-xs",
          className
        )}
        ref={ref}
        {...props}
      />
      </>
    )
  }
)
Input.displayName = "Input"

export { Input }
