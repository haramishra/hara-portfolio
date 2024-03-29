function FeaturePosts() {
  return (
    <>
      {/* <!-- Card Blog --> */}
      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* <!-- Title --> */}
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
          <h2 className="text-2xl font-bold dark:text-white md:text-4xl md:leading-tight">
            Insights
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Stay in the know with insights from industry experts.
          </p>
        </div>
        {/* <!-- End Title --> */}

        {/* <!-- Grid --> */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* <!-- Card --> */}
          <a className="group overflow-hidden rounded-xl" href="#">
            <div className="relative overflow-hidden rounded-xl pt-[50%] sm:pt-[70%]">
              <img
                className="absolute left-0 top-0 h-full w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
                alt="Description"
              />
              <span className="absolute right-0 top-0 rounded-bl-xl rounded-tr-xl bg-gray-800 px-3 py-1.5 text-xs font-medium text-white dark:bg-gray-900">
                Sponsored
              </span>
            </div>

            <div className="mt-7">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                Studio by Preline
              </h3>
              <p className="mt-3 text-gray-800 dark:text-gray-200">
                Produce professional, reliable streams easily leveraging Preline's innovative
                broadcast studio
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1.5 font-medium text-blue-600 decoration-2 group-hover:underline">
                Read more
                <svg className="h-2.5 w-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </p>
            </div>
          </a>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <a className="group overflow-hidden rounded-xl" href="#">
            <div className="relative overflow-hidden rounded-xl pt-[50%] sm:pt-[70%]">
              <img
                className="absolute left-0 top-0 h-full w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Description"
              />
            </div>

            <div className="mt-7">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                Onsite
              </h3>
              <p className="mt-3 text-gray-800 dark:text-gray-200">
                Optimize your in-person experience with best-in-className capabilities like badge
                printing and lead retrieval
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1.5 font-medium text-blue-600 decoration-2 group-hover:underline">
                Read more
                <svg className="h-2.5 w-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </p>
            </div>
          </a>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <a
            className="group relative flex min-h-[15rem] w-full flex-col rounded-xl bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80')] bg-cover bg-center transition hover:shadow-lg"
            href="#"
          >
            <div className="flex-auto p-4 md:p-6">
              <h3 className="text-xl text-white/[.9] group-hover:text-white">
                <span className="font-bold">Preline</span> Press publishes books about economic and
                technological advancement.
              </h3>
            </div>
            <div className="p-4 pt-0 md:p-6">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
                Visit the site
                <svg className="h-2.5 w-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </a>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Card Blog --> */}
    </>
  )
}

export default FeaturePosts
