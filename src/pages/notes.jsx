import React, { useCallback, useRef } from 'react'
import { useDropzone } from 'react-dropzone'

// custom components 
import UploadButton from '../components/buttons/fileupload.button'

const Notes = props => {

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log(acceptedFiles)
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    
    
    return (
        <div >
            <h1>Notes Page</h1>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                }

            </div>


            <UploadButton />

        </div>
    )
}

export default Notes