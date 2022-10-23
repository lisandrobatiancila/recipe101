import stackUsedCardStyle from './StackUsedCard.module.css';
import { Link } from 'react-router-dom';

function StackUsedCard ({ stackUsed }) {
    return (
        <div className={ stackUsedCardStyle.used_card_container }>
            {
                stackUsed.map(stack =>
                    <div key = {stack.id} className={ stackUsedCardStyle.card_used }>
                        <div className={[
                            stackUsedCardStyle.used_card_header,
                            stack.name === "github"?stackUsedCardStyle.github_color:
                            stack.name === "heroku"?stackUsedCardStyle.heroku_color:
                            stack.name === "free apis"?stackUsedCardStyle.free_apis_color:
                            stack.name === "free icons"?stackUsedCardStyle.free_icons_color:
                            stack.name === "reactJS"?stackUsedCardStyle.reactJS_color:""
                        ].join(' ')}>
                            <h4 className="text_capitalize">{ stack.name.replace('apis', "API's") }</h4>
                        </div>
                        <div className={ stackUsedCardStyle.used_card_body }>
                            <div className={ stackUsedCardStyle.used_card_body_content }>
                                {
                                    stack.name === "github"?
                                    <div>
                                        <img src="../../images/github.png" width="50px" height="50px" />
                                        <p>
                                            <a href="https://github.com"
                                                target="__blank">{ stack.name }</a>
                                        </p>
                                    </div>:
                                    stack.name === "heroku"?
                                    <>
                                        <img src="../../images/heroku.png" width="50px" height="50px" />
                                        <p>
                                            <a href="https://www.heroku.com"
                                                target="__blank">{ stack.name }</a>
                                        </p>
                                    </>:
                                    stack.name === "free apis"?
                                    <>
                                        <img src="https://rapidapi.com/static-assets/default/logo-c337a41f-ea8a-4c2f-bfc0-ab1882c41f76.svg" />
                                        <p>
                                            <a href="https://rapidapi.com"
                                                target="__blank">{ stack.name }</a>
                                        </p>
                                    </>:
                                    stack.name === "free icons"?
                                    <>
                                        <img src="https://media.flaticon.com/dist/min/img/logo/flaticon_negative.svg" />
                                        <p>
                                            <a href="https://www.flaticon.com"
                                                target="__blank">{ stack.name }</a>
                                        </p>
                                    </>:
                                    stack.name === "reactJS"?
                                    <>
                                        <img src="../../images/structure.png" width="50px" height="50px" />
                                        <p>
                                            <a href="https://reactjs.org/"
                                                target="__blank">{ stack.name }</a>
                                        </p>
                                    </>:""
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default StackUsedCard;