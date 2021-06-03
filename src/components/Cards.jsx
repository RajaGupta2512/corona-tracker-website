import { Box, CircularProgress, Grid, makeStyles, Typography } from "@material-ui/core";
import Card from './Card';


const useStyles = makeStyles({
    component: {
        margin: '50px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    container: {
        color: '#8ACA2B',
        marginBottom: 40
    }
})

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    const classes = useStyles();

    if (!confirmed) {
        return <CircularProgress />
    }

    return (
        <Box className={classes.component}>
            <Typography className={classes.container} variant="h4" gutterBottom>Covid-19 Cases Globally</Typography>
            <Grid container spacing={3} justify="center">
                <Card
                    cardTitle="Infected"
                    value={confirmed.value}
                    description="Number of Infected Cases of Covid-19"
                    lastUpdate={lastUpdate} />
                <Card
                    cardTitle="Recovered"
                    value={recovered.value}
                    description="Number of Recovered Cases from Covid-19"
                    lastUpdate={lastUpdate} />
                <Card
                    cardTitle="Deaths"
                    value={deaths.value}
                    description="Number of Deaths Caused by Covid-19"
                    lastUpdate={lastUpdate} />
            </Grid>
        </Box>
    )
}

export default Cards;