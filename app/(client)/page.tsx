import Image from "next/image";
import {client} from "@/sanity/lib/client"
import Header from '../components/Header';

async function getPosts() {
  const query = `
    *[_type=="post"]{
  title,
  slug,
  publishedAt,
  categories,
  _id
}
  `;
  const data = await client.fetch(query);
  return data;
  
  
}

export default async function Home() {
  const posts: Post[] = await getPosts();
  console.log(posts);

  return (
    <div>
      <Header title="Articles" />
      <div>
        {posts.length > 0 && posts.map((post) => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.publishedAt}</p>
            <p>{post.categories.map(category => category.title).join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}