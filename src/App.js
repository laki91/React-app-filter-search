import { useQuery } from '@apollo/react-hooks'
import React, { useEffect, useState } from 'react'
import PostsList from './components/PostsList/PostsList'
import { GET_POSTS } from './Queries/GraphqlQuerie'

export default function App() {

  const {loading, data} = useQuery(GET_POSTS)
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    if(loading){
      return <h1>Loading</h1>
    }
    else{
      setPosts(data.posts.data)
    }
  }, [loading, data])

  console.log(posts);

  return (
    <div>
        <h1>hello</h1>
        <PostsList posts={posts} />
    </div>
  )
}
