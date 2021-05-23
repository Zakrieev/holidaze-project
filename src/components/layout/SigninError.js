import PropTypes from "prop-types";

export default function SigninValidate({children}) {
    return <div>{children}</div>
}

SigninValidate.propTypes = {
    children:PropTypes.node.isRequired,
};