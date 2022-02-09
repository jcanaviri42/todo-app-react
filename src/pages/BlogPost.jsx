import { useParams } from 'react-router-dom'

function BlogPost() {
  const params = useParams()

  return (
    <div className='container'>This is the blog post {params.id}</div>
  )
}

export default BlogPost