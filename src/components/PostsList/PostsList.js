import React from 'react'
import Post from '../Post/Post'

export default function PostsList({posts}) {

    const all = posts.map(post => {
        return (
            <div className="col-4" key={post.id} >
                <Post post={post} />
            </div>
        )
    })


    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            {all}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
