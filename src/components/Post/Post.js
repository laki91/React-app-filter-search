import React from 'react'

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
                            <button  className='btn bt-sm btn-info' >Read more</button>
                        </div>
                    </div>
                    </div> 
                    
                </div>
            </div>
            <hr />
        </>
    )
}
