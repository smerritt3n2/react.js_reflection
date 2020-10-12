import React, {useState} from 'react'
import './style.css'

function CatSearch() {

    const [image, setImage] = useState({imageResults: ''})
    const link = `https://http.cat/${image.imageResults}.jpg`
    return (
        <form>
            <h1>Cat Image Application</h1>
            <p>Type in a number and see what cats you'll find?</p>
            <input type="text" value={image.imageResults} onChange={e => setImage({ imageResults: e.target.value })} />
            <h4>The Number you have tried is - {image.imageResults}</h4>
            <img src={link} />
        </form>
    )
}

export default CatSearch
