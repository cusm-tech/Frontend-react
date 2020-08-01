import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { connect } from 'react-redux'
import {
    createFolderAsync as createFolder
} from '../../redux/actions/file'

import {
    makeStyles,
    Grid,
    FormControl,
    TextField,
    Button,
    Divider
} from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    fileUploadArea: {
        border: '1px solid black',
        padding: theme.spacing(1),
        borderRadius: '6px'
    },
}))

/**
 * Upload file
 * create folder
 */

const LeftPannel = props => {
    const classes = useStyle()

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log(acceptedFiles[0])
        const data = new FormData()
        data.append('doc', acceptedFiles[0])

    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const [folderName, setFolderName] = React.useState('')

    const [fileName, setFileName] = React.useState('')

    const createFolder = () => {
        if (folderName.trim == '') {
            return
        }
        props.createFolder(props.level, props.root, folderName)
    }

    return (
        <div>

            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <TextField
                            variant="outlined"
                            label="Foldername"
                            value={folderName}
                            onChange={(e) => { setFolderName(e.target.value) }}
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <Button onClick={createFolder}>
                        Create
                    </Button>
                </Grid>

                <Grid item xs={12}>
                    <Divider />

                </Grid>

                <Grid item xs={12}>

                    <FormControl fullWidth>
                        <TextField
                            variant="outlined"
                            label="Filename"
                            value={fileName}
                            onChange={(e) => { setFileName(e.target.value) }}
                        />
                    </FormControl>

                </Grid>

                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <div {...getRootProps()} className={classes.fileUploadArea}>
                            <input {...getInputProps()} />
                            {
                                isDragActive ?
                                    <p>Drop the files here ...</p> :
                                    <p>Drag 'n' drop some files here, or click to select files</p>
                            }

                        </div>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <Button>
                        Upload
                    </Button>
                </Grid>

            </Grid>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        currLevel: state.file.currentLevel,
        root: state.file.currentRoot
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createFolder: (level, root, name) => { dispatch(createFolder(level, root, name)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftPannel)