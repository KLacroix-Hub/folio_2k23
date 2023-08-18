// frontend/pages/index.tsx

import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
import Header from '@/components/Header/Header'
import Slider from '@/components/Slider'
import Image from 'next/image'
import { useState } from 'react'
import BoutonView from '@/components/BoutonView'

function urlFor (source:any) {
  return imageUrlBuilder(client).image(source)
}

const Projects = ({posts}:any) => {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  
  const handleMouseMove = (e:any) => {
    setPosition({ x: e.pageX, y: e.pageY });

  };
  return (
     <div className='projects'
      onMouseMove={handleMouseMove}
     >
     <Header />
     <div className='projects-title'>
      <h1 className='headline headline-lg title'>MY projects</h1>
      <span className='projects-title__number body body-posts'>{posts.length}</span>
     </div>
     <Slider responsive={
        {
          0:{
            items:1,

          },
          768:{
            items:2,
          },
          1024:{
            items:2,
            loop:false,
            margin:20,
            stagePadding: 150,
          }
        }
     }>
        {posts.length > 0 && posts.map(
          ({ _id, title = '', slug = '',name="" ,publishedAt = '', mainImage, projectType="", year=""}:any) =>
            slug && (
                <Link 
                  key={_id}
                  href={`/projects/${encodeURIComponent(slug.current)}`}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
              <div className='item'
              >
                  <Image
                    src={urlFor(mainImage)
                      .url()}
                    alt={`${name}'s picture`}
                    width={530}
                    height={510}
                  />
                <div className="item-informations">
                    <h2 className='headline headline-sm'>{title}</h2>
                  <div className='item-informations__type body'>
                    <span className='body-md'>{projectType}</span>
                    {' '}
                    <span className='body-sm'>{`${year}`}</span>
                  </div>
                </div>
                {' '}
              </div>
                </Link>
            )
        )}
     </Slider>
       {isHovering &&
        <BoutonView
        position={position}
        >
          View
        </BoutonView>
      }
     </div>
    )
}

export async function getStaticProps() {
    const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt <= now()] | order(publishedAt desc)
    `)
    return {
      props: {
        posts
      }
    }
}

export default Projects