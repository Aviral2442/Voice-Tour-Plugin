import React, { useEffect, useState } from 'react';
import './App.css';
import Joyride from 'react-joyride';
import toast from 'react-hot-toast';

const App = ({}) => {

  const id = '662260eea373067b3190ca92';

  const [tour, setTour] = useState([]);

  const getSelector = (name) => {
    if(name === 'class') return '.'
    if(name === 'id') return '#'
    return ''
  }

  const fetchtourData = () => {

    fetch('http://localhost:5000/tour/getbyid/' + id)
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        let joyRideData = data.steps.map(step => (
          {target: `${getSelector(step.selectorType)}${step.selectorValue}`, content: `${step.stepTitle}`}
        ))
        console.log(joyRideData);
        setTour(joyRideData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchtourData();
  }, []);




  const [steps, setSteps] = useState([
    {
      target: '.section-1-heading',
      content: 'Section 1 Description'
    },
    {
      target: '.section-2-heading',
      content: 'Section 2 Description'
    },
    {
      target: '.section-3-heading',
      content: 'Section 3 Des cription'
    },
    {
      target: '.section-4-headings',
      content: 'Section 4 Description'
    },
    {
      target: '.section-5-heading',
      content: 'Section 5 Description'
    }
  ])

  return (
    <div>
      <h1>My React Plugin</h1>
      {
        tour !== null && (
          <Joyride steps={tour} continuous={true} />
        )
      }
      <section className='section section1'>
        <h3 className='section-1-heading dshg'>Section 1 Heading</h3>
      </section>
      <section className='section section2'>
        <h3 className='section-2-heading shdg'>Section 2 Heading</h3>
      </section>
      <section className='section section3'>
        <h3 className='section-3-heading'>Section 3 Heading</h3>
      </section>
      <section className='section section4'>
        <h3 className='section-4-heading'>Section 4 Heading</h3>
      </section>
      <section className='section section5'>
        <h3 className='section-5-heading'>Section 5 Heading</h3>
      </section>
    </div>
  )
}

export default App