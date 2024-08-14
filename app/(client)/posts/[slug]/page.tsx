import Header from "@/app/components/Header";
import { Post } from "@/app/utils/Interface";
import { client } from "@/sanity/lib/client";
import { urlFor, urlForImage } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { Merriweather } from "next/font/google";
import Link from "next/link"; // `Link` importu doğru
import React from "react";
import Image from 'next/image';
import myPortableTextComponents from "@/app/components/ImageCard";

const dateFont = Merriweather({ weight: "400", subsets: ["latin"] });

interface Params {
  params: {
    slug: string;
  }
}

async function getPost(slug: string) {
  const query = `
*[_type == "post" && slug.current == "${slug}"][0] {
  _id,
  slug,
  title,
  excerpt,
  publishedAt,
  mainImage {
    asset -> {
      _ref,
      url
    },
    alt
  },
  categories[] -> {
    _id,
    slug,
    title
  },
  body
}
`;

  const post = await client.fetch(query);
  return post;
}

const Page = async ({ params }: Params) => {
  const post: Post = await getPost(params.slug);

  return (
    
    <div>
      <Header title={post.title} />
      <div className="text-center">
        <span className={`${dateFont.className} text-sm text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors`}>
          {new Date(post.publishedAt).toDateString()}
        </span>
        <div className="mt-5 flex flex-wrap gap-2">
          {post?.categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug.current}`}>
              <span className="inline-block px-3 py-1 text-sm font-medium text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 rounded-full">
                {category.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className={richTextStyles}
      >
<PortableText
      value={post.body}
      components={myPortableTextComponents}
      />
      </div>
      
    </div>
  );
}

export default Page;


  
  
  
const richTextStyles = `
  mt-14
  text-justify
  max-w-2xl
  prose-heading:my-5
  prose-heading:text-2xl
  prose-p:mb-5
  prose-p:leading-7
  m-auto
  prose-li:list-disc
  prose-li:leading-7
  prose-li:ml-4
`;
