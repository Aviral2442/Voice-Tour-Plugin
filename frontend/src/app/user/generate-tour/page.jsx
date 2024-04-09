'use client';
import React, { useEffect, useState } from 'react'

const GenerateTour = () => {

  const [webpageList, setWebpageList] = useState([]);

  const fetchWebpagesData = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/webpage/getall`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setWebpageList(data);
      })
      .catch(err => {
        console.log(err);
      })

  }

  useEffect(() => {
    fetchWebpagesData();
  }, [])


  return (
    <div>GenerateTour</div>
  )
}

export default GenerateTour;