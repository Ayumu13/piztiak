import React, { useState } from 'react';
import { Tooltip } from '@mui/material';

import translations from '../data/translations.json';

import '../App.css';
import '../styles/languageFamilies.css'

import Header from "../components/Header"
import Navbar from "../components/Navbar"
import { map } from '../mapPaths/svgPath';
import { langFamilyArray, langFamilyPaths } from '../consts/languages';

function Map() {

    const [langFilter, setLangFilter] = useState('');

    //// Renders the svgs of the language families for the map
    // Fetches the langFamilyArray and outputs the name of each family (for the cursor tooltip)
    const languageFamilyTitle = langFamilyArray.map((family) => {
        return family
    })

    // Fetches the langFamilyPaths array and renders every path based on its name (indicated by family).
    const languageFamily = langFamilyPaths.map((family, i) => {
        return (
            <Tooltip title={languageFamilyTitle[i]} followCursor placement="top">
                <a href={`/languagefamilies/${languageFamilyTitle[i]}`} className={["lang-path", languageFamilyTitle[i]]}>
                    <path className={["lang-path", languageFamilyTitle[i]]} d={family}/>
                </a>
            </Tooltip>
    )})

    //// Renders the list of languages
    // The function used for the language filterer, simply fetches the list of languages and filters based on if it includes the input value
    const filteredLanguageNameArray = Object.entries(translations).filter((lang) =>
        lang[1].name.toLowerCase().includes(langFilter.toLowerCase())
    );

    // Returns every language that matches the filtered language array input, with a corresponding link
    const languageName = filteredLanguageNameArray.sort().map((lang) => {
        return (
            <ul>
                <li className='lang-list-li'>
                    <a href={`/languages/${lang[0]}`} className={lang[1].status === "Conlang" ? 'lang-list-item-conlang' : 'lang-list-item'}>
                        {lang[1].name}
                    </a>
                </li>
                <br />
            </ul>
        )
    })

    return (
        <div className="App">
        <header className="App-header">
            <Header /> 
            <Navbar />

            <div className="content-map">
                <h3 className='title'>Welcome to the Map</h3>
                <div className='language-index'>
                <input
                    type="text"
                    className='lang-filter'
                    placeholder='Filter by language'
                    value={langFilter}
                    onChange={(e) => setLangFilter(e.target.value)}
                />
                <div className='lang-list'>
                    {languageName}
                </div>
                </div>
                <div className='map-div'>
                    <svg className='basemap' baseprofile="tiny" stroke-linecap="round" stroke-linejoin="round" version="1.2" viewBox="0 0 4378.13 2434.94">
                        <path className='path' fill="#999999" d={map} />
                    </svg>

                    <svg className='map' baseprofile="tiny" stroke-linecap="round" stroke-linejoin="round" version="1.2" viewBox="0 0 4378.13 2434.94">
                        {languageFamily} {/* Renders the language family svgs */}
                    </svg>
                </div>
            </div>
        </header>
        </div>
    );
}

export default Map;
