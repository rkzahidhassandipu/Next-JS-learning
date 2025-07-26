import Link from "next/link";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export const metadata = {
  title: "All posts ",
  description: "Trying to learn NextJS",
};

const Page = async ({}) => {
  const posts = await getPosts();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {posts.map((singlePost) => (
        <div
          key={singlePost.id}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            {singlePost.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{singlePost.body}</p>
          <Link className="text-blue-600" href={`/posts/${singlePost.id}`}>Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Page;
