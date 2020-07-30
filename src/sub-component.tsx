import * as React from 'react';
import { } from '@material-ui/styles';
import { makeStyles, createStyles, Button, CircularProgress, Card, CardContent, Box, Grid, Container, Theme } from '@material-ui/core';

// Propsの型定義
interface IProps {
    name: string;
    count: string;
}

interface IState {
    count: number;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2)
        },
        title: {
            borderBottom: `2px solid ${theme.palette.primary.main}`
        }
    })

);

export const SubComponent = (props: IProps): JSX.Element => {
    const classes = useStyles();
    const [count, setCount] = React.useState(0);

    const handleClick = (): void => {
        console.log('クリックされました');

        setCount(count + 1);
    }

    return (
        <div className={classes.root}>
            <h2>{props.name}</h2>
            <div>{count}</div>
            <Container>
                <Grid>
                    <Button variant="contained" color="secondary" onClick={handleClick}>
                        Add +1
                    </Button>
                </Grid>
            </Container>
        </div>
    );

}