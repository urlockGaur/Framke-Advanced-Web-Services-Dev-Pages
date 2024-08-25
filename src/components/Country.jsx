import React, { Component } from 'react';
import { IconButton, Typography } from '@mui/material'
import {Card, CardContent, CardActions, Grid}  from '@mui/material';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import Divider from '@mui/material/Divider';


class Country extends Component {
    render() {
        const { onIncrement, onDecrement, country } = this.props;
        return (
            <Card  elevation={3} sx={{ maxWidth: 345, margin: 'auto', mt: 3, p: 0, backgroundColor: '#F5F5F5',}}>
                <CardContent sx={{ p: 1,
                    '&:last-child': {
                        pb: 1,
                     }
                 }}>
                    <Typography variant='h5' sx={{ mb: 1 }}>
                        {country.country }
                    </Typography>
                    <Divider aria-hidden="true" sx={{ mb: 2 }} />
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item>
                            <Typography variant='body1'
                            sx={{
                                mt: -.75,
                                backgroundColor: 'gold',
                                p: 1,
                                borderRadius: '50%',
                                width: 25,
                                height: 25,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                {country.gold}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6'>
                                Gold Medals
                            </Typography>
                        </Grid>
                        <Grid item>
                            <CardActions sx={{ padding: 0, margin: 0, }}>
                                <IconButton sx={{padding: 0, margin: 0,}} size="medium"aria-label="minus" onClick={() => onDecrement(country.id) } className='Country' color="secondary" >
                                    <IndeterminateCheckBoxOutlinedIcon fontSize='inherit'/>
                                </IconButton>
                                <IconButton  sx={{padding: 0, margin: 0,}} size="medium"aria-label="add" onClick={() => onIncrement(country.id) } className='Country' color="error" >
                                    <AddBoxOutlinedIcon fontSize='inherit'/>
                                </IconButton>
                            </CardActions>
                        </Grid>
                    </Grid>                    
                </CardContent>
            </Card>
        )
    }
}

export default Country