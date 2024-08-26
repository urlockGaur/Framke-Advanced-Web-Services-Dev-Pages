import React, { Component } from 'react';
import { Typography } from '@mui/material'
import {Card, CardContent, Badge, Box }  from '@mui/material';
import Divider from '@mui/material/Divider';
import Medal from './Medal';


class Country extends Component {
    render() {
      const { onIncrement, onDecrement, country } = this.props;
      const totalMedals = country.gold + country.silver + country.bronze;
  
      return (
        <Card elevation={3} sx={{ maxWidth: 345, mt: 20, p: 2, backgroundColor: '#F5F5F5' }}>
          <CardContent sx={{ p: 1, '&:last-child': { pb: 1 } }}>
          <Box sx={{ position: 'relative', display: 'inline-block', mb: 1 }}>
                    <Typography variant='h5'>
                        {country.country}
                        <Badge 
                            badgeContent={totalMedals} 
                            color='secondary' 
                            invisible={totalMedals === 0} // Hide badge if totalMedals is 0
                            sx={{
                                position: 'absolute',
                                top: 6,
                                right: -12,
                                transform: 'translate(50%, -50%)'
                            }} 
                        />
                    </Typography>
                </Box>
            <Divider aria-hidden="true" sx={{ mb: 1 }} />
  
            <Medal
              type="gold"
              count={country.gold}
              onIncrement={() => onIncrement(country.id, 'gold')}
              onDecrement={() => onDecrement(country.id, 'gold')}
            />
  
            <Medal
              type="silver"
              count={country.silver}
              onIncrement={() => onIncrement(country.id, 'silver')}
              onDecrement={() => onDecrement(country.id, 'silver')}
            />
  
            <Medal
              type="bronze"
              count={country.bronze}
              onIncrement={() => onIncrement(country.id, 'bronze')}
              onDecrement={() => onDecrement(country.id, 'bronze')}
            />
  
            <Divider aria-hidden="true" sx={{ mt: 2, mb: 0 }} />
          </CardContent>
        </Card>
      );
    }
  }
  
  export default Country