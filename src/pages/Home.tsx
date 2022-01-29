import React, { useState } from 'react'
import { videos } from 'mocks/videos'
import { Box, Container, Grid } from '@mui/material'
import { AppBar } from 'components/AppBar'
import Video from 'components/Video'
import { IVideo } from 'interfaces/IVideo'

const Home: React.FC = () => {
  const [data] = useState(() => {
    const arr: IVideo[] = []

    arr.push(...videos, ...videos)

    return arr
  })

  return (
    <Box mt='100px' mb='40px' >
      <AppBar />

      <Container>
        <Grid container spacing={2}>
          {data.map((video, index) => (
            <Grid item key={video.title + index} lg={3} md={4} sm={6} xs={12}>
              <Video data={video} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}   

export default Home