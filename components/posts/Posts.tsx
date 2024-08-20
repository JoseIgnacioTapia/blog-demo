import PostItem from './PostItem'
import { Post } from '@/types'

interface PostsProps {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
  return (
    <ul className="grid content-center list-none m-0 p-0 grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-6">
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  )
}
