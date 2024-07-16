import React from 'react';
import { Box, Grid, Stack, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: 'black', color: 'white', mt: 5, py: 2 ,borderTop:'2px solid white'}}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Stack direction="column" alignItems="center">
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Movies World
            </Typography>
            <Typography variant="body2" align="center" sx={{ mb: 2 }}>
              &copy; {new Date().getFullYear()} All rights reserved
            </Typography>
            <Stack direction="row" spacing={2}>
              <IconButton aria-label="facebook" href="#" sx={{ color: 'white' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="twitter" href="#" sx={{ color: 'white' }}>
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="instagram" href="#" sx={{ color: 'white' }}>
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="linkedin" href="#" sx={{ color: 'white' }}>
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
