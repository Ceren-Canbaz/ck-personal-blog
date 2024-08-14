import React from "react";
import Image from 'next/image';
import { urlForImage } from "@/sanity/lib/image";
const  myPortableTextComponents = {
    
    types: {
        image: ({ value }:any) => (
          <Image 
            src={urlForImage(value).url()} 
            alt="Post" 
            width={700} 
            height={700} 
          />
        ),
      },
  };
  export default myPortableTextComponents