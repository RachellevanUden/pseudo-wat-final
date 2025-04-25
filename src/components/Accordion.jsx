import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import '../styles/Accordion.css';

function Accordion({ icon, title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="accordion-icon">{icon}</span>
        <h2>{title}</h2>
        <span className="accordion-toggle">{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}

export default Accordion;
