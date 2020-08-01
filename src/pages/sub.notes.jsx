import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import {
    getAFolder,
    createFolderAsync,
    uploadFile
} from '../redux/actions/file'

// importing custom components
import Fs from '../components/holders/fs'
import LeftPannel from '../components/holders/left.pannel'

import {
    makeStyles,
    Grid
} from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(3)
    },
    dialog: {
        padding: theme.spacing(2),
        height: '200px',
        border: '1px solid black'
    }
}))

const SubNotes = props => {
    let { level, root } = useParams()
    const classes = useStyle()

    useEffect(() => {
        props.fetchFiles(level, root)
    })

    return (
        <div className={classes.root}>

            <Grid container spacing={2}>

                <Grid item xs={3}>
                    <LeftPannel level={level} root={root} />
                </Grid>

                <Grid item >

                    <Grid container spacing={2}>
                        {props.files.map(el => {
                            if (el.level !== level)
                                return (
                                    <Fs
                                        type={el.type}
                                        name={el.name}
                                        currLevel={props.currLevel}
                                        level={el.level}
                                        id={el._id}
                                    />
                                )
                        })}
                    </Grid>

                </Grid>

            </Grid>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        files: state.file.files
    }
}

const mapDispatchToprops = dispatch => {
    return {
        fetchFiles: (level, root) => { dispatch(getAFolder(level, root)) },
        createFolder: (level, root, name) => { dispatch(createFolderAsync(level, root, name)) },
        uploadFile: (file, level, root, name) => { dispatch(uploadFile(file, level, root, file)) }
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(SubNotes)