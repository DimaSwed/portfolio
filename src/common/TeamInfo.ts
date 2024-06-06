interface ITeamInfo {
  id: number
  link: string
  name: string
  position: string
  description: string
  phone: string
  telegram: string
}

export const teamInfo: ITeamInfo[] = [
  {
    id: 1,
    link: '/team_1.jpg',
    name: 'Dmitry Bulankin',
    position: 'Frontend developer',
    description:
      'When we create a project, it will be necessary to briefly describe the essence of the project. At the same time, we will need to leave the meaning for the Overview block.',
    phone: '+79991234567',
    telegram: 'https://t.me/'
  },
  {
    id: 2,
    link: '/team_3.jpg',
    name: 'Irina Ivanova',
    position: 'UI/UX Designer',
    description:
      'When initiating a project, it is important to provide a concise description of its core concept. However, it is also essential to save the detailed explanation for the Overview section.',
    phone: '+79991234567',
    telegram: 'https://t.me/'
  },
  {
    id: 3,
    link: '/team_2.jpg',
    name: 'Petr Petrov',
    position: 'Mentor',
    description:
      'When embarking on a project, it is crucial to offer a brief outline of its fundamental idea. Simultaneously, it is advisable to reserve the in-depth elaboration for the Overview segment of the project.',
    phone: '+79991234567',
    telegram: 'https://t.me/'
  }
]
