import { LandingDataTypes } from '@/data/landingData'
import Link from 'next/link'

function HeroSection(props: { data: LandingDataTypes }) {
  const { data } = props
  return (
    <>
      {/* <!-- Hero --> */}
      <div
        className={`relative overflow-hidden before:absolute before:left-1/2 before:top-0 before:-z-[1] before:h-full before:w-full before:-translate-x-1/2 before:transform before:bg-[url("")] before:bg-top before:bg-no-repeat dark:before:bg-[url('')]`}
      >
        <div className="mx-auto max-w-[85rem] px-4 pb-10 pt-24 sm:px-6 lg:px-8">
          {/* <!-- Announcement Banner --> */}
          <div className="flex justify-center">
            <Link
              className="inline-flex items-center gap-x-2 rounded-full border border-gray-200 bg-white p-2 px-3 text-xs text-gray-600 transition hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600"
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
          <div className="mx-auto mt-5 max-w-3xl text-center">
            <h1 className="block text-4xl font-bold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-7xl">
              {data.title}
            </h1>
          </div>
          {/* <!-- End Title --> */}

          <div className="mx-auto mt-5 max-w-3xl text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400">{data.subtitle}</p>
          </div>

          {/* <!-- Buttons --> */}
          <div className="mt-8 grid w-full gap-3 sm:inline-flex sm:justify-center">
            <Link
              href={data.actionMain.url}
              className="inline-flex items-center justify-center gap-x-3 rounded-full border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 px-4 py-3 text-center text-sm font-medium text-white hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
            >
              {data.actionMain.title}
            </Link>
          </div>
          {/* <!-- End Buttons --> */}
        </div>
      </div>
      {/* <!-- End Hero --> */}
    </>
  )
}

export default HeroSection
