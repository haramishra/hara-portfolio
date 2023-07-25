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

      <RevealList interval={0} className="gap-6">
        <div className="load-hidden">
          <ProjectsV2 />
        </div>
        <div className="load-hidden">
          <ProjectsV2 />
        </div>
        <div className="load-hidden">
          <ProjectsV2 />
        </div>
        <div className="load-hidden">
          <ProjectsV2 />
        </div>
        <div className="load-hidden">
          <ProjectsV2 />
        </div>
        <div className="load-hidden">
          <ProjectsV2 />
        </div>
      </RevealList>

      {/* <Stats /> */}
      <FeaturePosts />
    </>
  )
}

export default Landing
