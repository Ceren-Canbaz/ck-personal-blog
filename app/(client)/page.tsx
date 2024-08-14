import Image from "next/image";
import {client} from "@/sanity/lib/client"
import Header from '../components/Header';
import { Post } from "../utils/Interface";
import PostComponent from "../components/PostComponent";
import myPortableTextComponents from "../components/ImageCard";
import { PortableText } from "@portabletext/react";

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
export const revalidate=60;
export default async function Home() {
  const posts: Post[] = await getPosts();
  console.log(posts);

  return (
    <div>
      <Header title="Articles" />
      <div>
        {posts.length > 0 && posts.map((post) => (
          <PostComponent  key={post?._id} post={post} />
          
          
        ))}
      
      </div>
    </div>
  );
}