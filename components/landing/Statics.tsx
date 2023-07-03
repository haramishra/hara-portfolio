function Stats() {
  return (
    <>
      {/* <!-- Testimonials with Stats --> */}
      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* <!-- Grid --> */}
        <div className="lg:grid lg:grid-cols-12 lg:items-center lg:justify-between lg:gap-16">
          <div className="lg:col-span-5 lg:col-start-1">
            {/* <!-- Title --> */}
            <div className="mb-8">
              <h2 className="mb-2 text-3xl font-bold text-gray-800 dark:text-gray-200 lg:text-4xl">
                It's all about speed
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                We provide you with a test account that can be set up in seconds. Our main focus is
                getting responses to you as soon as we can.
              </p>
            </div>
            {/* <!-- End Title --> */}

            {/* <!-- Blockquote --> */}
            <blockquote className="relative">
              <svg
                className="absolute left-0 top-0 h-16 w-16 -translate-x-6 -translate-y-8 transform text-gray-200 dark:text-gray-800"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                  fill="currentColor"
                />
              </svg>

              <div className="relative z-10">
                <p className="text-xl italic text-gray-800 dark:text-white">
                  Amazing people to work with. Very fast and professional partner.
                </p>
              </div>

              <footer className="mt-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Image Description"
                    />
                  </div>
                  <div className="ml-4 grow">
                    <div className="font-semibold text-gray-800 dark:text-gray-200">
                      Josh Grazioso
                    </div>
                    <div className="text-xs text-gray-500">Director Payments & Risk | Airbnb</div>
                  </div>
                </div>
              </footer>
            </blockquote>
            {/* <!-- End Blockquote --> */}
          </div>
          {/* <!-- End Col --> */}

          <div className="mt-10 lg:col-span-6 lg:col-end-13 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              {/* <!-- List --> */}
              <ul className="grid grid-cols-2 divide-x divide-x-2 divide-y divide-y-2 divide-gray-200 overflow-hidden dark:divide-gray-700">
                <li className="-m-0.5 flex flex-col p-4 sm:p-8">
                  <div className="mb-2 flex items-end gap-x-2 text-3xl font-bold text-gray-800 dark:text-gray-200 sm:text-5xl">
                    45k+
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 sm:text-base">
                    users - from new startups to public companies
                  </p>
                </li>

                <li className="-m-0.5 flex flex-col p-4 sm:p-8">
                  <div className="mb-2 flex items-end gap-x-2 text-3xl font-bold text-gray-800 dark:text-gray-200 sm:text-5xl">
                    <svg
                      className="h-4 w-4 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 14.4452C9 14.9504 8.55229 15.36 8 15.36C7.44772 15.36 7 14.9504 7 14.4452V3.38868L1.70711 8.23079C1.31658 8.58806 0.683417 8.58806 0.292893 8.23079C-0.0976311 7.87353 -0.0976311 7.29429 0.292893 6.93703L7.11612 0.694919C7.60427 0.248339 8.39573 0.248341 8.88388 0.694919L15.7071 6.93703C16.0976 7.29429 16.0976 7.87353 15.7071 8.23079C15.3166 8.58806 14.6834 8.58806 14.2929 8.23079L9 3.38868V14.4452Z"
                        fill="currentColor"
                      />
                    </svg>
                    23%
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 sm:text-base">
                    increase in traffic on webpages with Looms
                  </p>
                </li>

                <li className="-m-0.5 flex flex-col p-4 sm:p-8">
                  <div className="mb-2 flex items-end gap-x-2 text-3xl font-bold text-gray-800 dark:text-gray-200 sm:text-5xl">
                    <svg
                      className="h-4 w-4 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 14.4452C9 14.9504 8.55229 15.36 8 15.36C7.44772 15.36 7 14.9504 7 14.4452V3.38868L1.70711 8.23079C1.31658 8.58806 0.683417 8.58806 0.292893 8.23079C-0.0976311 7.87353 -0.0976311 7.29429 0.292893 6.93703L7.11612 0.694919C7.60427 0.248339 8.39573 0.248341 8.88388 0.694919L15.7071 6.93703C16.0976 7.29429 16.0976 7.87353 15.7071 8.23079C15.3166 8.58806 14.6834 8.58806 14.2929 8.23079L9 3.38868V14.4452Z"
                        fill="currentColor"
                      />
                    </svg>
                    9.3%
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 sm:text-base">
                    boost in reply rates across sales outreach
                  </p>
                </li>

                <li className="-m-0.5 flex flex-col p-4 sm:p-8">
                  <div className="mb-2 flex items-end gap-x-2 text-3xl font-bold text-gray-800 dark:text-gray-200 sm:text-5xl">
                    2x
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 sm:text-base">
                    faster than previous Preline versions
                  </p>
                </li>
              </ul>
              {/* <!-- End List --> */}
            </div>
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Testimonials with Stats --> */}
    </>
  )
}

export default Stats
