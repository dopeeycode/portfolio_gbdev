import { getRelativeTimeString } from "@/app/ultils/get-relative-time"
import { ReactNode } from "react"

type TechProps = {
  tech: {
    icon: ReactNode
    name: string
    startDate: string
  }
}


export default function TechCard({ tech }: TechProps) {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate), 'pt-BR'
  ).replace('há', '')

  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col hover:text-emerald-500 
    hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        {tech.icon}
      </div>
      <span>{relativeTime} de experiência</span>
    </div>
  )
}
