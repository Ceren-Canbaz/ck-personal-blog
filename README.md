# Personal Blog Project

## Overview

This project is a personal blog site where a writer can share their articles. Built using Next.js, it includes both client and admin sections, with Sanity integration for content management and Tailwind CSS for styling.

## Project Structure

```
my-blog/
├── client/             # Client-side code
│   ├── pages/          # Next.js pages
│   ├── components/     # Reusable components
│   ├── utils/          # Utility functions and types
│   └── public/         # Static assets
├── admin/              # Admin panel code
│   ├── pages/          # Admin pages
│   ├── components/     # Admin components
│   └── utils/          # Admin utility functions and types
├── components/         # Shared components
│   ├── UIComponents/   # UI-specific components
│   └── CommonComponents/ # Common reusable components
├── styles/             # Global styles
│   └── globals.css
├── .gitignore
├── package.json
└── next.config.js
```

## Utilities

### `utils/themeProvider.js`

Defines the `ThemeProvider` component to manage themes across the application using React context.

```jsx
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
```

### `utils/interface.js`

Defines the `Post` interface to structure blog post data.

```typescript
export interface Post{
    title:string;
    slug: {current:string};
    publishedAt:string;
    excerpt:string,
    body:any;///make interface too
    category: Array<Category>
    _id:string,

} 
```

Defines the `Category` interface to structure blog category data.

```typescript
export interface Category{
    name:String;
    slug: {current:String};
    _id:String;
}
```

## Integration

### Using `ThemeProvider`

Wrap your application with the `ThemeProvider` to manage theme settings globally.

```jsx
// client/pages/_app.js
import { ThemeProvider } from '../utils/themeProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
```

### Fetching and Displaying Posts

Fetch blog posts and display them using the `Post` interface.

```jsx
// client/pages/index.js
import { client } from '../utils/sanity';
import { Post } from '../utils/post';
import BlogPost from '../components/BlogPost';

export async function getStaticProps() {
  const query = '*[_type == "post"]';
  const posts: Post[] = await client.fetch(query);

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div>
      <h1>My Blog</h1>
      <div>
        {posts.map((post) => (
          <BlogPost key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
```

### Blog Post Component

Create a component to render individual blog posts.

```jsx
// client/components/BlogPost.js
import React from 'react';
import { Post } from '../utils/post';

export default function BlogPost({ post }: { post: Post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
```

## Running the Project

To get started with the project, follow these steps:

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Run the Development Server**

   ```bash
   npm run dev
   ```

3. **Open in Browser**

   Visit `http://localhost:3000` to see the application in action.
