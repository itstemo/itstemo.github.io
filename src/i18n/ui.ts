export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'meta.description': 'Temo Ojeda — data, software, and agaves.',
    'home.tagline': 'Data, software, and agaves.',
    'about.title': 'About',
    'about.p1':
      "I'm Temo. I spend most of my time working with data and software, and most of the " +
      'rest of it around agaves: growing them, learning about them, and appreciating what ' +
      'gets made from them.',
    'about.p2':
      "I'm currently a software engineer at Spotify. Before that I was at Lyft, working on " +
      'data infrastructure and real-time ML features, and at Maza, a consumer fintech ' +
      'startup, as a product engineer.',
    'about.p3':
      'This site is where those meet: notes on data and engineering, and the ' +
      'occasional dispatch from the agave world.',
    'contact.title': 'Contact',
    'contact.intro': 'The best way to reach me:',
    'blog.title': 'Blog',
  },
  es: {
    'nav.about': 'Acerca',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'meta.description': 'Temo Ojeda — datos, software y agaves.',
    'home.tagline': 'Datos, software y agaves.',
    'about.title': 'Acerca',
    'about.p1':
      'Soy Temo. Paso la mayor parte de mi tiempo trabajando con datos y software, y casi ' +
      'todo el resto alrededor de los agaves: cultivándolos, aprendiendo sobre ellos ' +
      'y apreciando lo que podemos hacer con ellos.',
    'about.p2':
      'Actualmente soy ingeniero de software en Spotify. Antes estuve en Lyft, trabajando ' +
      'en infraestructura de datos y funcionalidades de ML en tiempo real, y en Maza, una ' +
      'startup de fintech como ingeniero de producto.',
    'about.p3':
      'Este sitio es el punto medio: notas sobre datos e ingeniería, y algún ' +
      'que otro post del mundo agavero.',
    'contact.title': 'Contacto',
    'contact.intro': 'La mejor manera de contactarme:',
    'blog.title': 'Blog',
  },
} as const;

export type Lang = keyof typeof ui;
