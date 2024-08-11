import classes from './all-posts.module.css';
import Posts from './Posts';
import { Post } from '@/types';

interface AllPostsProps {
  posts: Post[];
}

function AllPosts({ posts }: AllPostsProps) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <Posts posts={posts} />
    </section>
  );
}

export default AllPosts;
