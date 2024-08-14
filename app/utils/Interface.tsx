export interface Post{
    title:string;
    slug: {current:string};
    publishedAt:string;
    excerpt:string,
    body:any,
    categories: Array<Category>
    _id:string,
    mainImage: {
        asset: {
          _ref: string; // Reference to the image asset
          _type: string; // Type of the asset, usually 'reference'
        };
        alt?: string; // Alternative text for the image
      };

} 

export interface Category{
    title:String;
    slug: {current:String};
    _id:String;
}