import React from 'react'

export default function Post({post}) {
    return (
        <>
            <div className="card">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <p>{post.id}</p>
            </div>
        </>
    )
}
