import { cn } from "@/app/lib/utils"
import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
   <button
    className={cn(
      'bg-emerald-600 py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2',
      className
    )}
    {...props}
   >
    {children}
   </button>
  )
}
