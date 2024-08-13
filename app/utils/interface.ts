export interface Post{
    title:string;
    slug: {current:string};
    publishedAt:string;
    excerpt:string,
    body:any;///make interface too
    category: Array<Category>
    _id:string,

} 

export interface Category{
    name:String;
    slug: {current:String};
    _id:String;
}