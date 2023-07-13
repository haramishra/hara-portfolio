import { LandingDataTypes } from '@/data/landingData'
import HeroSection from './Hero'
import Projects from 'pages/projects'
import ProjectsSection from './Projects'
import Stats from './Statics'
import FeaturePosts from './FeaturedPosts'
import ProjectsV2 from './projectsV2'
import { RevealList } from 'next-reveal'

function Landing(props: { data: LandingDataTypes }) {
  return (
    <>
      <HeroSection data={props.data} />
      <ProjectsSection />

      <RevealList interval={0}>
        <ProjectsV2 />
        <div className="my-6"></div>
        <ProjectsV2 />
        <div className="my-6"></div>
        <ProjectsV2 />
        <div className="my-6"></div>
        <ProjectsV2 />
      </RevealList>

      <Stats />
      <FeaturePosts />
    </>
  )
}

export default Landing
