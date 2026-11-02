import React from 'react';
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiNetlify,
  SiPostman,
  SiVite
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa6';
import { GrHeroku } from 'react-icons/gr';
import { Globe, ShieldCheck, Database, Server, Code2 } from 'lucide-react';

const iconMap = {
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiHtml5,
  SiCss3: FaCss3Alt,
  SiCss,
  FaCss3Alt,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiNetlify,
  SiHeroku: GrHeroku,
  GrHeroku,
  SiPostman,
  SiVite,
  Globe,
  ShieldCheck,
  Database,
  Server
};

export default function SkillIcon({ iconName, className = "w-6 h-6", color }) {
  const IconComponent = iconMap[iconName] || Code2;
  return (
    <IconComponent 
      className={className} 
      style={color ? { color } : undefined} 
      aria-hidden="true" 
    />
  );
}
