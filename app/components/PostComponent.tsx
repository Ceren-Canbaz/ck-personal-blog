import React from 'react';
import Link from 'next/link';
import { Poppins, Merriweather } from 'next/font/google';
import { Post } from '../utils/Interface';

interface Props {
  post: Post;
}

// Load fonts
const titleFont = Poppins({ weight: "400", subsets: ["latin"] });
const dateFont = Merriweather({ weight: "400", subsets: ["latin"] });

const PostComponent = ({ post }: Props) => {
  return (
    <div className='mb-8 p-4 border border-gray-200 rounded-md shadow-md shadow-pink-300 hover:shadow-lg hover:bg-pink-50 transition-colors'>
      <Link href={`/posts/${post?.slug?.current}`}>
        <h2 className={`${titleFont.className} text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2 hover:text-pink-600 transition-colors`}>
          {post?.title}
        </h2>
        <p className='text-gray-700 dark:text-gray-300 mb-4'>
          {post?.excerpt}
        </p>
        <p className={`${dateFont.className} text-sm text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors`}>
          {new Date(post?.publishedAt).toDateString()}
        </p>
        {/* Categories */}
        <div className="flex flex-wrap gap-2 pt-8">
              {post?.categories.map((category, index) => (
                <span key={index} className=" inline-block px-3 py-1 text-sm font-medium text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 rounded-full">
                  {category.title}
                </span>
              ))}
            </div>
      </Link>
    </div>
  );
};

export default PostComponent;
