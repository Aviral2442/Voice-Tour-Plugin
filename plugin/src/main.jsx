import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TourPlugin from './TourPlugin.jsx';

const tourEle = document.getElementsByTagName('tour');
if (tourEle.length > 0) {
  console.log(tourEle[0].attributes);
  const ownerId = tourEle[0].attributes.getNamedItem('owner-id').value;
  const tourId = tourEle[0].attributes.getNamedItem('tour-id').value;


  console.log(ownerId, tourId);
  ReactDOM.createRoot(tourEle[0]).render(
    <TourPlugin ownerId={ownerId} tourId={tourId} children={
      tourEle[0]
    } />
  )

}

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

