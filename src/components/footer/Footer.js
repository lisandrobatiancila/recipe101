import footerStyle from './Footer.module.css';
import { Link } from 'react-router-dom';

function Footer () {
    return (
        <div className={ footerStyle.footer_body }>
            <section>
                <h3>free apis</h3>
                <ul>
                    <li>
                        <Link to="#"></Link>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Footer;