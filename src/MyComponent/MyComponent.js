import './MyComponent.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from 'react';

function MyComponent() {
    const [val, setVal] = useState(100);
    useEffect(() => {
        const myInterval = setTimeout(()=>{
            const randomNum = Math.floor(Math.random()*3520);
            console.log('RandomNum between the range-', randomNum);
            setVal(randomNum);
        }, 3000)
        return () => clearTimeout(myInterval);
    }, [val]);
  return (
    <div className="comp">
        <span className="state">Current</span>
        <CircularProgressbar
          value={val}
          strokeWidth={15}
          circleRatio={0.7}
          maxValue={3520}
          minValue={0}
          styles={{
            text: {
                fontSize: '6px'
            },
            trail: {
                strokeLinecap: 'butt',
                transform: 'rotate(-126deg)',
                transformOrigin: 'center center',
                stroke: 'lightgray',
            },
            path: {
                strokeLinecap: 'butt',
                transform: 'rotate(-126deg)',
                transformOrigin: 'center center',
                stroke: 'turquoise',
            }
          }}
        />
        <span className="minVal">0 A</span>
        <span className="maxVal left130">3520 A</span>
        <div className="circle">
            <span className="value">{val} A
            <span className="textValue1"> Current Charger</span>
            <span className="textValue2"> Output</span></span>
        </div>
    </div>
  );
}

export default MyComponent;
