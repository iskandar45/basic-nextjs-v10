import Layout from "../components/Layout"

interface Post {
  id: number
  title: string
  body: string
}

interface BlogProps {
  dataBlog: Post[]
}
export default function blog(props: BlogProps) {
  const { dataBlog } = props
  return (
    <Layout pageTitle="Blog">
      {dataBlog.map((blog) => (
        <div key={blog.id}>
          <p>{blog.title}</p>
          <p>{blog.body}</p>
        </div>
      ))}
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const dataBlog = await res.json()
  return {
    props: {
      dataBlog,
    },
  }
}
