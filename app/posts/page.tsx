import AllPosts from '@/components/posts/AllPosts';
import { getAllPosts } from '@/lib/posts-util';

function AllPostsPage() {
  const allPosts = getAllPosts();

  return <AllPosts posts={allPosts} />;
}

export default AllPostsPage;
