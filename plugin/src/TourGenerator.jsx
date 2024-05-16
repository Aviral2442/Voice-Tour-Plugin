import React, { useEffect, useState } from 'react';
import './App.css';
import Joyride from 'react-joyride';
import toast from 'react-hot-toast';

const TourGenerator = ({ id, children }) => {

    // console.log(children);

    //   const id = '662260eea373067b3190ca92';

    const [tour, setTour] = useState([]);

    const getSelector = (name) => {
        if (name === 'class') return '.'
        if (name === 'id') return '#'
        return ''
    }

    const fetchtourData = () => {

        fetch('http://localhost:5000/tour/getbyid/' + id)
            .then((response) => {
                console.log(response.status);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                let joyRideData = data.steps.map(step => (
                    { target: `${getSelector(step.selectorType)}${step.selectorValue}`, content: `${step.stepTitle}` }
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
            content: 'Section 3 Description'
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

    return <>
        {tour !== null && <Joyride
            steps={tour}
            continuous
            scrollToFirstStep
            showProgress
            showSkipButton
            styles={{
                options: {
                    arrowColor: 'white',
                    backgroundColor: 'white',
                    overlayColor: 'rgba(79, 26, 0, 0.4)',
                    primaryColor: 'black',
                    textColor: 'black',
                    width: 300,
                    zIndex: 1000,
                },
            }}
        />}
        {children}
    </>
}

export default TourGenerator;