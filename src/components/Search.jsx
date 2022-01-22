import {useState} from 'react'

function Search(props) {

    const [search, setSearch] = useState('')

    return (
        <div className="searchDiv">

            {/* Text Box */}

            <form action="">
            <input 
            className="textInput" 
            type="text"
            placeholder="Enter movie name here"
            onChange={(e)=>setSearch(e.target.value)}
             />

            {/* Submit Button */}

            <button 
            className="submitButton" 
            type="submit"
            onClick={(e)=>props.onSubmit(e,search)}
            >
             Submit
             </button>


             </form>
        </div>
    )
}

export default Search
