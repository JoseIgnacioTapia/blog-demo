import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import PostHeader from './PostHeader'
import classes from './post-content.module.css'
import { Post } from '@/types'
import Link from 'next/link'
import PostFooter from './PostFooter'
import { ImgHTMLAttributes } from 'react'

interface PostContentProps {
  post: Post
}

interface CustomImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

function PostContent({ post }: PostContentProps) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`

  const customRenderers = {
    img({ src, alt }: CustomImageProps) {
      return (
        <Link href={`/images/posts/${post.slug}/${src}`} target="_blank">
          <Image
            src={`/images/posts/${post.slug}/${src}`}
            alt={alt ?? ''}
            width={600}
            height={300}
            className={classes.hoverimage}
          />
        </Link>
      )
    },
    // p(paragraph: any) {
    //   const { node } = paragraph;

    //   if (node.children[0].type === 'image') {
    //     const image = node.children[0];

    //     return (
    //       <div className={classes.image}>
    //         <Image
    //           src={`/images/posts/${post.slug}/${image.url}`} // Because image is inside paragraph so use url instead src
    //           alt={image.alt}
    //           width={600}
    //           height={300}
    //         />
    //       </div>
    //     );
    //   }

    //   return <p>{paragraph.children}</p>;
    // },

    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter style={atomDark} language={match[1]} PreTag="div" {...props}>
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }
  }

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} author={post.author} />
      <p>{post.readingTime}</p>
      <ReactMarkdown className={classes.markdown} components={customRenderers}>
        {post.content}
      </ReactMarkdown>
      <PostFooter tags={post.tags} />
    </article>
  )
}

export default PostContent
