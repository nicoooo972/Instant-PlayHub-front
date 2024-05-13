import * as React from "react"

import { cn } from "@/lib/utils"
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons"
import { Button } from "./button"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const disabled = props.value === "" || props.value === undefined || props.disabled
    return (
      <div className="relative">
        <input
          type={type === "password" && showPassword ? "text" : type}
          className={cn(
            "flex h-9 w-full rounded-md text-white border border-white bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-light focus:border-purple focus:outline-none focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {type === "password" && (
          <>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent hover:text-purple text-gray-light"
              onClick={() => setShowPassword((prev) => !prev)}
              disabled={disabled}
            >
              {showPassword && !disabled ? (
                <EyeOpenIcon
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              ) : (
                <EyeClosedIcon
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              )}
              <span className="sr-only">
                {showPassword ? "Hide password" : "Show password"}
              </span>
            </Button>
            {/* hides browsers password toggles */}
            <style>{`
              .hide-password-toggle::-ms-reveal,
              .hide-password-toggle::-ms-clear {
                visibility: hidden;
                pointer-events: none;
                display: none;
              }
            `}</style>
          </>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"
export { Input }
