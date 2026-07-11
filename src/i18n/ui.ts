export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'meta.description': 'Temo Ojeda — data, software, and agaves.',
    'home.tagline': 'Data, software, and agaves.',
    'about.title': 'About',
    'about.p1':
      "I'm Temo. I spend most of my time working with data and building software, and the " +
      'rest of it around agaves — growing them, learning about them, and appreciating what ' +
      'gets made from them.',
    'about.p2':
      'This site is where those threads meet: notes on data and engineering, and the ' +
      'occasional dispatch from the agave world.',
    'contact.title': 'Contact',
    'contact.intro': 'The best way to reach me:',
    'blog.title': 'Blog',
  },
  es: {
    'nav.blog': 'Blog',
    'nav.about': 'Acerca',
    'nav.contact': 'Contacto',
    'meta.description': 'Temo Ojeda — datos, software y agaves.',
    'home.tagline': 'Datos, software y agaves.',
    'about.title': 'Acerca',
    'about.p1':
      'Soy Temo. Paso la mayor parte de mi tiempo trabajando con datos y construyendo ' +
      'software, y el resto alrededor de los agaves — cultivándolos, aprendiendo sobre ellos ' +
      'y apreciando lo que se hace con ellos.',
    'about.p2':
      'Este sitio es donde esos hilos se encuentran: notas sobre datos e ingeniería, y algún ' +
      'que otro despacho del mundo del agave.',
    'contact.title': 'Contacto',
    'contact.intro': 'La mejor manera de contactarme:',
    'blog.title': 'Blog',
  },
} as const;

export type Lang = keyof typeof ui;
