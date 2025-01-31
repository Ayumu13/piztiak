import { useState, useEffect } from "react"
import { Link, Outlet, useParams } from "react-router-dom";
import { Tooltip } from '@mui/material';

import '../styles/languages.css'
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import translations from '../data/translations.json';

function Language() {
    
    const { language } = useParams()
    const lang = translations[language]
  
    return (
        <div>    
            <Header />
            <Navbar />
            
            <div className="content language-content">
                <div className='container-div'>
                    <div className="container1">
                        <div className="container-id">
                            <p className="text text-id">#{lang.id}</p>
                            <p className="text text-date">{lang.date}</p>
                        </div>
                        <div>
                            <p className="text text-header">{lang.name} {lang.altNames && `/ ${lang.altNames}`} {lang.dialect1Name && `(${lang.dialect1Name})`}</p>
                            <p className="text text-subheader">{lang.nativeName}</p>
                        </div>                    
                        <div className={lang.rtl ? `text-container1-rtl` : `text-container1-ltr`}>
                            {/* I know this looks horrible, don't judge me */}
                            <Tooltip title={lang.transliteration?.line1} followCursor placement="top">
                                <p className={lang.rtl ? `text rtl-text-lines` : `text text-lines`}>{lang.nativeTranslation ? lang.nativeTranslation.line1 : lang.dialect1.line1}</p>
                            </Tooltip>
                            <br/>
                            <Tooltip title={lang.transliteration?.line2} followCursor placement="top">
                                <p className={lang.rtl ? `text rtl-text-lines` : `text text-lines`}>{lang.nativeTranslation ? lang.nativeTranslation.line2 : lang.dialect1.line2}</p>
                            </Tooltip>
                            <br/>
                            <Tooltip title={lang.transliteration?.line3} followCursor placement="top">
                                <p className={lang.rtl ? `text rtl-text-lines` : `text text-lines`}>{lang.nativeTranslation ? lang.nativeTranslation.line3 : lang.dialect1.line3}</p>
                            </Tooltip>
                            <br/>
                            <Tooltip title={lang.transliteration?.line4} followCursor placement="top">
                                <p className={lang.rtl ? `text rtl-text-lines` : `text text-lines`}>{lang.nativeTranslation ? lang.nativeTranslation.line4 : lang.dialect1.line4}</p>
                            </Tooltip>
                            <br/>
                            <br/>
                            <Tooltip title={lang.transliteration?.line5} followCursor placement="top">
                                <p className={lang.rtl ? `text rtl-text-lines` : `text text-lines`}>{lang.nativeTranslation ? lang.nativeTranslation.line5 : lang.dialect1.line5}</p>
                            </Tooltip>
                            <br/>
                            <Tooltip title={lang.transliteration?.line6} followCursor placement="top">
                                <p className={lang.rtl ? `text rtl-text-lines` : `text text-lines`}>{lang.nativeTranslation ? lang.nativeTranslation.line6 : lang.dialect1.line6}</p>
                            </Tooltip>
                            <br/>
                            <Tooltip title={lang.transliteration?.line7} followCursor placement="top">
                                <p className={lang.rtl ? `text rtl-text-lines` : `text text-lines`}>{lang.nativeTranslation ? lang.nativeTranslation.line7 : lang.dialect1.line7}</p>
                            </Tooltip>
                            <br/>
                            <Tooltip title={lang.transliteration?.line8} followCursor placement="top">
                                <p className={lang.rtl ? `text rtl-text-lines` : `text text-lines`}>{lang.nativeTranslation ? lang.nativeTranslation.line8 : lang.dialect1.line8}</p>
                            </Tooltip>
                            <br/>
                            <br/>
                            <Tooltip title={lang.transliteration?.line9} followCursor placement="top">
                                <p className={lang.rtl ? `text rtl-text-lines` : `text text-lines`}>{lang.nativeTranslation ? lang.nativeTranslation.line9 : lang.dialect1.line9}</p>
                            </Tooltip>
                            <br/>
                            <Tooltip title={lang.transliteration?.line10} followCursor placement="top">
                                <p className={lang.rtl ? `text rtl-text-lines` : `text text-lines`}>{lang.nativeTranslation ? lang.nativeTranslation.line10 : lang.dialect1.line10}</p>
                            </Tooltip>
                            <br/>
                            <Tooltip title={lang.transliteration?.line11} followCursor placement="top">
                                <p className={lang.rtl ? `text rtl-text-lines` : `text text-lines`}>{lang.nativeTranslation ? lang.nativeTranslation.line11 : lang.dialect1.line11}</p>
                            </Tooltip>
                            <br/>
                            <Tooltip title={lang.transliteration?.line12} followCursor placement="top">
                                <p className={lang.rtl ? `text rtl-text-lines` : `text text-lines`}>{lang.nativeTranslation ? lang.nativeTranslation.line12 : lang.dialect1.line12}</p>
                            </Tooltip>
                            <br/>
                            <br/>
                            <Tooltip title={lang.transliteration?.line13} followCursor placement="top">
                                <p className={lang.rtl ? `text rtl-text-lines` : `text text-lines`}>{lang.nativeTranslation ? lang.nativeTranslation.line13 : lang.dialect1.line13}</p>
                            </Tooltip>
                            <br/>
                            <Tooltip title={lang.transliteration?.line14} followCursor placement="top">
                                <p className={lang.rtl ? `text rtl-text-lines` : `text text-lines`}>{lang.nativeTranslation ? lang.nativeTranslation.line14 : lang.dialect1.line14}</p>
                            </Tooltip>
                            <br/>
                            <Tooltip title={lang.transliteration?.line15} followCursor placement="top">
                                <p className={lang.rtl ? `text rtl-text-lines` : `text text-lines`}>{lang.nativeTranslation ? lang.nativeTranslation.line15 : lang.dialect1.line15}</p>
                            </Tooltip>
                            <br/>
                            <Tooltip title={lang.transliteration?.line16} followCursor placement="top">
                                <p className={lang.rtl ? `text rtl-text-lines` : `text text-lines`}>{lang.nativeTranslation ? lang.nativeTranslation.line16 : lang.dialect1.line16}</p>
                            </Tooltip>
                            <br/>
                            <br/>
                            <Tooltip title={lang.transliteration?.line17} followCursor placement="top">
                                <p className={lang.rtl ? `text rtl-text-lines` : `text text-lines`}>{lang.nativeTranslation ? lang.nativeTranslation.line17 : lang.dialect1.line17}</p>
                            </Tooltip>
                            <br/>
                            <Tooltip title={lang.transliteration?.line18} followCursor placement="top">
                                <p className={lang.rtl ? `text rtl-text-lines` : `text text-lines`}>{lang.nativeTranslation ? lang.nativeTranslation.line18 : lang.dialect1.line18}</p>
                            </Tooltip>
                            <br/>
                            <Tooltip title={lang.transliteration?.line19} followCursor placement="top">
                                <p className={lang.rtl ? `text rtl-text-lines` : `text text-lines`}>{lang.nativeTranslation ? lang.nativeTranslation.line19 : lang.dialect1.line19}</p>
                            </Tooltip>
                            <br/>
                            <Tooltip title={lang.transliteration?.line20} followCursor placement="top">
                                <p className={lang.rtl ? `text rtl-text-lines` : `text text-lines`}>{lang.nativeTranslation ? lang.nativeTranslation.line20 : lang.dialect1.line20}</p>
                            </Tooltip>
                            <br/>
                            <br/>
                            <Tooltip title={lang.transliteration?.line21} followCursor placement="top">
                                <p className={lang.rtl ? `text rtl-text-lines` : `text text-lines`}>{lang.nativeTranslation ? lang.nativeTranslation.line21 : lang.dialect1.line21}</p>
                            </Tooltip>
                            <br/>
                            <Tooltip title={lang.transliteration?.line22} followCursor placement="top">
                                <p className={lang.rtl ? `text rtl-text-lines` : `text text-lines`}>{lang.nativeTranslation ? lang.nativeTranslation.line22 : lang.dialect1.line22}</p>
                            </Tooltip>
                            <br/>
                            <Tooltip title={lang.transliteration?.line23} followCursor placement="top">
                                <p className={lang.rtl ? `text rtl-text-lines` : `text text-lines`}>{lang.nativeTranslation ? lang.nativeTranslation.line23 : lang.dialect1.line23}</p>
                            </Tooltip>
                            <br/>
                            <Tooltip title={lang.transliteration?.line24} followCursor placement="top">
                                <p className={lang.rtl ? `text rtl-text-lines` : `text text-lines`}>{lang.nativeTranslation ? lang.nativeTranslation.line24 : lang.dialect1.line24}</p>
                            </Tooltip>
                        </div>
                    </div>
                    <div className="container1">
                        <p className="text container-id">#{translations.english.id}</p>
                        <div>
                            <p className="text text-header">{translations.english.name}</p>
                            <p className="text text-subheader">{lang.nativeName && translations.english.name}</p>
                        </div>                    
                        <div className="text-container1-ltr">
                            <p className='text text-lines'>{translations.english.nativeTranslation.line1}</p><br/>
                            <p className='text text-lines'>{translations.english.nativeTranslation.line2}</p><br/>
                            <p className='text text-lines'>{translations.english.nativeTranslation.line3}</p><br/>
                            <p className='text text-lines'>{translations.english.nativeTranslation.line4}</p><br/><br/>
                            <p className='text text-lines'>{translations.english.nativeTranslation.line5}</p><br/>
                            <p className='text text-lines'>{translations.english.nativeTranslation.line6}</p><br/>
                            <p className='text text-lines'>{translations.english.nativeTranslation.line7}</p><br/>
                            <p className='text text-lines'>{translations.english.nativeTranslation.line8}</p><br/><br/>
                            <p className='text text-lines'>{translations.english.nativeTranslation.line9}</p><br/>
                            <p className='text text-lines'>{translations.english.nativeTranslation.line10}</p><br/>
                            <p className='text text-lines'>{translations.english.nativeTranslation.line11}</p><br/>
                            <p className='text text-lines'>{translations.english.nativeTranslation.line12}</p><br/><br/>
                            <p className='text text-lines'>{translations.english.nativeTranslation.line13}</p><br/>
                            <p className='text text-lines'>{translations.english.nativeTranslation.line14}</p><br/>
                            <p className='text text-lines'>{translations.english.nativeTranslation.line15}</p><br/>
                            <p className='text text-lines'>{translations.english.nativeTranslation.line16}</p><br/><br/>
                            <p className='text text-lines'>{translations.english.nativeTranslation.line17}</p><br/>
                            <p className='text text-lines'>{translations.english.nativeTranslation.line18}</p><br/>
                            <p className='text text-lines'>{translations.english.nativeTranslation.line19}</p><br/>
                            <p className='text text-lines'>{translations.english.nativeTranslation.line20}</p><br/><br/>
                            <p className='text text-lines'>{translations.english.nativeTranslation.line21}</p><br/>
                            <p className='text text-lines'>{translations.english.nativeTranslation.line22}</p><br/>
                            <p className='text text-lines'>{translations.english.nativeTranslation.line23}</p><br/>
                            <p className='text text-lines'>{translations.english.nativeTranslation.line24}</p>
                        </div>
                    </div>
                </div>
                <p className='text credits'>Translation provided by: <b>{lang.credits}</b></p>
            </div>
        </div>
  );
}

export default Language;
