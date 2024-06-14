import { NavLink } from "react-router-dom";
 
export const BlogDetails = ({post}) => {

    return(
        <div className="max-w-3xl mx-auto w-11/12">
            <NavLink to={`/blog/${post.id}`}
            className="font-bold text-lg cursor-pointer hover:underline ">{post.title}</NavLink>
            <p className="text-[12px]">
                By <span className="italic">{post.author}</span> on <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}
                 className="underline font-bold cursor-pointer">{post.category}</NavLink>
            </p>
            <p className="text-[12px]">Posted On {post.date}</p>

            <p className="mt-[10px] text-[15px]">{post.content}</p>

            <div className="flex gap-3">
                {post.tags.map((tag, index) => <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`} key={index} 
                className="text-blue-500 underline font-bold text-[11px]">
                 #{tag}</NavLink>)}
            </div>
        </div>
    );
}

