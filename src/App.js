import { useQuery } from '@apollo/react-hooks'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import PostsList from './components/PostsList/PostsList'
import { GET_POSTS } from './Queries/GraphqlQuerie'

export default function App() {

  const { loading, data } = useQuery(GET_POSTS)
  const [posts, setPosts] = useState([])
  // const [searchBar, setSearchBar] = useState('')
  const [selectFilter, setSelectFilter] = useState('')

  useEffect(() => {
    if (loading) {
      return <h1>Loading</h1>
    }
    else {
      setPosts(data.posts.data)
    }
  }, [loading, data])
  //console.log(posts);


  //method for SearchBar
  //submit on empty strings return back all posts
  const searchPost = (id) => {
    //console.log(id);
    let search = id
    if (search === '') {
      //setSearchBar(searchBar)
      setPosts(data.posts.data)
    } else {
      let searchFilter = posts.filter(post => {
        return post.title.toLowerCase().includes(id)
      })
      //setSearchBar(searchBar)
      setPosts(searchFilter)
    }
  }


  //method for select filtering by name
  // option ALL return back all posts
  const filteringByName = (id) => {
    //console.log(id);
    let filt = id
    if (filt === '') {
      setSelectFilter(filt)
      setPosts(data.posts.data)
    } else {
      let filteredPost = posts.filter(post => {
        return post.user.name === id
      })
      setSelectFilter(filt)
      setPosts(filteredPost)
    }
  }

  return (
    <BrowserRouter>
      <Route path='/' exact>
        <Header
          posts={posts}
          searchPost={searchPost}
          filteringByName={filteringByName}
          selectFilter={selectFilter}
        />
        <PostsList posts={posts} />
      </Route>
    </BrowserRouter>
  )
}
