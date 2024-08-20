import Posts from './Posts'
import { Post } from '@/types'

interface AllPostsProps {
  posts: Post[]
}

function AllPosts({ posts }: AllPostsProps) {
  return (
    <section className="w-[90%] max-w-[60rem] mx-auto my-8">
      <h1 className="text-3xl md:text-6xl text-center">All Posts</h1>
      <Posts posts={posts} />
    </section>
  )
}

export default AllPosts
