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
    Grid,
    Typography,
    TextField,
    DialogActions,
    Button
} from '@material-ui/core'

// custom components 
import UploadButton from '../components/buttons/fileupload.button'
import FolderCreate from '../components/buttons/create.folder'
import UploadFile from '../components/buttons/upload.file'
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

    const [add, setAdd] = useState(false)

    const addToggle = () => {
        setAdd(!add)
    }

    const [folderDialog, setFolderDialog] = useState(false)

    const toggleFolderDialog = () => {
        setFolderDialog(true)
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

            <Dialog
            open={folderDialog}
            onClose={() => {
                setFolderDialog(!folderDialog)
            }}
            >
                <DialogContent>
                    <TextField variant="outlined" label="folder name"/>
                </DialogContent>

                <DialogActions>
                    <Button>
                        Create
                    </Button>
                </DialogActions>
            </Dialog>

            <Grid container spacing={2}>

                {props.files.map(el => {
                    if (el.level !== props.currLevel) {
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


            {((add) ? <div>
                <UploadFile handle={openDialog} />
                <FolderCreate handle={toggleFolderDialog}/>
            </div> : null)}
            <UploadButton handle={addToggle}/>

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