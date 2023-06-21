import { LandingDataTypes } from '@/data/landingData'
import HeroSection from './Hero'
import Projects from 'pages/projects'
import ProjectsSection from './Projects'
import Stats from './Statics'
import FeaturePosts from './FeaturedPosts'

function Landing(props: { data: LandingDataTypes }) {
  return (
    <>
      <HeroSection data={props.data} />
      <ProjectsSection />
      <Stats />
      <FeaturePosts />
    </>
  )
}

export default Landing
