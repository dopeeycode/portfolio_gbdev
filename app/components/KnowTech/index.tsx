import { TbBrandNextjs } from "react-icons/tb";
import SectionTitle from "../SectionTitle";
import TechCard from "./TechCard";
import { Data } from "./dataTechs";

export default function KnowTech() {
  return (
    <section className="container py-6">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-2 mt-[60px]">
        {Data.map(tech => (
          <TechCard key={tech.id} tech={{
            icon: tech.icon,
            name: tech.name,
            startDate: tech.startDate
          }}/>
        ))}
      </div>
    </section>
  )
}
