import { RevealList } from 'next-reveal'

function ProjectsSection() {
  return (
    <>
      {/* <!-- Masonry Cards --> */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* <!-- Grid --> */}
        <div className="">
          <RevealList
            interval={60}
            delay={1000}
            duration={1000}
            useDelay='onload'
            className=" grid gap-6 sm:grid-cols-12"
          >
            <div className="load-hidden col-span-12 sm:col-span-7  sm:self-end md:col-span-8 lg:col-span-5 lg:col-start-3">
              {/* <!-- Card --> */}
              <a className="group relative block overflow-hidden rounded-xl" href="#">
                <div className="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden rounded-xl">
                  <img
                    className="w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3481&q=80"
                    alt="Image Description"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                  <div className="rounded-lg bg-white p-4 text-sm font-bold text-gray-800 dark:bg-gray-800 dark:text-gray-200 md:text-xl">
                    Workplace personalities
                  </div>
                </div>
              </a>
              {/* <!-- End Card --> */}
            </div>
            {/* <!-- End Col --> */}

            <div className="load-hidden col-span-12 sm:col-span-5  sm:self-end md:col-span-4 lg:col-span-3">
              {/* <!-- Card --> */}
              <a className="group relative block overflow-hidden rounded-xl" href="#">
                <div className="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden rounded-xl">
                  <img
                    className="w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    alt="Image Description"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                  <div className="rounded-lg bg-white p-4 text-sm font-bold text-gray-800 dark:bg-gray-800 dark:text-gray-200 md:text-xl">
                    Women in engineering
                  </div>
                </div>
              </a>
              {/* <!-- End Card --> */}
            </div>
            {/* <!-- End Col --> */}

            <div className="load-hidden col-span-12 md:col-span-4 ">
              {/* <!-- Card --> */}
              <a className="group relative block overflow-hidden rounded-xl" href="#">
                <div className="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden rounded-xl">
                  <img
                    className="w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="Image Description"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                  <div className="rounded-lg bg-white p-4 text-sm font-bold text-gray-800 dark:bg-gray-800 dark:text-gray-200 md:text-xl">
                    Pride 2021
                  </div>
                </div>
              </a>
              {/* <!-- End Card --> */}
            </div>
            {/* <!-- End Col --> */}

            <div className="load-hidden col-span-12 sm:col-span-6 md:col-span-4 ">
              {/* <!-- Card --> */}
              <a className="group relative block overflow-hidden rounded-xl" href="#">
                <div className="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden rounded-xl">
                  <img
                    className="w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1598929438701-ef29ab0bb61a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
                    alt="Image Description"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                  <div className="rounded-lg bg-white p-4 text-sm font-bold text-gray-800 dark:bg-gray-800 dark:text-gray-200 md:text-xl">
                    Data at Preline
                  </div>
                </div>
              </a>
              {/* <!-- End Card --> */}
            </div>
            {/* <!-- End Col --> */}

            <div className="load-hidden col-span-12 sm:col-span-6 md:col-span-4 ">
              {/* <!-- Card --> */}
              <a className="group relative block overflow-hidden rounded-xl" href="#">
                <div className="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden rounded-xl">
                  <img
                    className="w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1019&q=80"
                    alt="Image Description"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                  <div className="rounded-lg bg-white p-4 text-sm font-bold text-gray-800 dark:bg-gray-800 dark:text-gray-200 md:text-xl">
                    Empowered management
                  </div>
                </div>
              </a>
              {/* <!-- End Card --> */}
            </div>
            {/* <!-- End Col --> */}
          </RevealList>
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Masonry Cards --></> ); */}
    </>
  )
}

export default ProjectsSection
