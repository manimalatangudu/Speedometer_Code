import './MyComponent.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function MyComponent() {
  return (
    <div className="comp">
        <span className="state">Current</span>
        <CircularProgressbar
          value={640}
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
            <span className="value">640 A
            <span className="textValue1"> Current Charger</span>
            <span className="textValue2"> Output</span></span>
        </div>
    </div>
  );
}

export default MyComponent;
