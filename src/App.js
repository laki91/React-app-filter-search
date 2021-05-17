import { useQuery } from '@apollo/react-hooks'
import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import PostsList from './components/PostsList/PostsList'
import { GET_POSTS } from './Queries/GraphqlQuerie'

export default function App() {

  const {loading, data} = useQuery(GET_POSTS)
  const [posts, setPosts] = useState([])
  const [searchBar, setSearchBar] = useState('')

  useEffect(()=>{
    if(loading){
      return <h1>Loading</h1>
    }
    else{
      setPosts(data.posts.data)
    }
  }, [loading, data])

  //console.log(posts);

  //method for SearchBar
  //submit on empty strings return back all posts
  const searchPost = (id) => {
    //console.log(id);
    let search = id
    if(search === ''){
      setSearchBar(searchBar)
      setPosts(data.posts.data)
    }else{
      let searchFilter = posts.filter(post => {
        return post.title.toLowerCase().includes(id)
      })
      setSearchBar(searchBar)
      setPosts(searchFilter)
    }
  }

  return (
    <div>
        <h1>hello</h1>
        <Header posts={posts} searchPost={searchPost} />
        <PostsList posts={posts} />
    </div>
  )
}
