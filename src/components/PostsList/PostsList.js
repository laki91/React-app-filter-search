import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import Post from '../Post/Post'

import './PostList.css'

export default function PostsList({posts}) {

    const [pageNumber, setPageNumber] = useState(0)

    const usersPerPage = 9
    const pagesVisited = pageNumber * usersPerPage

    const pageCount = Math.ceil(posts.length / usersPerPage)
    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    const displayUsers = posts.slice(pagesVisited, pagesVisited + usersPerPage).map((post)=> {
        return (
            <div className='col-xl-4 col-md-6 col-sm-12 col-4' key={post.id}>
                <Post post={post} />
            </div>
        )
    })

    // const all = posts.map(post => {
    //     return (
    //         <div className="col-4" key={post.id} >
    //             <Post post={post} />
    //         </div>
    //     )
    // })


    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            {/* {all} */}
                            {displayUsers}
                            <div className="row">
                                <div className="col-4"></div>
                                <div className="col-4">
                                    <ReactPaginate 
                                        previousLabel={"previous"}
                                        nextLabel={'Next'}
                                        pageCount={pageCount}
                                        onPageChange={changePage}
                                        containerClassName={'paginationBtns'}
                                        activeClassName={'paginationActive'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
