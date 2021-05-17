import React, { useState } from 'react'
import { useParams, withRouter } from 'react-router';


function SinglePost(props) {

    //console.log(props);

    const [singlePost, setSinglePost] = useState(props.posts.filter(post => post.id == props.match.params.id)[0])
    const { id } = useParams()
    const [postID, setPostID] = useState(parseInt(id))

    function nextPost(){
        if(postID){
            setPostID(parseInt(postID) + 1)
            setSinglePost(props.posts.find((post) => parseInt(post.id) === parseInt(postID)));
            window.history.replaceState(null, 'New Page Title', `/post/${postID + 1}`);
        }
        
        
    }

    function prevPost(){
        if(postID > 1){
            setPostID(parseInt(postID) -1);
            setSinglePost(props.posts.find((post) => parseInt(post.id) === parseInt(postID) -1))
            window.history.replaceState(null, "New Page Title", `/post/${postID -1}`);
        }
    }


    console.log(singlePost);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <div  className="row">
                            <div className="col-10 offset-1" key={singlePost.id} >
                                <h3 className='display-3 m-5' ><b>{singlePost.title}</b></h3>
                                <p className='lead h4' ><b>{singlePost.body}</b></p>
                                
                                <div className="row">
                                    <div className="col-6" >
                                        <button onClick={prevPost} className='btn btn-lg btn-warning mt-4'>Previous</button>
                                    </div>
                                    <div className="col-6 text-end">
                                        <button onClick={nextPost} className='btn btn-lg btn-success mt-4'>Next</button>
                                    </div>
                                </div> 
                                <div className="row">
                                    <div className="col-6">
                                        <p className='mt-4'>Author: {singlePost.user.name}</p>
                                    </div>
                                    <div className="col-6">
                                    <p className='m-4'>Address:<em> {singlePost.user.address.city}, {singlePost.user.address.street}, {singlePost.user.address.zipcode}</em></p>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <h3 className=' display-6 mt-4 mb-4' >Comments</h3>
                                    {
                                        singlePost.comments.data.map(coment => {
                                            return (
                                                <div key={coment.id}>
                                                    <h3 className='' >{coment.name}</h3>
                                                    <p className='text-muted m-4'>{coment.body}</p>
                                                    <hr />
                                                </div>  
                                            )
                                        })
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(SinglePost)

