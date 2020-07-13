import React from 'react'

import {
    makeStyles,
    Fab,
    Tooltip
} from '@material-ui/core'

import {
    FileCopy
} from '@material-ui/icons'

const useStyle = makeStyles(theme => ({
    root: {
        margin: '0px',
        top: 'auto',
        right: '140px',
        bottom: '25px',
        left: 'auto',
        position: 'fixed'
    }
}))


const FileUpload = props => {
    const classes = useStyle()

    return (
        <div className={classes.root}>
            <Tooltip title="Upload File">
            <Fab 
            size="small" 
            color="primary"
            onClick={props.handle} 
            >
                <FileCopy />
            </Fab>
            </Tooltip>

        </div>
    )
}


export default FileUpload