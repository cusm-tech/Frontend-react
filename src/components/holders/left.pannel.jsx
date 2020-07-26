import React from 'react'

import {
    makeStyles,
    Grid,
    FormControl,
    TextField,
    Button,
    Divider
} from '@material-ui/core'

const LeftPannel = props => {

    return (
        <div>

            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <TextField
                            variant="outlined"
                            label="Foldername"
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <Button>
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
                            type="file"
                        />
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

export default LeftPannel