import React from 'react';


const Searchbox=({searchfield, SearchChange})=>{
    return(
        <div className='pa2'>
            <input 
            className='tc pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='search robots' 
            onChange={SearchChange}
            />
        </div>
    );
}
export default Searchbox;