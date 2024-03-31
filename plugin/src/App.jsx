import React, { useState } from 'react';
import './App.css';
import Joyride from 'react-joyride';

const App = () => {

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
      content: 'Section 3 Description'
    },
    {
      target: '.section-4-heading',
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
      <Joyride steps={steps} continuous={true} />
      <section className='section section1'>
        <h3 className='section-1-heading'>Section 1 Heading</h3>
      </section>
      <section className='section section2'>
        <h3 className='section-2-heading'>Section 2 Heading</h3>
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