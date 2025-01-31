// will be optimized later, just making a quick draft
import '../styles/instructions.css';
import { useEffect } from 'react';
import translations from '../data/translations.json';
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import { Link, Outlet } from "react-router-dom";

function TranslationInstructions() {

  return (
    <div>
        <Header />
        <Navbar />

        <div class="content-instructions">
          <h3>Translation Instructions</h3>
          <div className='instructions-container'>
            <p>The English translation below was obtained with the help of an online community of native Basque speakers. If necessary, this translation is sufficiently reliable and accurate to be used as a basis to start translating from. When writing a translation of the lyrics you should try to maintain the original intent and meaning as much as possible; The singability or rhyme are unimportant, as it is about producing a comparative translation.</p><br/>
            <div className='context-container'>
              <div className='context-container-column'>
                <p><b>Lyrical Context</b></p>
                <p>The first verse is a character introducing himself as the singing lamb, this is a literal singing lamb because it is a surrealist song text. He bites another character - the green dog (also literal) - in the house of the elect (presumably a city council).</p><br/>
                <p>In the second paragraph a new unnamed character is speaking, each subsequent paragraph then also has a new speaker.</p><br/>
                <p>In the fourth verse a character proclaims to speak 'six languages all half-assed', it would be nice if the mild profanity in this sentence could be preserved in translation.</p><br/>
                <p>The next time a character introduces himself is in the fifth paragraph, as the prince of the west. It is doubtful this character is an actual prince but it is open to interpretation by the listener.</p><br/>
                <p>In the final paragraph another unnamed character is saying he is deliberately ignoring advice he knows to be good which will lead to his demise, he then proclaims that at the very least he will be the fastest among the fools (people who deliberately ignore good advice).</p><br/>
              </div>
              <div className='context-container-column'>
                <p><b>English Lyrics</b></p>
                <p>{translations.english.nativeTranslation.line1}</p>
                <p>{translations.english.nativeTranslation.line2}</p>
                <p>{translations.english.nativeTranslation.line3}</p>
                <p>{translations.english.nativeTranslation.line4}</p><br/>
                <p>{translations.english.nativeTranslation.line5}</p>
                <p>{translations.english.nativeTranslation.line6}</p>
                <p>{translations.english.nativeTranslation.line7}</p>
                <p>{translations.english.nativeTranslation.line8}</p><br/>
                <p>{translations.english.nativeTranslation.line9}</p>
                <p>{translations.english.nativeTranslation.line10}</p>
                <p>{translations.english.nativeTranslation.line11}</p>
                <p>{translations.english.nativeTranslation.line12}</p><br/>
                <p>{translations.english.nativeTranslation.line13}</p>
                <p>{translations.english.nativeTranslation.line14}</p>
                <p>{translations.english.nativeTranslation.line15}</p>
                <p>{translations.english.nativeTranslation.line16}</p><br/>
                <p>{translations.english.nativeTranslation.line17}</p>
                <p>{translations.english.nativeTranslation.line18}</p>
                <p>{translations.english.nativeTranslation.line19}</p>
                <p>{translations.english.nativeTranslation.line20}</p><br/>
                <p>{translations.english.nativeTranslation.line21}</p>
                <p>{translations.english.nativeTranslation.line22}</p>
                <p>{translations.english.nativeTranslation.line23}</p>
                <p>{translations.english.nativeTranslation.line24}</p>
              </div>
              <div className='context-container-column'>
              <p><b>Basque Lyrics</b></p>
                <p>{translations.basque.nativeTranslation.line1}</p>
                <p>{translations.basque.nativeTranslation.line2}</p>
                <p>{translations.basque.nativeTranslation.line3}</p>
                <p>{translations.basque.nativeTranslation.line4}</p><br/>
                <p>{translations.basque.nativeTranslation.line5}</p>
                <p>{translations.basque.nativeTranslation.line6}</p>
                <p>{translations.basque.nativeTranslation.line7}</p>
                <p>{translations.basque.nativeTranslation.line8}</p><br/>
                <p>{translations.basque.nativeTranslation.line9}</p>
                <p>{translations.basque.nativeTranslation.line10}</p>
                <p>{translations.basque.nativeTranslation.line11}</p>
                <p>{translations.basque.nativeTranslation.line12}</p><br/>
                <p>{translations.basque.nativeTranslation.line13}</p>
                <p>{translations.basque.nativeTranslation.line14}</p>
                <p>{translations.basque.nativeTranslation.line15}</p>
                <p>{translations.basque.nativeTranslation.line16}</p><br/>
                <p>{translations.basque.nativeTranslation.line17}</p>
                <p>{translations.basque.nativeTranslation.line18}</p>
                <p>{translations.basque.nativeTranslation.line19}</p>
                <p>{translations.basque.nativeTranslation.line20}</p><br/>
                <p>{translations.basque.nativeTranslation.line21}</p>
                <p>{translations.basque.nativeTranslation.line22}</p>
                <p>{translations.basque.nativeTranslation.line23}</p>
                <p>{translations.basque.nativeTranslation.line24}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default TranslationInstructions;