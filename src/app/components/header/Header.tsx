"use client";
import { Container } from '@mui/material';
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <Container sx={{justifyContent:'center'}}>
        <Image src={'/logo.png'} height={100} width={100} alt='logo'/>
    </Container>
  )
}

export default Header