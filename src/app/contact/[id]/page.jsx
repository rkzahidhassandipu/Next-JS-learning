 const data = [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "admin",
      created_at: "2025-07-20T12:00:00Z",
      status: "active",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "user",
      created_at: "2025-07-15T08:30:00Z",
      status: "inactive",
    },
    {
      id: "3",
      name: "Alex Kim",
      email: "alex.kim@example.com",
      role: "member",
      created_at: "2025-07-10T09:45:00Z",
      status: "active",
    },
  ];
const Page = ({params}) => {
    const id = params.id
    const singleData = data.find((d) => d.id == id)
  return <div>
    <h1>ServiceDetails</h1>
    <p>ID: {singleData?.id}</p>
    <p>Name: {singleData?.name}</p>
    <p>Email: {singleData?.email}</p>
  </div>
}

export default Page