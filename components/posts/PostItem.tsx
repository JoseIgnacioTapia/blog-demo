import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/types'

interface PostItemProps {
  post: Post
}

function PostItem({ post }: PostItemProps) {
  const { title, image, excerpt, date, slug } = post

  const formattedDate = new Date(date).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const imagePath = `/images/posts/${slug}/${image}`
  const linkPath = `/posts/${slug}`

  return (
    <li className="shadow-md bg-[#343036] text-center">
      <Link href={linkPath} className="text-[#dfdbe6]">
        <div className="w-full max-h-80 overflow-hidden">
          <Image src={imagePath} alt={title} width={300} height={200} className="object-cover w-full" />
        </div>
        <div className="p-4">
          <h3 className="my-2 text-2xl">{title}</h3>
          <time className="italic text-[#a7a3ae]">{formattedDate}</time>
          <p className="leading-6">{excerpt}</p>
        </div>
      </Link>
    </li>
  )
}

export default PostItem
