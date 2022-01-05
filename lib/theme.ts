import {extendTheme, Theme} from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'

interface StyleOptions {
   theme: Theme
   colorMode: 'light' | 'dark'
   colorScheme: string
}

const styles = {
   global: (props: StyleOptions) => ({
      body: {
         bg: mode('#f0e7db', '#202023')(props)
      }
   })
}


const components = {
   Heading: {
      variants: {
         'section-title': {
            textDecoration: 'underline',
            fontSize: 20,
            textUnderlineOffset: 6,
            textDecorationColor: '#525252',
            textDecorationThickness: 4,
            marginTop: 3,
            marginBottom: 3,
         }
      }
   },
   Link: {
      baseStyle: (props: StyleOptions) => ({
         color: mode('#3d7aed', '#ff63c3')(props),
         textUnderlineOffset: 3,
         fontFamily: "'Syne Mono', monospace"
      })
   }
}

const fonts = {
   heading: "'Syne Mono', monospace",
   body: "'Inconsolata', monospace",
}

const colors = {
   glassTeal: '#88ccca'
}

const config = {
   initialColorModeL: 'dark'
}

export const theme = extendTheme({
   config,
   styles,
   components,
   colors,
   fonts,
})