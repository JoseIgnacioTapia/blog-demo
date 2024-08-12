import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/types';

const postsDirectory = path.join(process.cwd(), 'posts');

function getPostData(fileName: string): Post | null {
  try {
    const filePath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const postSlug = fileName.replace(/\.md$/, '');

    const postData: Post = {
      slug: postSlug,
      title: data.title as string,
      image: data.image as string,
      excerpt: data.excerpt as string,
      date: data.date as string,
      content: content as string,
      isFeatured: data.isFeatured || false,
    };

    return postData;
  } catch (error) {
    console.error(`Error reading or processing file: ${fileName}`, error);
    return null;
  }
}

export function getAllPosts(): Post[] {
  try {
    const postFiles = fs.readdirSync(postsDirectory);

    const allPosts = postFiles
      .map((postFile) => getPostData(postFile))
      .filter((post): post is Post => post !== null);

    const sortedPosts = allPosts.sort((postA, postB) =>
      postA.date > postB.date ? -1 : 1
    );

    return sortedPosts;
  } catch (error) {
    console.error('Error retrieving posts:', error);
    return [];
  }
}

export function getFeaturedPosts(): Post[] {
  try {
    const allPosts = getAllPosts();

    const featuredPosts = allPosts.filter((post) => post.isFeatured);

    return featuredPosts;
  } catch (error) {
    console.error('Error filtering featured posts:', error);
    return [];
  }
}
