import React, { Suspense, lazy } from 'react'
import { Box, CircularProgress, Container } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'

const About = lazy(() => import('@/components/About/About'))
const Advantages = lazy(() => import('@/components/Advantages/Advantages'))
const Footer = lazy(() => import('@/components/Footer/Footer'))
const Friends = lazy(() => import('@/components/Friends/Friends'))
const Header = lazy(() => import('@/components/Header/Header'))
const Prices = lazy(() => import('@/components/Prices/Prices'))
const Projects = lazy(() => import('@/components/Projects/Projects'))
const Skills = lazy(() => import('@/components/Skills/Skills'))
const Team = lazy(() => import('@/components/Team/Team'))

export default function Home() {
  return (
    <>
      <Head>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <Box component="main" bgcolor={'primary.main'} minHeight={'100%'}>
        <Container maxWidth="xl">
          <Suspense fallback={<CircularProgress />}>
            <Header />
          </Suspense>
          <Suspense fallback={<CircularProgress />}>
            <About />
          </Suspense>
          <Suspense fallback={<CircularProgress />}>
            <Friends />
          </Suspense>
          <Suspense fallback={<CircularProgress />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<CircularProgress />}>
            <Advantages />
          </Suspense>
          <Suspense fallback={<CircularProgress />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<CircularProgress />}>
            <Prices />
          </Suspense>
          <Suspense fallback={<CircularProgress />}>
            <Team />
          </Suspense>
          <Suspense fallback={<CircularProgress />}>
            <Footer />
          </Suspense>
        </Container>
      </Box>
    </>
  )
}
