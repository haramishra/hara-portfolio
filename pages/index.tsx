import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { NewsletterForm } from 'pliny/ui/NewsletterForm'
import { allBlogs } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'
import Landing from '@/components/landing/Index'
import landginData from '@/data/landingData'
import styles from './index.module.css'
import clsx from 'clsx'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useEffect } from 'react'
import { Router } from 'next/router'

const MAX_DISPLAY = 5

export const getStaticProps = async () => {
  const sortedPosts = sortedBlogPost(allBlogs) as Blog[]
  const posts = allCoreContent(sortedPosts)

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-8">
        <div
          className={clsx(
            'absolute inset-0 bottom-10 -z-30 h-screen bg-slate-50 bg-bottom bg-no-repeat dark:bg-[#0B1120]',
            styles.beams
          )}
        >
          {/* <div
            className="bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] absolute inset-0 bg-[bottom_1px_center] dark:border-b dark:border-slate-100/5 dark:bg-bottom"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent, black)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
            }}
          ></div> */}
        </div>
      </div>
      <Landing data={landginData} />
    </>
  )
}
