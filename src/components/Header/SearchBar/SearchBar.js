import React, { useState } from 'react'

export default function SearchBar({searchPost}) {

    const [searchTerm, setSearchTerm] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        searchPost(searchTerm)
        
    }

    return (
        <div>
            <form onSubmit={submitHandler} >
                <input onChange={(e)=>{setSearchTerm(e.target.value)}} type="text" placeholder='search' className='form-control' />
            </form>
        </div>
    )
}
