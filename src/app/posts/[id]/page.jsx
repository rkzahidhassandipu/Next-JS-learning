
export const getPosts = async (post_id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { id } = await params
 
  // fetch data
  const singlePost = await getPosts(id)
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: singlePost.title,
   description: singlePost.body
  }
}

const SinglePost = async ({params}) => {
    const p = await params;
    const singlePost = await getPosts(p.id)
  return <div>
    singlePost: {p.id}
    <h1>{singlePost.title}</h1>
    <h1>{singlePost.body}</h1>
  </div>
}

export default SinglePost