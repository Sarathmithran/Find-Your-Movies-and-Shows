"use client";
import { Container, Stack } from '@mui/material';
import Image from 'next/image'
import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <Stack component={'div'} className='header-sec'>
      <Container sx={{justifyContent:'center'}}>
          <Image src={'/logo.png'} height={100} width={100} alt='logo'/>
      </Container>
    </Stack>
  )
}

export default Header