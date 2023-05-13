import { LandingDataTypes } from '@/data/landingData'
import HeroSection from './Hero'

function Landing(props: { data: LandingDataTypes }) {
  return (
    <>
      <HeroSection data={props.data} />
    </>
  )
}

export default Landing
