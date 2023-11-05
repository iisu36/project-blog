import React from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'

import BlogHero from '@/components/BlogHero'

import styles from './postSlug.module.css'
import { loadBlogPost } from '@/helpers/file-helpers'
import { BLOG_TITLE } from '@/constants'
import CodeSnippet from '@/components/CodeSnippet'
import DivisionGroupsDemo from '@/components/DivisionGroupsDemo'
import CircularColorsDemo from '@/components/CircularColorsDemo'

export const generateMetadata = async ({ params }) => {
  const { frontmatter } = await loadBlogPost(params.postSlug)

  return {
    title: `${frontmatter.title} · ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  }
}

async function BlogPost({ params }) {
  const { frontmatter, content } = await loadBlogPost(params.postSlug)
  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote
          source={content}
          components={{
            pre: CodeSnippet,
            DivisionGroupsDemo,
            CircularColorsDemo,
          }}
        />
      </div>
    </article>
  )
}

export default BlogPost
