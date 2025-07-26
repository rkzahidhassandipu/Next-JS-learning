export const dynamic = "force-dynamic"
const Page = async ({}) => {
  const res = await fetch("https://nextjs-phi-henna-lfv4snidt7.vercel.app/api/items", {
    cache: "force-cache"
  })
  const data = await res.json();
  return <div>
    {JSON.stringify(data)}
  </div>
}

export default Page