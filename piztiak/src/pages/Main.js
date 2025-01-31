import '../styles/mainPage.css';

import { Link, Outlet, useParams } from "react-router-dom";
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import translations from '../data/translations.json';

function Main() {

  //This function will bring the rarest language spoken
  // const filteredLanguageNameArray = Object.entries(translations).filter((lang) =>
  //     lang[1].speakers.Number()
  // );
  // console.log(filteredLanguageNameArray)

  //This returns the newest language
  const languageNumber = Object.entries(translations).slice(-1)[0];

  //This returns the rarest language
  const rarestLanguage = Object.entries(translations).sort((a, b) => {
    const speakersA = parseInt(a[1].speakers?.replace(',', '')); //This is because the numbers in the JSON file are registered with commas which are unsortable
    const speakersB = parseInt(b[1].speakers?.replace(',', ''));
    return speakersB - speakersA; // Sort in descending order
  });

  return (
    <div>  
        <Header /> 
        <Navbar />
    <div className="content-div">
        <div className="content-inner-div">
            <h3 class="goldheader">Welcome to the Piztiak Project</h3>
            <div className='upper-container-div'>
            <div className='upper-half-container'>
                {/* <img className='image-div' src='temporary.png' width={512} height={512} /> */}
                <div className='statoid-div'>
                  <p className='infobox'>Currently supporting <b>{languageNumber[1].id}</b> languages</p>
                  <p className='infobox'>The most recent language is <b><a className='lang-link' href={`/languages/${languageNumber[0]}`}>{languageNumber[1].name}</a></b></p>
                  <p className='infobox'>The rarest language we currently have has only <b>{rarestLanguage.slice(-1)[0][1].speakers}</b> speakers - <b><a className='lang-link' href={`/languages/${rarestLanguage.slice(-1)[0][0]}`}>{rarestLanguage.slice(-1)[0][1].name}</a></b></p>
                </div>
              </div>
              <div className='text-infobox-container-div'>
                <p className='infobox'>This is an open-source, volunteer driven project aimed at gathering as many as possible translations of the Basque song, Piztiak. Piztiak is a song from the Basque Country situated in Northern Spain; The ultimate goal of this project is to obtain both a translation and transliteration from a fluent speaker of every language spoken currently. As aforementioned, the results of this project are to be considered open-source; Although we do not deem the project to have a sufficiently high reliability yet, eventually we would appreciate and encourage the usage of this collection for translation services, typesetting,  etc. Help from any native or native-level fluency speaker of any language is always greatly appreciated; Due to the simple lyrics there is no need whatsoever to be a professional translator!</p>
                <p className='infobox'>This project is an attempt at a comparative catalog of languages. The sample texts which Wikipedia or Glosbe provide for a given language are more often than not a robotic read of the Universal Declaration of Human Rights, using formal language that isn't really indicative of what native speakers would use in their day-to-day lives; Instead, we hope to provide a better alternative to that by collecting <i>interpretive</i> translations for a surrealist text, to provide beginners a better feel of a language based on this sample. Eventually this collection is planned to be hosted online, enabling free access worldwide to the catalog.</p>
                <p className='infobox'>It is common knowledge that Google Translate is a rather rough way to introduce people to a language, simply due to its robotic and often error-prone translational tendencies which increase as the language in question gets more obscure (e.g. Sunda or Aymara). Glosbe on the other hand usually provides marginally better sample texts for a given language, but they are often texts such as the 1948 Universal Human Rights Declaration, or Religious texts. Although accurate, these samples mainly consist of formal and verbose language which many native speakers do not tend to use in their daily lives. Wikipedia does not bother to provide a sample text at all on their language pages and instead just provides the reader with a few words, if any at all.</p>
                <p className='infobox'>Every sample text in this catalog will instead be provided by one or multiple native speakers. Additionally, we encourage the peer-reviewing of native speakers in each other’s translation to aim for  truly native level sample texts. The project was started on the 12th of August, 2022 and has since gathered over 230 languages; Officially surpassing the amount of supported languages on Google Translate. Thus far, the rarest language in the collection is Kiliwa, with only 4 native speakers.</p>
                <p className='infobox'>Our source text consists of the lyrics of the Basque folk song, Piztiak, which contains day to day language in a short comprehensive non verbose manner, exempt of words otherwise unused by native speakers.</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
