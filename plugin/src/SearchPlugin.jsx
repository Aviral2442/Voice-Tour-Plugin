import React, { useEffect } from 'react'

const SearchPlugin = () => {
  const id = '660961a3904982acd969fda5';

  const fetchtourData = () => {

    fetch('http://localhost:5000/webpage/getbyuser/' + userid)
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
         console.log(data);
       
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchtourData();
  }, []);

  return (
    <div>SearchPlugin</div>
  )
}

export default SearchPlugin