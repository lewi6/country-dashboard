import { Drawer } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import SideBar from '../components/drawer'
import InfoCard from '../components/InfoCard'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Select from '@mui/material/Select';


export const styles = (theme:any) => ({
  marginLg: {    
    marginLeft: '30px',   
  },
});


const Other: NextPage = (info) => {

  return (
    <Box
      sx={{
        display: 'grid',
        gridAutoColumns: '1fr',
        gap: 1,
      }}
    >
      <SideBar />
      <Head>
        <title>Bag Countries</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid item gridColumn={{ lg: '2/5', sm: '2/5' }} sx={{ display: 'block', marginLeft: 5 }}  >
        <Grid item container xs={12} spacing={2}>
          <Grid item md={3} xs={6}>
            <Link href="/">
              <a>
                <Typography variant="h4" noWrap style={{ "marginLeft": "15px", "marginRight": "2px" }} >
                  <ArrowBackIcon />

                  Back
                </Typography>
              </a>
            </Link>
          </Grid>
        </Grid >

        <InfoCard />
      </Grid >

    </Box >
  )
}

export default Other