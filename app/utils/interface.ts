export interface Post{
    title:string;
    slug: {current:string};
    publishedAt:string;
    excerpt:string,
    body:any;///make interface too
    category: Arrat<Category>
    _id:String,

} 

export interface Category{
    name:String;
    slug: {current:String};
    _id:String;
}