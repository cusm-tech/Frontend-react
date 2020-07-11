import React, { useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { connect } from 'react-redux'

import {
    getAllFolderAsync
} from '../redux/actions/file'

import {
    makeStyles,
    Dialog,
    DialogTitle,
    DialogContent,
    Box,
    Grid
} from '@material-ui/core'

// custom components 
import UploadButton from '../components/buttons/fileupload.button'
import Fs from '../components/holders/fs'

const useStyle = makeStyles(theme => ({
    dialog: {
        padding: theme.spacing(2),
        height: '200px',
        border: '1px solid black'
    }
}))

const Notes = props => {
    const classes = useStyle()

    useEffect(() => {
        props.fetAllFiles()
    }, [])

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log(acceptedFiles)
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const [dialog, setDialog] = useState(false)

    const closeDialog = () => {
        setDialog(false)
    }

    const openDialog = () => {
        setDialog(true)
    }


    return (
        <div>
            <Dialog
                open={dialog}
                onClose={closeDialog}
            >
                <DialogTitle>Upload files</DialogTitle>
                <DialogContent>
                    <Box >
                        <div {...getRootProps()} className={classes.dialog}>
                            <input {...getInputProps()} />
                            {
                                isDragActive ?
                                    <p>Drop the files here ...</p> :
                                    <p>Drag 'n' drop some files here, or click to select files</p>
                            }

                        </div>
                    </Box>
                </DialogContent>

            </Dialog>

            <Grid container spacing={2}>

                {props.files.map(el => {
                    if (el.level !== props.currLevel){
                        return <></>
                    }

                    return (
                        <Fs
                            type={el.type}
                            name={el.name}
                            currLevel={props.currLevel}
                            level={el.level}
                        />
                    )
                })}

            </Grid>



            <UploadButton handle={openDialog} />

        </div>
    )
}

const mapStateToProps = state => {
    return {
        files: state.file.files,
        currLevel: state.file.currentLevel,
        root: state.file.currentRoot
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetAllFiles: () => { dispatch(getAllFolderAsync()) }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Notes)