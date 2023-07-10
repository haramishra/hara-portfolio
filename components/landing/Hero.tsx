import { LandingDataTypes } from '@/data/landingData'
import { RevealList } from 'next-reveal'
import Link from 'next/link'
import BgImageDark from '../../public/static/images/hero-bg-dark.svg'
import BgImageLight from '../../public/static/images/hero-bg-light.svg'
import Image from 'next/image'
import { useTheme } from 'next-themes'
// import Image from '@/components/Image'

function HeroSection(props: { data: LandingDataTypes }) {
  const { data } = props
  const { theme } = useTheme()
  return (
    <>
      {/* <!-- Hero --> */}
      <div
        className={`relative overflow-hidden before:absolute before:left-1/2 before:top-0 before:-z-[1] before:h-full before:w-full before:-translate-x-1/2 before:transform before:bg-top before:bg-no-repeat`}
      >
        <div className="mx-auto max-w-[85rem] px-4 pb-10 pt-24 sm:px-6 lg:px-8">
          {/* <div className="absolute inset-0 flex items-center justify-center">
            {theme === 'dark' ? <BgImageDark /> : <BgImageLight />}
          </div> */}
          {/* <!-- Announcement Banner --> */}
          <RevealList
            // rotate={{ x: 12, y: 40, z: 0 }}
            origin="top"
            delay={10}
            interval={50}
            duration={1000}
            opacity={0}
            distance="100px"
            reset={false}
            viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
          >
            <div className="load-hidden flex justify-center ">
              <Link
                className="inline-flex items-center gap-x-2 rounded-full border border-gray-200 bg-white p-2 px-3 text-xs text-gray-600 backdrop-blur-lg transition hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600"
                href={data.actionSub.url}
              >
                {data.actionSub.title}
                <span className="flex items-center gap-x-1">
                  <span className="border-l border-gray-200 pl-2 text-blue-600 dark:text-blue-500">
                    Explore
                  </span>
                  <svg
                    className="h-2.5 w-2.5 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
            {/* <!-- End Announcement Banner --> */}

            {/* <!-- Title --> */}

            <div className="load-hidden mx-auto mt-5 max-w-3xl text-center ">
              <h1 className="block text-4xl font-bold  md:text-5xl lg:text-7xl">
                {data.title}
              </h1>
            </div>

            {/* <!-- End Title --> */}

            <div className="load-hidden mx-auto mt-5 max-w-3xl text-center ">
              <p className="text-lg text-gray-600 dark:text-gray-400">{data.subtitle}</p>
            </div>

            {/* <!-- Buttons --> */}
            <div className="load-hidden mt-8 grid w-full gap-3 sm:inline-flex sm:justify-center ">
              <Link
                href={data.actionMain.url}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg p-4 px-5 py-3 font-medium text-indigo-600 "
              >
                <span className="ease absolute left-0 top-0 -ml-3 -mt-10 h-40 w-40 rounded-full bg-red-500 blur-md transition-all duration-700"></span>
                <span className="ease absolute inset-0 h-full w-full transition duration-700 group-hover:rotate-180">
                  <span className="absolute bottom-0 left-0 -ml-10 h-24 w-24 rounded-full bg-purple-500 blur-md"></span>
                  <span className="absolute bottom-0 right-0 -mr-10 h-24 w-24 rounded-full bg-pink-500 blur-md"></span>
                </span>
                <span className="relative text-white">{data.actionMain.title}</span>
              </Link>
            </div>
            {/* <!-- End Buttons --> */}
          </RevealList>
        </div>
      </div>
      {/* <!-- End Hero --> */}
    </>
  )
}

export default HeroSection
