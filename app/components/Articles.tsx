import React from "react";
import { Link } from "@remix-run/react";
import { BlogArticle } from "~/lib/getProducts";

type Props = {
  blogs: BlogArticle[];
};

const Articles: React.FC<Props> = ({ blogs }) => {
  const [firstBlog, ...otherBlogs] = blogs;

  return (
    <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 mt-[45px] py-12 space-y-[40px]">
      <div className="flex justify-between items-start relative">
        <div>
          <p className="font-normal text-[16px] leading-[100%] mb-1">✍️ Blogs</p>
          <h1 className="text-[40px] font-bold leading-[100%]">Latest Articles</h1>
        </div>
        <div className="absolute right-0 top-0">
          <Link
            to="/"
            className="text-[14px] underline font-normal hover:opacity-80 transition"
          >
            View All
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-[20px]">
        {firstBlog && (
          <div className="w-full lg:w-[800px] h-[450px] relative overflow-hidden rounded-md">
            <img
              src={firstBlog.image?.url || "/placeholder.jpg"}
              alt={firstBlog.image?.altText || firstBlog.title}
              className="w-full h-full object-cover object-center rounded-md"
            />
            <div className="absolute bottom-6 left-6 text-white z-10">
              <p className="text-sm font-medium">{firstBlog.blog.title}</p>
              <h2 className="text-2xl font-semibold mt-1 leading-tight max-w-[90%]">
                {firstBlog.title}
              </h2>
              <p className="text-sm font-light mt-2">
                By {firstBlog.author.name} <span className="mx-2">|</span>
                {new Date(firstBlog.publishedAt).toLocaleDateString()}
              </p>
            </div>
            <div className="absolute inset-0 bg-black/40 rounded-md" />
          </div>
        )}

        <div className="flex flex-col gap-[20px] w-full lg:w-[700px]">
          {otherBlogs.slice(0, 2).map((blog) => (
            <div
        
              className="w-full flex flex-col sm:flex-row rounded-md overflow-hidden"
            >
              <img
                src={blog.image?.url || "/placeholder.jpg"}
                alt={blog.image?.altText || blog.title}
                className="w-full sm:w-[215px] h-[215px] left-[820px] object-cover object-center rounded-md"
              />
              <div className="mt-4 sm:mt-0 sm:ml-4 px-1 gap-[32px] flex flex-col justify-center">
                <p className="text-sm font-medium text-gray-500">{blog.blog.title}</p>
                <h3 className="text-lg font-semibold leading-tight text-black">
                  {blog.title}
                </h3>
                <p className="text-sm font-light mt-1 text-gray-600">
                  By {blog.author.name} <span className="mx-2">|</span>
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
