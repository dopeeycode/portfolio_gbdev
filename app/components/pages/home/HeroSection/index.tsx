import Button from "@/app/components/Button";
import TechsBadge from "@/app/components/TechsBadge";
import Image from "next/image";

import { techs } from "@/app/components/TechsBadge/techs";


import { HiArrowNarrowRight } from 'react-icons/hi'
import 
{ 
  TbBrandGithub, 
  TbBrandLinkedin, 
  TbBrandWhatsapp, 
  TbBrandYoutube 
} from 'react-icons/tb'


export default function HeroSection() {
  const MOCK_CONTACTS = [
    {
      id: 1,
      url: 'https://github.com/dopeeycode',
      icon: <TbBrandGithub />
    },
    {
      id: 2,
      url: 'https://www.linkedin.com/in/italo-patricio/',
      icon: <TbBrandLinkedin />
    },
    {
      id: 3,
      url: 'https://www.youtube.com/',
      icon: <TbBrandYoutube />
    },
    {
      id: 4,
      url: 'https://www.youtube.com/',
      icon: <TbBrandWhatsapp />
    }
  ]  

  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col
    justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Gabriel Borges</h2>

          <p className="text-gray-400 my-6 text-sm lg:text-base">
            Olá, meu nome é <b className="text-gray-50 font-medium">Gabriel Borges</b> e sou um desenvolvedor front-end apaixonado por tecnologia.
            Com mais de <b className="text-gray-50 font-medium">2 anos de experiência.</b> Meu objetivo é criar interfaces de usuário bonitas e 
            funcionais, além de liderar equipes técnicas em projetos desafiadores. Estou sempre aberto 
            a novas oportunidades e desafios.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {techs.map(item => (
              <TechsBadge key={item.id} name={item.name} />
            ))}
          </div>
          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button" >
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="flex items-center text-2xl text-gray-600 h-20 gap-3">
              {MOCK_CONTACTS.map(contact => (
                <a 
                  href={contact.url}
                  key={contact.id}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                  >
                    {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <Image 
          width={420}
          height={404}
          src='/images/profile-pic.png'
          alt="Foto de perfil do gobriel borges"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  )
}
