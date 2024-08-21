import React, { Component } from 'react';
import { IconButton, Typography } from '@mui/material'
import {Card, CardContent, CardActions, Grid}  from '@mui/material';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Divider from '@mui/material/Divider';


class Country extends Component {
    state = { 
        name: 'United States',
        gold: 0,

    }

    //helper method
   
    handleIncrement = () => {
        // the setState method is inherited from the base Component class
        // when a component's state is altered, it is re-rendered asynchronously by react
            this.setState({ gold: this.state.gold + 1 })
    }
    render() {
        return (
            <Card  elevation={3} sx={{ maxWidth: 345, margin: 'auto', mt: 3, p: 0 }}>
                <CardContent sx={{ p: 1,
                    '&:last-child': {
                        pb: 1,
                     }
                 }}>
                    <Typography variant='h5' sx={{ mb: 1 }}>
                        {this.state.name}
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
                                {this.state.gold}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6'>
                                Gold Medals
                            </Typography>
                        </Grid>
                        <Grid item>
                            <CardActions sx={{ padding: 0, margin: 0, }}>
                                <IconButton  size="large"aria-label="add" onClick={this.handleIncrement} color="success" >
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