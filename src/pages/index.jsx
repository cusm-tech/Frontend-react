import React from 'react'
import {
    makeStyles,
    Grid,
    Container,
    Typography
} from '@material-ui/core'

import study from '../assets/images/study.svg'
import aim from '../assets/images/aim.svg'
import about from '../assets/images/about.svg'

const useStyle = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(4)
    },
    padup: {
        marginTop: theme.spacing(18)
    }
}))


const Index = props => {
    const classes = useStyle()

    return (
        <div className={classes.root}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h3" align="center" className={classes.padup}>
                            Welcome to CUSM!
                        </Typography>
                        <Typography variant="h5" align="center" style={{ color: 'gray' }}>
                            Study Material at your fingertips
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={study} alt="" width="100%" />
                    </Grid>

                </Grid>

                <Grid container spacing={4} className={classes.root}>
                    <Grid item xs={12} sm={6}>
                        <img src={aim} alt="" width="100%" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography variant="h4" align="center" className={classes.padup}>
                            Aim
                        </Typography>
                        <Typography variant="h6" align="center" style={{ color: 'gray' }}>
                            Our aim is to provide top-notch and high-quality study material at a faster pace to all the students currently studying in the university, without any hustle, free-of-cost.
                        </Typography>
                    </Grid>

                </Grid>

                <Grid container spacing={4} className={classes.root}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h4" align="center" className={classes.padup}>
                            About CUSM
                        </Typography>
                        <Typography variant="body1" align="center" style={{ color: 'gray' }}>
                        CUSM is your one-stop destination for all the content related to academia in Chandigarh University. Here, you will find all the assignments, projects, PPTs, modules, YouTube lecture links related to the syllabus, and especially, genuine hand-written notes, thoroughly checked by intellectual students.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={about} alt="" width="100%" />
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default Index 