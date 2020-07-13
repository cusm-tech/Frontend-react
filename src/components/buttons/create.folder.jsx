import React from 'react'

import {
    makeStyles,
    Fab,
    Tooltip
} from '@material-ui/core'

import {
    Folder
} from '@material-ui/icons'

const useStyle = makeStyles(theme => ({
    root: {
        margin: '0px',
        top: 'auto',
        right: '90px',
        bottom: '25px',
        left: 'auto',
        position: 'fixed'
    }
}))


const CreateFolder = props => {
    const classes = useStyle()

    return (
        <div className={classes.root}>
            <Tooltip title="create Folder">
            <Fab size="small" color="secondary">
                <Folder />
            </Fab>
            </Tooltip>

        </div>
    )
}


export default CreateFolder