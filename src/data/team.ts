import type { Lang } from '../config/site';
import { site } from '../config/site';

type Member = { initials: string; name: string; role: string; bio: string; langs: string; show: boolean };

// Slavi is hidden until he approves his profile (site.showSlavi).
export function team(lang: Lang): Member[] {
  const t = {
    en: {
      tRole: 'Founder and engineering lead',
      tBio: 'Senior software engineer who has built systems for a German banking group and a semiconductor maker in Austria. Designs and builds every Elev8x automation, and stays your contact from the first call to go-live.',
      sRole: 'Partner, projects and sales',
      sBio: 'Project manager with extensive experience delivering technology projects in Germany, Austria and Switzerland, including for Swiss banks. Your first contact for scope, timelines and pricing.',
      langs: 'English · German · Bulgarian',
    },
    de: {
      tRole: 'Gründer und technischer Leiter',
      tBio: 'Senior Software Engineer, der Systeme für eine deutsche Bankengruppe und einen Halbleiterhersteller in Österreich gebaut hat. Konzipiert und baut jede Elev8x-Automatisierung und bleibt Ihr Ansprechpartner vom ersten Gespräch bis zum Go-live.',
      sRole: 'Partner, Projekte und Vertrieb',
      sBio: 'Projektmanager mit langjähriger Erfahrung in Technologieprojekten in Deutschland, Österreich und der Schweiz, unter anderem für Schweizer Banken. Ihr erster Ansprechpartner für Umfang, Zeitplan und Preis.',
      langs: 'Deutsch · Englisch · Bulgarisch',
    },
    bg: {
      tRole: 'Основател и водещ инженер',
      tBio: 'Старши софтуерен инженер, изграждал системи за германска банкова група и за производител на полупроводници в Австрия. Проектира и изгражда всяка автоматизация на Elev8x и остава ваш контакт от първия разговор до старта.',
      sRole: 'Партньор, проекти и продажби',
      sBio: 'Ръководител на проекти с богат опит в технологични проекти в Германия, Австрия и Швейцария, включително за швейцарски банки. Вашият първи контакт за обхват, срокове и цена.',
      langs: 'Български · Английски · Немски',
    },
  }[lang];
  return [
    { initials: 'TY', name: site.founder.name, role: t.tRole, bio: t.tBio, langs: t.langs, show: true },
    { initials: 'ST', name: 'Slavi Todorov', role: t.sRole, bio: t.sBio, langs: t.langs, show: site.showSlavi },
  ].filter((m) => m.show);
}
