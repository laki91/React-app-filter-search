import { uniq } from 'lodash'
import React from 'react'

export default function SelectFilter({posts, filteringByName, selectFilter}) {

    const allFilter = []

    posts.map(post => allFilter.push(post.user.name))
    //console.log(allFilter);

    return (
        <div>
            <select value={selectFilter} onChange={(e)=> {filteringByName(e.target.value)}} className='form-control' >
                <option value="">ALL</option>
                {
                    uniq(allFilter).map(name => {
                        return (
                            <option value={name} key={name} >{name}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}
