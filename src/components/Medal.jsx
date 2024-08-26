import React from "react";
import { IconButton, Typography, CardActions, Grid } from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';

const Medal = ({ type, count, onIncrement, onDecrement }) => {
    const backgroundColor = {
        gold: 'gold',
        silver: 'silver',
        bronze: '#CD7F32' // 'rgb(205, 127, 50)'
    }[type];

    return (
        <Grid container alignItems="center" spacing={2}>
            <Grid item>
                <Typography variant='body1'
                    sx={{
                        backgroundColor: backgroundColor,
                        p: 1,
                        borderRadius: '50%',
                        width: 25,
                        height: 25,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        mt: 1,
                    }}>
                    {count}
                </Typography>
            </Grid>
            <Grid item xs>
                <Typography variant='h6'>
                    {`${type.charAt(0).toUpperCase() + type.slice(1)} Medals`}
                </Typography>
            </Grid>
            <Grid item>
                <CardActions sx={{ padding: 0, margin: 0, justifyContent: 'flex-end' }}>
                    <IconButton 
                        sx={{ padding: 0, margin: 0 }} 
                        size="large" 
                        aria-label="minus" 
                        onClick={onDecrement} 
                        color="secondary"
                        disabled={count === 0} // Disable if count is 0
                    >
                        <IndeterminateCheckBoxOutlinedIcon fontSize='inherit'/>
                    </IconButton>
                    <IconButton 
                        sx={{ padding: 0, margin: 0 }} 
                        size="large" 
                        aria-label="add" 
                        onClick={onIncrement} 
                        color="error"
                    >
                        <AddBoxOutlinedIcon fontSize='inherit'/>
                    </IconButton>
                </CardActions>
            </Grid>
        </Grid>
    );
};

export default Medal;
