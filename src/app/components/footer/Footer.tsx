import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#404040', color: 'white', mt: 3, p: 2 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Stack direction="column" alignItems="center">
            <Typography variant="h6" gutterBottom>
              Movies World
            </Typography>
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} All rights reserved
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
