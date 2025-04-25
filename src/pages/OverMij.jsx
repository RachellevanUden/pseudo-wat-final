import TextBlock from '../components/TextBlock'
import '../styles/OverMij.css';
import { GoGoal } from "react-icons/go";
import ContactForm from '../components/ContactForm';
import StoryCarousel from '../components/StoryCarousel';

function OverMij() {

    const stories = [
        {
            title: "De Diagnose in Aanloop",
            subtitle: "Een lange weg naar duidelijkheid",
            text: (
              <>
                In <strong>maart 2022</strong> begon ik met vage buikklachten.
                Pas in <strong>juni 2023</strong> werd op een MRI een afwijking gezien.
                In <strong>augustus</strong> ging ik naar het ziekenhuis,
                en op <strong>2 oktober 2023</strong> werd ik geopereerd.
                Die dag werd vermoed dat het PMP was.
                Op <strong>11 oktober 2023</strong> kreeg ik de definitieve diagnose. Ik was <strong>27 jaar</strong>.
              </>
            )
        },
        {
            title: "De Emotionele Klap",
            subtitle: "Wat voel je als je niets wilt voelen?",
            text: (
              <>
                Ik wist niet wat ik moest voelen. Alles ging snel, en ik wilde het eigenlijk gewoon niet weten.
                Er was angst, ongeloof, woede —
                en telkens weer die gedachte: 'Waarom ik?'
                Ik probeerde het te vermijden, zelfs tijdens de IVF-intake op <strong>25 oktober</strong>,
                die voelde alsof ik er niet thuishoorde.
              </>
            )
        },
        {
            title: "Het Keerpunt",
            subtitle: "Van vermijden naar begrijpen",
            text: (
              <>
                Op <strong>1 december 2023</strong> kreeg ik mijn HIPEC-operatie. 
                Op <strong>7 december</strong> werd ik ontslagen uit het ziekenhuis. 
                Pas toen begon ik echt te beseffen wat er allemaal was gebeurd. 
                <strong>Eind december</strong> sloot ik me aan bij de PMP Contactgroep. 
                Nu wil ik iets terugdoen — iets dat ik zelf had willen hebben op dat moment.
              </>
            )
        }
      ];

    return (
        <main className='container'>
            <h2 id='OverMij'>Over mij</h2>
            <div className="mijnVerhaal-sectie">
                <TextBlock title="Mijn verhaal">
                <div className="verhaal-layout">
                    <div className="verhaal-tekst">
                    <p>
                        Mijn naam is Rachelle van Uden en in <strong>oktober 2023</strong> kreeg ik de diagnose Pseudomyxoma Peritonei (PMP).
                        <br />In het begin voelde ik me overweldigd, bang en onzeker. Ik durfde geen informatie op te zoeken — wat ik tegenkwam was te medisch, te technisch of vooral angstaanjagend.
                        <br /><br />
                        Pas na mijn operatie in december sloot ik me aan bij de PMP Contactgroep. Tot die tijd had ik het gevoel alsof ik m'n hoofd in het zand stak. Ik had behoefte aan informatie, maar dan op een manier die rust gaf — niet paniek.
                    </p>
                    </div>

                    <div className="video-wrapper">
                        <div className="video-placeholder">
                            <span className="play-icon">▶</span>
                        </div>
                    </div>
                </div>
                </TextBlock>
            </div>

            <h2 className='citaat'>“In het begin wist ik niet wat ik moest voelen. Ik denk dat ik lange tijd gewoon niks wílde voelen. Er was angst, ongeloof, woede — en vooral de vraag: 'Waarom ik?'”</h2>
   
            <div className="stories-sectie">
                <StoryCarousel stories={stories} />
            </div>

            <h2 className='citaat'>“Ik was bang, boos en verward. Daarom wilde ik iets maken dat rust en duidelijkheid biedt.”</h2>

            <div className="missie-sectie">
                <TextBlock className= "missie"
                    title="Mijn missie"
                    icon={<GoGoal />}
                    sideBySide={true}
                    >
                    <p>
                        Dit platform, <strong>'Pseudo-wat?'</strong>, is ontworpen om nieuwe PMP-patiënten en hun naasten te helpen de eerste stappen te zetten in hun reis. Het biedt duidelijke en begrijpelijke informatie over de ziekte en behandelingsopties, zonder dat je wordt geconfronteerd met angstaanjagende beelden of te technische uitleg. Ik wil dat patiënten zich geïnformeerd, gerustgesteld en ondersteund voelen, zodat ze zich sterker voelen in hun behandeltraject.
                    </p>
                </TextBlock>

            </div>
        
            <div className="contact-sectie">
                <ContactForm />
            </div>
        </main>

    );
}

export default OverMij;