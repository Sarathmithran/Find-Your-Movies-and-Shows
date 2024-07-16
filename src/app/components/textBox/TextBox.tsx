"use client";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { MovieServices } from '@/app/services/movieServices';
import SearchResult from '../searchResult/SearchResult';
import { MovieDataType } from '@/app/services/classes';
import { Container, Stack, Typography } from '@mui/material';

export default function CustomizedInputBase() {
  const [inputValue, setInputValue] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [movies, setMovies] = React.useState<MovieDataType[]>([]);

  const handleSearch = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setMessage(''); 
    try {
      const fetchedMovies = await MovieServices.getMovie(inputValue);
      if (fetchedMovies?.length > 0) {
        setMovies(fetchedMovies);
        setMessage(`Found ${fetchedMovies.length} results for ${inputValue}`);
      } else {
        setMovies([]);
        setMessage(`Sorry, no results found for ${inputValue}`);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMessage('An error occurred while searching for movies. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  const handleClear = () => {
    setInputValue('');
    setMessage('')
    setMovies([]);
  };

  return (
    <Stack component={'div'}>
      <Stack component={'div'} direction={'row'} sx={{display:'flex',justifyContent:'center',pb:'30px',pt:'50px'}}>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          onSubmit={handleSearch}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search your favourite movies & shows.."
            inputProps={{ 'aria-label': 'search movies' }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {
            inputValue && (
            <IconButton sx={{ p: '10px' }} aria-label="clear" onClick={handleClear}>
              <ClearIcon />
            </IconButton>
            )
          }
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Stack>
      <Container component={'div'} sx={{minHeight:'35vh'}}>
      {message && <Typography variant="body1" sx={{ textAlign:'center',mt: 1,mb:2 }}>{message}</Typography>}
        <SearchResult movies={movies} loading={loading}/>
      </Container>
    </Stack>
  );
}
