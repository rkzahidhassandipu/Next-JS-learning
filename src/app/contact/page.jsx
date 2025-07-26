"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Contact = ({}) => {
  const router = useRouter();
  const isLoggedIn = true;

  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/contact/address");
    } else {
      router.push("/");
    }
  };

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

  return (
    <div>
      <p className="text-2xl">Contact</p>
      <p>
        <Link href="/contact/address">Address Page</Link>
      </p>
      <button type="button" onClick={handleNavigation}>
        Address Page
      </button>

      {
        data.map((d) => {
            return(
                <div key={d.id}>
                    <Link href={`/contact/${d.id}`}>{d.name}</Link>
                </div>
            )
        })
      }
    </div>
  );
};

export default Contact;
