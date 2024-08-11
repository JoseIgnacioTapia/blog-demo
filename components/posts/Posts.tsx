import PostItem from './PostItem';
import classes from './posts.module.css';
import { Post } from '@/types';

interface PostsProps {
  posts: Post[];
}

function Posts({ posts }: PostsProps) {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default Posts;
