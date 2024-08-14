import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Header from '../components/Header';
import { Post } from "../utils/Interface";
import PostComponent from "../components/PostComponent";
import myPortableTextComponents from "../components/ImageCard";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";

async function getPosts() {
  const query = `
    *[_type=="post"]{
      title,
      slug,
      publishedAt,
      categories[]->{_id,slug,title},
      excerpt,
      mainImage {
        asset -> {
          _ref,
          url
        },
        alt
      },
      _id
    }`;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

export default async function Home() {
  const posts: Post[] = await getPosts();

  return (
    <div>
      
      <div>
        {posts.length > 0 && posts.map((post) => (
          <div key={post?._id} style={{ marginBottom: '20px' }}>
            <PostComponent post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
