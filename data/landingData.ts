export type LandingDataTypes = {
  title: string
  subtitle: string
  actionMain: { title: string; url: string }
  actionSub: { title: string; url: string }
}

const landginData: LandingDataTypes = {
  title: 'Make Your Dream Project Into Reality',
  subtitle: 'Hi! I am Hara, I am a web developer.',
  actionMain: { title: 'Get In Touch', url: '#' },
  //explore project
  actionSub: { title: 'Checkout my projects', url: '#' },
}

export default landginData
