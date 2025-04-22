import React from "react";
import { Link } from "@remix-run/react";
import { BlogArticle } from "~/lib/getProducts";

type Props = {
  blogs: BlogArticle[];
};

const Articles: React.FC<Props> = ({ blogs }) => {
  const [firstBlog, ...otherBlogs] = blogs;

  return (
    <div className="w-full max-w-[1530px] mx-auto mt-[45px] px-4 py-6 space-y-[40px]">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-normal text-[16px] leading-[100%] mb-1">✍️ Blogs</p>
          <h1 className="text-[40px] font-medium leading-[100%]">Latest Articles</h1>
        </div>
        <Link
          to={``}
          className="text-[14px] underline font-normal hover:opacity-80 transition"
        >
          View All
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-[20px]">
        {firstBlog && (
          <div
            className="w-full lg:w-[880px] h-[450px] relative overflow-hidden rounded-md"
          >
            <img
              src={firstBlog.image?.url || "/placeholder.jpg"}
              alt={firstBlog.image?.altText || firstBlog.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-6 left-6 text-white gap-[32px]">
              <p className="text-sm font-medium">{firstBlog.blog.title}</p>
              <h2 className="text-2xl font-semibold mt-1 leading-tight max-w-[90%]">
                {firstBlog.title}
              </h2>
              <p className="text-sm font-light mt-2">
                By {firstBlog.author.name} <span className="mx-2">|</span>{" "}
                {new Date(firstBlog.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-[20px] w-full lg:w-[580px]">
          {otherBlogs.map((blog) => (
            <div
      
 
              className="h-[215px] relative overflow-hidden rounded-md"
            >
              <img
                src={blog.image?.url || "/placeholder.jpg"}
                alt={blog.image?.altText || blog.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">{blog.blog.title}</p>
                <h3 className="text-lg font-semibold leading-tight max-w-[90%]">
                  {blog.title}
                </h3>
                <p className="text-sm font-light mt-1">
                  By {blog.author.name} <span className="mx-2">|</span>{" "}
                  {new Date(blog.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
