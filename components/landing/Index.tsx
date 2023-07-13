import { LandingDataTypes } from '@/data/landingData'
import HeroSection from './Hero'
import Projects from 'pages/projects'
import ProjectsSection from './Projects'
import Stats from './Statics'
import FeaturePosts from './FeaturedPosts'
import ProjectsV2 from './projectsV2'

function Landing(props: { data: LandingDataTypes }) {
  return (
    <>
      <HeroSection data={props.data} />
      <ProjectsSection />
      <div className='space-y-16'>
        <ProjectsV2 />
        {/* <hr className="my-12" /> */}
        <ProjectsV2 />
        {/* <hr className="my-12" /> */}
        <ProjectsV2 />
        {/* <hr className="my-12" /> */}
        <ProjectsV2 />
      </div>
      <Stats />
      <FeaturePosts />
    </>
  )
}

export default Landing
