const profile = {
  name: 'Oscar Sintim',
  title: 'IT Student & Entrepreneur',
  tagline: 'I build simple, useful digital tools and run Step Out, my retail business.',
  photo: '/1.jpeg', // replace with '/profile.jpg' after adding your photo to public/
  about:
    'I am an IT student at BlueCrest University College and the founder of Step Out, ' +
    'a retail venture selling clothing, shoes and appliances online and at market stalls. ' +
    'I enjoy turning ideas into working software that solves everyday problems in Ghana.',
  location: 'Accra, Ghana',
  email: 'your-email@example.com',
  phone: '+233 00 000 0000',
  skills: [
    { name: 'HTML & CSS', level: 90 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 70 },
    { name: 'Python', level: 65 },
    { name: 'MySQL', level: 60 },
  ],
  projects: [
    {
      title: 'Campus Event Finder',
      description: 'A web app that lists upcoming campus events with search and filters.',
      tech: ['React', 'CSS', 'Firebase'],
      link: 'https://github.com/your-username/event-finder',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio built with React to showcase my skills and projects.',
      tech: ['React', 'Vite', 'CSS'],
      link: 'https://github.com/your-username/my-profile',
    },
  ],
  socials: [
    { label: 'GitHub', url: 'https://github.com/your-username' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/your-username' },
  ],
};

export default profile;
