import Hero from '@/components/Hero';
import FeaturedPosts from '@/components/FeaturedPosts';
import { getFeaturedPosts } from '@/lib/posts-util';

export default function Home() {
  const featuredPosts = getFeaturedPosts();

  return (
    <>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  );
}
