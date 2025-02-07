import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import { faX } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="disclaimer-premium" id="Ad">
            <div className="text">
                <p className="disclaimer-premium__title">Testar o Premium de graça</p>
                <p className="disclaimer-premium__subtitle">
                    Inscreva-se para curtir música ilimitada e podcasts só com alguns
                    anúncios. Não precisa de cartão de crédito.
                </p>
            </div>
            <div className="button">
                <button type="button">Inscreva-se grátis</button>
            </div>
            <div className="button">
                <button id="hideBtn" type="button">
                    <span><FontAwesomeIcon icon={faX} /></span>
                </button>
            </div>
        </footer>
    )
};

export default Footer;