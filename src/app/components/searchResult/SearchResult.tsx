import React from 'react';
import { MovieDataType } from '@/app/services/classes';
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, CircularProgress } from '@mui/material';
import './SearchResult.css';
import { MovieServices } from '@/app/services/movieServices';
interface SearchResultProps {
  movies: MovieDataType[];
  loading: boolean;
}

const SearchResult: React.FC<SearchResultProps> = ({ movies, loading }) => {
  return (
    <>
      {loading && <CircularProgress sx={{ position: 'absolute', top: '65%', left: '50%', transform: 'translate(-50%, -50%)' }} />}
      {!loading && (
        <Grid container spacing={4} justifyContent="center">
          {movies.map((movie) => (
            <Grid item key={movie.imdbID} xs={12} sm={6} md={4} lg={3}>
              <Card className='movie-card' sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={movie?.Poster}
                  alt={movie?.Title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                    {movie?.Title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Year: {movie?.Year}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Type: {movie?.Type}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    IMDb ID: {movie?.imdbID}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

export default SearchResult;
