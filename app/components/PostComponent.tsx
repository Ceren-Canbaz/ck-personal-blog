import React from 'react'
import Link from 'next/link'; // veya 'react-router-dom' kullanıyorsanız Link importunu buna göre yapmalısınız.
import { Post } from '../utils/interface';

interface Props {
  post: Post;
}

const PostComponent = ({ post }:Props) => {
  return (
    <div>
      <Link href={`/post/${post.slug.current}`}>
        <h2>
          {post.title}
        </h2>
        <p>{post?.publishedAt}
        
        </p>
      </Link>
    </div>
  )
}

export default PostComponent;
