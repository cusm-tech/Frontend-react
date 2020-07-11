import React from 'react'

// importing images 
import folder from '../../assets/fs/folder.svg'
import pdf from '../../assets/fs/pdf.svg'

import {
    makeStyles,
    Grid,
    Card,
    Typography
} from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    root: {
        margin: theme.spacing(2, 3),
        cursor: 'pointer'
    },
    card: {
        padding: theme.spacing(1, 2)
    }
}))

const Fs = props => {

    const classes = useStyle()

    return (
        <div>
            <Grid container>
                <Card className={classes.root} elevation="0">

                    <Grid item xs={12}>
                        <img src={(props.type === 'FOLDER')?folder: pdf} alt="" width="150px" />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography align="center">
                            {props.name}
                    </Typography>
                    </Grid>

                </Card>
            </Grid>

        </div>
    )
}


export default Fs