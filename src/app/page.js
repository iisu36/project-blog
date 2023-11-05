import React from 'react'

import BlogSummaryCard from '@/components/BlogSummaryCard'
import { getBlogPostList } from '@/helpers/file-helpers'

import styles from './homepage.module.css'

async function Home() {
  const blogPosts = await getBlogPostList()
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>
      {blogPosts.map((blog) => {
        return (
          <BlogSummaryCard
            key={`${blog.slug}-${blog.publishedOn}`}
            slug={blog.slug}
            title={blog.title}
            abstract={blog.abstract}
            publishedOn={blog.publishedOn}
          />
        )
      })}
    </div>
  )
}

export default Home
