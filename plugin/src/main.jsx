import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TourGenerator from './TourGenerator.jsx';
import SearchPlugin from './SearchPlugin.jsx';  

// Tour Generator
const tourEle = document.getElementsByTagName('tour');
if (tourEle.length > 0) {
  console.log(tourEle[0].attributes);
  const ownerId = tourEle[0].attributes.getNamedItem('owner-id').value;
  const tourId = tourEle[0].attributes.getNamedItem('tour-id').value;


  console.log(ownerId, tourId);
  ReactDOM.createRoot(tourEle[0]).render(
    <TourGenerator ownerId={ownerId} id={tourId}>
      <div dangerouslySetInnerHTML={{ __html: tourEle[0].innerHTML }} />
    </TourGenerator>
  )
}

// Search Plugin
const searchPlug = document.getElementsByTagName('search');
if (searchPlug.length > 0) {
  console.log(searchPlug[0].attributes);
  const ownerId = searchPlug[0].attributes.getNamedItem('owner-id').value;
  // const webpageId = searchPlug[0].attributes.getNamedItem('webpage-id').value;


  console.log(ownerId);
  ReactDOM.createRoot(searchPlug[0]).render(
    <SearchPlugin ownerId={ownerId}>
      <div dangerouslySetInnerHTML={{ __html: searchPlug[0].innerHTML }} />
    </SearchPlugin>
  )
}

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

