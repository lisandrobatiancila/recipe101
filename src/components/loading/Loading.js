import loadingStyle from './Loading.module.css';

function Loading ({message}) {
    return (
        <div className={ loadingStyle.loading_container }>
            <span>{ message }</span>
            <div className={ loadingStyle.loading_body }>
            </div>
        </div>
    )
}

export default Loading;