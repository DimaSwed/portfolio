'use client'
import React, { FC, useState, useEffect } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { Box, Skeleton } from '@mui/material'
import { projectsImg } from '@/common/ProjectsImg'
import Image from 'next/image'

export const ProjectItemList: FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setImagesLoaded(true)
    }, 0)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 6, lg: 6 }}>
        {projectsImg.map((item) => (
          <Grid key={item.id} xs={2}>
            {!imagesLoaded ? (
              <Skeleton animation="wave" variant="rectangular" width={350} height={200} />
            ) : (
              <Image
                src={item.link}
                alt={item.name}
                width={350}
                height={400}
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  margin: 0,
                  display: 'block',
                  maxWidth: '350px'
                }}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

// БЕЗ СКЕЛЕТОНА
// import React, { FC } from 'react'
// import Grid from '@mui/material/Unstable_Grid2'
// import { Box } from '@mui/material'
// import { projectsImg } from '@/common/ProjectsImg'
// import Image from 'next/image'

// export const ProjectItemList: FC = () => {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 6, lg: 6 }}>
//         {projectsImg.map((item) => (
//           <Grid key={item.id} xs={2}>
//             <Image
//               src={item.link}
//               alt={item.name}
//               width={350}
//               height={400}
//               loading="lazy"
//               style={{
//                 width: '100%',
//                 height: 'auto',
//                 margin: 0,
//                 display: 'block',
//                 maxWidth: '350px'
//               }}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   )
// }
