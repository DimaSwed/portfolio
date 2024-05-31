import Navbar from '@/components/Navbar'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <Box component="main" bgcolor={'primary.main'} minHeight={'100vh'}>
      <Navbar />
    </Box>
  )
}
