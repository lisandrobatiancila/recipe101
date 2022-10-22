import fixedMCStyle from './FixedMessageContainer.module.css';

function FixedMessageContainer ({ children, error_types }) {
    return (
        <div className={[
            fixedMCStyle.fixed_message_container,
            error_types?.error?fixedMCStyle.message_error:
            error_types?.warning?fixedMCStyle.message_warning:
            error_types?.success?fixedMCStyle.message_success
            :""
         ].join(' ')}>
            { children }
        </div>
    )
}

export default FixedMessageContainer;