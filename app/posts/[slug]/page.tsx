import PostContent from '@/components/posts/post-detail/PostContent';
import { getPostData } from '@/lib/posts-util';

function PostDetailPage({ params }: { params: { slug: string } }) {
  const postContent = getPostData(params.slug + '.md');
  console.log('post obtenido desde PostDetailPage', postContent);

  if (!postContent) {
    // Se puede redirigir, mostrar un mensaje de error o manejar el caso de que no se encuentre el post
    return <p>Post not found.</p>;
  }

  return <PostContent post={postContent} />;
}

export default PostDetailPage;
