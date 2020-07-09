import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import {
    makeStyles,
    Dialog,
    DialogTitle,
    DialogContent,
    Box
} from '@material-ui/core'

// custom components 
import UploadButton from '../components/buttons/fileupload.button'

const useStyle = makeStyles(theme => ({
    dialog: {
        padding: theme.spacing(2),
        height: '200px',
        border: '1px solid black'
    }
}))

const Notes = props => {
    const classes = useStyle()

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

            <h1>Notes Page</h1>

            <UploadButton handle={openDialog} />

        </div>
    )
}

export default Notes