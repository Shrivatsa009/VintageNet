import React, { useEffect, useState } from 'react'

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based on specific condition/variable

    useEffect(() => {
      // if [], run once when the row loads, and don't run again

    }, []);
  return (
    <div>
        <h2>{title}</h2>  
    </div>
  )
}

export default Row