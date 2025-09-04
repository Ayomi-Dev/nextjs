import React from 'react'
import AboutHero from './components/AboutHero'

// export const metadata = {
//   title: "About Us | NextJS"
// }

const params = { slug: "About"}

export const generateMetadata = () => {
  return {
    title: `${params.slug} | our web`
  }
}

const AboutPage = () => {
  return (
    <div>
        <AboutHero />
    </div>
  )
}

export default AboutPage