import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import {
    getAllFolderAsync,
    createFolderAsync
} from '../redux/actions/file'

import {
    makeStyles,
    Grid,
} from '@material-ui/core'

// custom components 
import Fs from '../components/holders/fs'
import LeftPannel from '../components/holders/left.pannel'

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

const Notes = props => {
    const classes = useStyle()

    useEffect(() => {
        props.fetAllFiles()
    }, [])




    return (
        <div className={classes.root}>


            <Grid container spacing={2}>
                <Grid item sm={3}>
                    <LeftPannel level={0} root={undefined} />
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