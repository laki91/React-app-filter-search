import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import SelectFilter from './SelectFilter/SelectFilter'

export default function Header({ posts, searchPost, filteringByName, selectFilter }) {

    return (
        <div>
            <div>
                <h1 className='display-4 m-4 text-center' >Posts found: {posts.length} </h1>
            </div>
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="row">
                        <div className="col-6 text-center ">
                            <SearchBar searchPost={searchPost} />
                        </div>
                        <div className="col-6">
                            <SelectFilter posts={posts} filteringByName={filteringByName} selectFilter={selectFilter} />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
