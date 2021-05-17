import React from 'react'
import { Link } from 'react-router-dom'

export default function Post({post}) {
    return (
        <>
            <div className="card ">
                <div className="card-header text-center">
                    <h6 className="card-title mt-2 mb-2 display-6 ">{post.title}</h6>
                </div>
                <div className="card-body">
                    
                    <p className="card-text mb-4">{post.body}</p>
                    <div className="card-footer  ">
                    <div className="row  align-items-end">
                        <div className="col-6 ">
                            <h6 className='name'>{post.user.name}</h6>
                        </div>
                        <div className="col-6 text-end">
                            <Link to={'/post/' + post.id }  className='btn bt-sm btn-info' >Read more</Link>
                        </div>
                    </div>
                    </div> 
                    
                </div>
            </div>
            <hr />
        </>
    )
}
