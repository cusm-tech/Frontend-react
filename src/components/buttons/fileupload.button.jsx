import React from 'react'

import {
    makeStyles,
    Fab,
    Tooltip
} from '@material-ui/core'

import {
    Add
} from '@material-ui/icons'

const useStyle = makeStyles(theme => ({
    root: {
        margin: '0px',
        top: 'auto',
        right: '20px',
        bottom: '20px',
        left: 'auto',
        position: 'fixed'
    }
}))

const FileUploadButton = props => {
    const classes = useStyle()

    return (
        <div className={classes.root}>
            <Tooltip title="Add">
                <Fab 
                color="primary"
                onClick={props.handle}
                >
                    <Add fontSize="large" />
                </Fab>

            </Tooltip>
            
        </div>
    )
}

export default FileUploadButton