import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TourGenerator from './TourGenerator.jsx';
import '@mantine/core/styles.css';


// Tour Generator
const tourEle = document.getElementsByTagName('tour');
if (tourEle.length > 0) {
  console.log(tourEle[0].attributes);
  const tourId = tourEle[0].attributes.getNamedItem('tour-id').value;

  ReactDOM.createRoot(tourEle[0]).render(
    <TourGenerator id={tourId}>
      <div dangerouslySetInnerHTML={{ __html: tourEle[0].innerHTML }} />
    </TourGenerator>
  )
}

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
