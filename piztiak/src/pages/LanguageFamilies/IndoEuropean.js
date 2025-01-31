import '../../styles/familyPages.css'
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import { map } from '../../mapPaths/svgPath';
import { Tooltip } from '@mui/material';
import { Link } from "react-router-dom";
import { indoeuropean } from '../../mapPaths/indoeuropean';

function IndoEuropean() {
  
    return (
        <div id="indoeuropean">    
            <Header />
            <Navbar />
            
            <div className="content">
            <h3 className="goldheader">The Indo-European languages</h3>
            <div className="left">
            <p className='infobox'>The Indo-European languages are a major language family of about 450 languages spoken by billions of people across Europe and western Asia. The Piztiak Project currently supports 93 Indo-European languages.</p><br/>
            <p className='infobox'>The family is named after the connection between the European and Indian branches of the family and is thought to have its urheimat in the Pontic steppe about 6,000 years ago. The Indo-European family is subdivided into branches, Albanian, Armenian, Celtic, Germanic, Hellenic, Indo-Aryan, Iranian, Romance and Slavic. Today the most spoken Indo-European languages are English, Spanish and Hindi.</p><br/>
            <p className='infobox'>The languages mostly fusional in nature, though huge diversity exists between some of its branches, they tend to have complex syllable structures and use many vowels.</p><br/>
            <p className='infobox'>[table of languages]</p>
            </div>
            <div className="right">
                <div>
                    <svg className='basemap-lf' baseprofile="tiny" stroke-linecap="round" stroke-linejoin="round" version="1.2" viewBox="0 0 4378.13 2434.94">
                        <path className='path' fill="#999999" d={map} />
                    </svg>

                    <svg className='map-lf' baseprofile="tiny" stroke-linecap="round" stroke-linejoin="round" version="1.2" viewBox="0 0 4378.13 2434.94">
                        <path className={["lang-path", "Indo-European"]} fill="#C8254F" d={indoeuropean} />
                    </svg>
                </div>
                <p className='caption'>Spread of Indo-European</p>
            </div>
            </div>
        </div>
  );
}

export default IndoEuropean;
