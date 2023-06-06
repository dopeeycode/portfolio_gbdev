import 
{ TbBrandCss3, 
  TbBrandHtml5, 
  TbBrandJavascript, 
  TbBrandNextjs, 
  TbBrandReact, 
  TbBrandReactNative, 
  TbBrandTypescript } 
from "react-icons/tb";

import { FaNodeJs } from 'react-icons/fa'

export const Data = [
  {
    id: 1,
    name: 'HTML',
    startDate: '2021-01-01',
    icon: <TbBrandHtml5 size={20} />
  },
  {
    id: 2,
    name: 'CSS',
    startDate: '2021-01-01',
    icon: <TbBrandCss3 size={20} />
  },
  {
    id: 3,
    name: 'JavaScript',
    startDate: '2021-01-01',
    icon: <TbBrandJavascript size={20} />
  },
  {
    id: 4,
    name: 'TypeScript',
    startDate: '2021-01-01',
    icon: <TbBrandTypescript size={20} />
  },
  {
    id: 5,
    name: 'React',
    startDate: '2021-01-01',
    icon: <TbBrandReact size={20} />
  },
  {
    id: 6,
    name: 'React Native',
    startDate: '2021-01-01',
    icon: <TbBrandReactNative size={20} />
  },
  {
    id: 7,
    name: 'Next.js',
    startDate: '2021-01-01',
    icon: <TbBrandNextjs size={20} />
  },
  {
    id: 8,
    name: 'Node.js',
    startDate: '2021-01-01',
    icon: <FaNodeJs size={20} />
  },
]