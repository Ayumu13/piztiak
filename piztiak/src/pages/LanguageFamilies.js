// will be optimized later, just making a quick draft
import '../App.css';
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"
import { PieChart, pieChartDefaultProps } from 'react-minimal-pie-chart';

function LanguageFamilies() {
  
  return (
    <div>     
        <Navbar />

        <div class="content">
          <h3>Statistics</h3>
          <p>An overview of some interesting statistics about the project, such as the rarest languages that have been added thus far, as well as the most spoken languages that are still missing. Currently the rarest language in the catalog is the Kiliwa language, with only 4 native speakers. The most spoken language still missing is Nigerian Fulfulde with 16.5 million speakers.</p>
        </div>
        <div style={{width: "900px", height: "400px"}}>
          <PieChart
            data={[
              { title: 'Pomoan', value: 10, color: 'rgb(131, 174, 242)' },
              { title: 'Hebrew', value: 34, color: '#C13C37' },
              { title: 'Sugmic', value: 589, color: '#6A2135' },
            ]}
            radius={pieChartDefaultProps.radius - shiftSize}
            segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
            segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
            animate={true}
            label={({ dataEntry }) => `${dataEntry.title} - ${dataEntry.value}`}
            labelPosition={100 - lineWidth / 2}
            labelStyle={{
              ...defaultLabelStyle,
            }}
          />
        </div>
    </div>
  );
}

export default LanguageFamilies;
