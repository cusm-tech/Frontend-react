import React from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'

import {
    Button,
    Typography
} from '@material-ui/core'

const Auth = props => {
    const history = useHistory()
    const route = path => {
        history.push(path)
    }

    return (
        <div>
            {(props.token)? <Typography>
                {/* {localStorage.getItem(USERNAME)} */}
                {props.username}
            </Typography>: <Button onClick={() => {route('/auth')}}>
                Login
            </Button>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        username: state.user.username,
        token: state.user.token
    }
}

export default connect(mapStateToProps)(Auth)