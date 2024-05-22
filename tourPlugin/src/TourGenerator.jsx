import React, { useEffect, useState } from 'react';
import './App.css';
import Joyride from 'react-joyride';

const TourGenerator = ({ id, children }) => {

    // console.log(children);
    //   const id = '662260eea373067b3190ca92';

    const [tour, setTour] = useState([]);
    const [color, setColor] = useState('#cccccc');
    const [bgcolor, setBgcolor] = useState('#cccccc');
    const [textcolor, setTextColor] = useState('#cccccc');
    const [arrowcolor, setArrowColor] = useState('#cccccc');
    const [overlaycolor, setOverlayColor] = useState('#cccccc');
    const [width, setWidth] = useState(300);

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
                setColor(data.color);
                setBgcolor(data.bgcolor);
                setTextColor(data.textcolor);
                setArrowColor(data.arrowcolor);
                setOverlayColor(data.overlaycolor);
                setWidth(data.width);
                let joyRideData = data.steps.map(step => (
                    { target: `${getSelector(step.selectorType)}${step.selectorValue}`, title: `${step.stepTitle}`, content: `${step.stepDescription}` }
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
                    arrowColor: arrowcolor,
                    backgroundColor: bgcolor,
                    overlayColor: overlaycolor,
                    primaryColor: color,
                    textColor: textcolor,
                    width: width,
                    zIndex: 100000,
                },
            }}
        />}
        {children}
    </>
}

export default TourGenerator;