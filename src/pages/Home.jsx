import Header from '../components/Header'
import TextBlock from '../components/TextBlock'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import { FaBookOpen, FaHandsHelping, FaHeartbeat } from 'react-icons/fa'

function Home() {
    return (
        <> 
        <Header />
            <main className='container'>
                <h2 id='Home'>Waarom ik dit platform maakte</h2>
                    <section className='video-section'>
                        <div className='video-placeholder home-video-placeholder"'>
                            <span className="play-icon">▶</span>
                        </div>
                    </section>
                    <h2 id='Home'>Wat kun je hier vinden?</h2>
                <div className= "info-sectie">
                    <TextBlock
                        title="Duidelijke informatie"
                        icon={<FaBookOpen />} >
                        <ul>
                            <li>Begrijp wat PMP is, zonder medische overload.</li>
                            <li>Korte, betrouwbare uitleg in begrijpelijke taal.</li>
                        </ul>
                    </TextBlock>  
                    <TextBlock
                        title="Minder angst, meer overzicht"
                        icon={<FaHandsHelping />} >
                        <ul>
                            <li>We begeleiden je stap voor stap.</li>
                            <li>Geen schokkende beelden, maar geruststelling.</li>
                        </ul>
                    </TextBlock>
                    <TextBlock
                        title="Speciaal voor patienten"
                        icon={<FaHeartbeat />} >
                        <ul>
                            <li>Wat je moet weten na je diagnose.</li>
                            <li>Geschikt voor elk niveau van voorkennis.</li>
                        </ul>
                    </TextBlock>
                </div>

                <h2 id='Home'>Ontdek het platform</h2>
                <div className= "ontdek-sectie">
                    <TextBlock
                        title="Wat is Pseudomyxoma Peritonei (PMP)?"
                        cta={<Link to="/WatIsPmp" className="button">Leer meer over PMP</Link>} >
                        <p>PMP is een zeldzame vorm van kanker die meestal in de appendix begint en slijm produceert in de buikholte. De ziekte kan buikklachten veroorzaken en wordt meestal behandeld met een combinatie van chirurgie en chemotherapie.</p>
                    </TextBlock>  
                    <TextBlock
                        title="Behandelingsopties"
                        cta={<Link to="/Behandelingsopties" className="button">Meer behandelingen</Link>} >
                        <p>De standaardbehandeling voor PMP heet CRS-HIPEC. Dit is een combinatie van een operatie om het slijm en de tumoren te verwijderen (CRS), gevolgd door een spoeling van de buikholte met warme chemotherapie (HIPEC).</p>
                    </TextBlock>
                </div>
                          
            </main>
        </>
    );
}

export default Home;