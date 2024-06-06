import { About } from '@/components/About'
import { Advantages } from '@/components/Advantages'
import { Footer } from '@/components/Footer/Footer'
import { Friends } from '@/components/Friends/Friends'
import { Header } from '@/components/Header/Header'
import { Prices } from '@/components/Prices'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills/Skills'
import { Team } from '@/components/Team'
import { Box, Container } from '@mui/material'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box component="main" bgcolor={'primary.main'} minHeight={'100%'}>
        <Container maxWidth="xl">
          <Header />
          <About />
          <Friends />
          <Skills />
          <Advantages />
          <Projects />
          <Prices />
          <Team />
          <Footer />
        </Container>
      </Box>
    </>
  )
}
