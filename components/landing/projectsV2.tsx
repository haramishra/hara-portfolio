import { RevealList } from 'next-reveal'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

function Desktop(props: any) {
  return (
    <Parallax easing="easeInOutCirc" {...props}>
      <figure className="relative z-[1] ml-auto h-auto w-[40rem] max-w-full rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
        <div className="relative flex max-w-[40rem] items-center rounded-t-lg bg-gray-800 px-24 py-2 dark:bg-gray-700">
          <div className="absolute left-4 top-2/4 flex -translate-y-1 space-x-1">
            <span className="h-2 w-2 rounded-full bg-red-600 dark:bg-red-600"></span>
            <span className="h-2 w-2 rounded-full bg-yellow-600 dark:bg-yellow-600"></span>
            <span className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-600"></span>
          </div>
          <div className="flex h-full w-full items-center justify-center rounded-sm bg-gray-700 text-[.25rem] text-gray-400 dark:bg-gray-600 dark:text-gray-400 sm:text-[.5rem]">
            www.preline.com
          </div>
        </div>

        <div className="relative rounded-b-lg bg-gray-800">
          <Image
            className="h-auto max-w-full rounded-b-lg"
            src="/static/images/projects/mindly/Feed-dark.png"
            height={1618}
            width={1010}
            alt="Image Description"
          />
        </div>
      </figure>
    </Parallax>
  )
}

function Mobile(props: any) {
  return (
    <Parallax {...props}>
      <figure className="mx-auto h-auto w-60 max-w-full">
        <div className="rounded-3xl bg-gray-800 p-1.5 shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-600 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
          <Image
            className="h-auto max-w-full rounded-[1.25rem]"
            src="/static/images/projects/mindly/landingMobile.png"
            alt="Image Description"
            height={280}
            width={560}
          />
        </div>
      </figure>
    </Parallax>
  )
}

function ProjectsV2() {
  return (
    <section
      className={`relative overflow-hidden before:absolute before:left-1/2 before:top-0 before:-z-[1] before:h-full before:w-full before:-translate-x-1/2 before:transform before:bg-top before:bg-no-repeat`}
    >
      <RevealList
        interval={100}
        delay={500}
        // viewOffset={{ top: 60, right: 0, bottom: 10, left: 0 }}
      >
        {/* Text section */}
        <div className="flex flex-col gap-12">
          {/* number */}
          <div className="block text-3xl font-bold opacity-60 md:text-4xl lg:text-6xl">01</div>

          <div className="space-y-6">
            {/* title */}
            <h2 className="block text-3xl font-bold md:text-4xl lg:text-6xl">
              This is the placeholder title.
            </h2>

            {/* Tags */}
            <div className="flex items-center gap-3 text-2xl font-medium opacity-95">
              <span>Next js</span>
              <span className="inline-block h-2 w-2 rounded-full bg-gray-900 dark:bg-gray-200"></span>
              <span>Appwrite</span>
              <span className="inline-block h-2 w-2 rounded-full bg-gray-900 dark:bg-gray-200"></span>
              <span>tailwind</span>
              <span className="inline-block h-2 w-2 rounded-full bg-gray-900 dark:bg-gray-200"></span>
              <span>redix ui</span>
            </div>

            {/* Description */}
            <p className="text-3xl font-normal opacity-90">
              Web app project to give workplace insights using indoor localization, voice and
              schedule.
            </p>
          </div>
        </div>

        {/* Images section */}
        <div className="mt-20 grid grid-cols-2 gap-8">
          <Desktop speed={8} />
          <Desktop speed={5} />
          <Mobile speed={8} />
          <Desktop speed={6} />
        </div>
      </RevealList>
    </section>
  )
}

export default ProjectsV2
