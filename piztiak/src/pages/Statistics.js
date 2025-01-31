// will be optimized later, just making a quick draft
import '../styles/mainPage.css';
import { useEffect } from 'react';
import translations from '../data/translations.json';
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import { Link, Outlet } from "react-router-dom";
import { PieChart, pieChartDefaultProps } from 'react-minimal-pie-chart';

function Statistics() {

  const shiftSize = 1;
  const lineWidth = 70;

  const defaultLabelStyle = {
    fontSize: '3.2px',
    fontFamily: 'Segoe UI',
    fontWeight: '600',
    opacity: '0.8'
  };

  return (
    <div>
        <Header />
        <Navbar />

        <div class="content">
          <h3>Statistics</h3>
          <p className='infobox'>An overview of some interesting statistics about the project, such as the rarest languages that have been added thus far, as well as the most spoken languages that are still missing. Currently the rarest language in the catalog is the Kiliwa language, with only 4 native speakers. The most spoken language still missing is Nigerian Fulfulde with 16.5 million speakers.</p>
        </div>
        <div style={{width: "900px", height: "400px"}}>
          <PieChart
            data={[
              { title: 'Indo-European', value: 93, color: '#C8254F' },
              { title: 'Austronesian', value: 35, color: '#2CCBDA' },
              { title: 'Afro-Asiatic', value: 27, color: '#E0AD47' },
              { title: 'Sino-Tibetan', value: 14, color: '#4CFF00' },
              { title: 'Niger-Congo', value: 15, color: '#00C000' },
              { title: 'Turkic', value: 11, color: '#EE8644' },
              { title: 'Uralic', value: 9, color: '#D1B457' },
              { title: 'Dravidian', value: 4, color: '#28CC8A' },
              { title: 'Isolated', value: 3, color: '#999999' },
              { title: 'Amerindian families', value: 13, color: '#6C4816' },
              { title: 'Others', value: 21, color: '#D9D9D9' },
            ]}
            radius={pieChartDefaultProps.radius - shiftSize}
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

export default Statistics;