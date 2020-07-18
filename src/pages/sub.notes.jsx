import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import {
    getAFolder,
    changeDir,
    createFolderAsync,
    uploadFile
} from '../redux/actions/file'
import { useDropzone } from 'react-dropzone'

import UploadButton from '../components/buttons/fileupload.button'
import FolderCreate from '../components/buttons/create.folder'
import UploadFile from '../components/buttons/upload.file'
import Fs from '../components/holders/fs'

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

const useStyle = makeStyles(theme => ({
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

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log(acceptedFiles[0])
        props.uploadFile(acceptedFiles[0], level, root, 'name')

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

    const [folderName, setFolderName] = useState('')

    const folderNameHandler = e => {
        setFolderName(e.target.value)
    }

    const createFolder = () => {
        if (folderName.trim == '') {
            return
        }
        props.createFolder(level, root, folderName)
        setFolderDialog(false)
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
                    <TextField
                        variant="outlined"
                        label="folder name"
                        onChange={folderNameHandler}
                    />
                </DialogContent>

                <DialogActions>
                    <Button
                        onClick={createFolder}
                    >
                        Create
                    </Button>
                </DialogActions>
            </Dialog>

            <Grid container spacing={2}>
                {props.files.map(el => {
                    if(el.level !== level)
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


            {((add) ? <div>
                <UploadFile handle={openDialog} />
                <FolderCreate handle={toggleFolderDialog} />
            </div> : null)}
            <UploadButton handle={addToggle} />
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
        uploadFile: (file, level, root, name) => {dispatch(uploadFile(file, level, root, file))}
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(SubNotes)