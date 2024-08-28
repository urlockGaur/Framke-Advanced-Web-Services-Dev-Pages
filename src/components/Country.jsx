import React, { Component } from 'react';
import { Typography } from '@mui/material'
import {Card, CardContent, Badge, Box, IconButton }  from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Divider from '@mui/material/Divider';
import Medal from './Medal';


class Country extends Component {
    render() {
      const { onIncrement, onDecrement, onDelete, country } = this.props;
      const totalMedals = country.gold + country.silver + country.bronze;
  
      return (
        <Card elevation={3} sx={{ maxWidth: 345, mt: 20, p: 2, backgroundColor: '#F5F5F5' }}>
        <CardContent sx={{ p: 1, '&:last-child': { pb: 1 } }}>
          {/* Outer Box for relative positioning */}
          <Box
            sx={{
              position: 'relative', 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between', 
              mb: 1,
            }}
          >
            {/* Flexbox container to keep Typography and Badge aligned */}
            <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
              {/* Typography component for country name */}
              <Typography variant='h5' sx={{ mr: 1 }}>
                {country.country}
              </Typography>
              
              <Badge
                badgeContent={totalMedals}
                color='secondary'
                invisible={totalMedals === 0}
                sx={{
                  position: 'absolute',
                  top: '2px', 
                  right: '-6px', 
                }}
              />
            </Box>
            <IconButton
              size='medium'
              aria-label='delete'
              onClick={() => onDelete(country.id)}
              color='secondary'
              sx={{
                position: 'relative',
                right: '-10px',
                padding: 0,
                margin: 0,
              }}
            >
              <DeleteForeverIcon fontSize='inherit' />
            </IconButton>
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