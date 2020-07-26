import React, { useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { connect } from 'react-redux'

import {
    getAllFolderAsync,
    createFolderAsync
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
import LeftPannel from '../components/holders/left.pannel'

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
        console.log(acceptedFiles[0])
        const data = new FormData()
        data.append('doc', acceptedFiles[0])

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
        props.createFolder(props.currLevel, props.level, folderName)
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
                <Grid item sm={3}>
                    <LeftPannel />
                </Grid>

                <Grid item>

                    <Grid container spacing={2}>

                        {props.files.map(el => {
                            if (el.level !== 0) {
                                return <></>
                            }
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
        files: state.file.files,
        currLevel: state.file.currentLevel,
        root: state.file.currentRoot
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetAllFiles: () => { dispatch(getAllFolderAsync()) },
        createFolder: (level, root, name) => { dispatch(createFolderAsync(level, root, name)) }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Notes)