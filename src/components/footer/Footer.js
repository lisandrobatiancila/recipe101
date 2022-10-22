import footerStyle from './Footer.module.css';

function Footer () {
    return (
        <div className={ footerStyle.footer_body }>
            <div className={ footerStyle.footer_content }>
                <section>
                    <h3 className="text_capitalize">free APIs</h3>
                    <ul>
                        <li className='text_capitalize'>
                            <a href="https://rapidapi.com">rapid API</a>
                        </li>
                        <li className='text_capitalize'>
                            <a href="https://rapidapi.com/apininjas/api/recipe-by-api-ninjas/">recipe API</a>
                        </li>
                    </ul>
                </section>
                <section className="text_capitalize">
                    <h3>hosting</h3>
                    <ul>
                        <li>
                            <a href="https://github.com">github</a>
                        </li>
                        <li>
                            <a href="https://www.heroku.com">heroku</a>
                        </li>
                    </ul>
                </section>
                <section className="text_capitalize">
                    <h3>icons</h3>
                    <ul>
                        <li>
                            <a href="/">icon</a>
                        </li>
                        <li>
                            <a href="https://www.freepik.com">freepik</a>
                        </li>
                        <li>
                            <a href="https://www.flaticon.com">flaticon</a>
                        </li>
                    </ul>
                </section>
                <section className="text_capitalize">
                    <h3>my works</h3>
                    <ul>
                        <li>
                            <a href="https://recipe101.herokuapp.com/">recipe</a>
                        </li>
                        <li>
                            <a href="https://github.com/lisandrobatiancila">my github</a>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Footer;