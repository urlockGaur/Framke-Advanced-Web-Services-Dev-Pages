import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Badge, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

class Header extends React.Component {
  render() {
    const { totalOverallMedals } = this.props; // Destructure props to get total medals

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#570047', height: 80 }}>
          <Toolbar sx={{ height: '100%'}}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            
            <Grid container alignItems="center" justifyContent="space-between" sx={{ flexGrow: 1 }}>
              <Grid item>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="h3" component="div">
                    Olympic Medals
                  </Typography>
                  <Badge 
                    badgeContent={totalOverallMedals} 
                    color="secondary" 
                    sx={{ 
                      ml: 2, // Margin-left to position the badge
                      mt: -4,
                    }} 
                  />
                </Box>
              </Grid>

              <Grid item>
                <Button color="inherit">Login</Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default Header;