import { Post } from '@/types';
import classes from './featured-posts.module.css';
import Posts from './posts/Posts';

interface FeaturedPostsProps {
  posts: Post[];
}

function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <Posts posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
