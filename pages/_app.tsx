import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'
// import '@/css/docsearch.css' // Uncomment if using algolia docsearch
// import '@docsearch/css' // Uncomment if using algolia docsearch

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import { Analytics } from 'pliny/analytics'
import { SearchProvider } from 'pliny/search'
import LayoutWrapper from '@/components/LayoutWrapper'
import { useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { ReactLenis, Lenis } from '@studio-freight/react-lenis'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('preline')
  }, [])
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          ease: function easeOutBack(x: number): number {
            const c1 = 1.70158
            const c3 = c1 + 1

            return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2)
          },
          smoothWheel: true,
        }}
      >
        <ParallaxProvider>
          <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
          </Head>
          <Analytics analyticsConfig={siteMetadata.analytics} />
          <LayoutWrapper>
            <SearchProvider searchConfig={siteMetadata.search}>
              <Component {...pageProps} />
            </SearchProvider>
          </LayoutWrapper>
        </ParallaxProvider>
      </ReactLenis>
    </ThemeProvider>
  )
}
