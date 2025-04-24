import '../styles/WatIsPmp.css';
import { Link } from 'react-router-dom';

function WatIsPmp() {
  return (
    <main className="pmp-layout">
      <section className="pmp-canvas">
        {/* Three.js canvas */}
        <div className="canvas-placeholder">
            <button className="button">Start 3D experience</button>
        </div>
      </section>

      <aside className="pmp-info-box">
        <h2>Wat is PMP?</h2>
        <h3>Instructies</h3>
        <p>
          Klik en sleep om het 3D-model van het abdomen te draaien en te zoomen op specifieke delen van het buikvlies en de tumor.
        </p>
        <Link to="/Behandelingsopties" className="button">Meer behandelingen</Link>
      </aside>
    </main>
  );
}

export default WatIsPmp;
