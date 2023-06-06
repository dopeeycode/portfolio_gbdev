import TechsBadge from "@/app/components/Techs-badge";
import { techs } from "@/app/components/Techs-badge/techs";
import Image from "next/image";

export default function HeroSection() {

  

  return (
    <section className="w-full h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col
    justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Gabriel Borges</h2>

          <p className="text-gray-400 my-6 text-sm lg:text-base">
            Olá, meu nome é Gabriel Borges e sou um desenvolvedor front-end apaixonado por tecnologia.
            Com mais de 2 anos de experiência. Meu objetivo é criar interfaces de usuário bonitas e 
            funcionais, além de liderar equipes técnicas em projetos desafiadores. Estou sempre aberto 
            a novas oportunidades e desafi
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {techs.map(item => (
              <TechsBadge key={item.id} name={item.name} />
            ))}
          </div>
          <div>
            contato
          </div>
        </div>
        
        <Image 
          width={420}
          height={404}

          src='/images/profile-pic.png'
          alt="Foto de perfil do gobriel borges"
        />
      </div>
    </section>
  )
}
