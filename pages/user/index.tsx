import { useRouter } from "next/router"
import Layout from "../../components/Layout"

interface UsersProps {
  dataUsers: Array<any>
}

export default function Users(props: UsersProps) {
  const { dataUsers } = props
  const router = useRouter()

  console.log(dataUsers)
  return (
    <Layout pageTitle="User">
      <h2>User Page</h2>
      {dataUsers.map((user) => {
        return (
          <div key={user.id} onClick={() => router.push(`/user/${user.id}`)}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const dataUsers = await res.json()
  return {
    props: {
      dataUsers,
    },
  }
}
