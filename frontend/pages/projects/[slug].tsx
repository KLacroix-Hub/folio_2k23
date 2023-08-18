// [slug].tsx

import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import client from '../../client'
import Image from 'next/image'
import Header from '@/components/Header/Header'
import Slider from '@/components/Slider'

function urlFor (source:any) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }:any) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <Image
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}

const Post = ({post}:any) => {
  const {
    title = 'Missing title',
    body = [],
    imageGallery = [],
    client = "",
    technos = ""
  } = post
  return (
    <>
      <Header />
    <section className='project'>
      <h1 className='project-title headline headline-md'>{title}</h1>
      <div className='project-content'>
        <div className="project-content__texte body body-light">
          <PortableText
            value={body}
            components={ptComponents}
          />
          <div className="details">
            <div className="details__client">
              <h3 className='body-lg'>Client</h3>
              <p>{client}</p>
            </div>
            <div className="details__technos">
              <h3 className='body-lg'>Techos</h3>
              <p>{technos}</p>
            </div>
          </div>
        </div>
      {
        imageGallery && (
          <div className='galery-image'>
            <Slider
              responsive={
                {
                  0:{
                    items:1,
                  },
                  768:{
                    items:2,
                  },
                  1024:{
                    items:1,
                    loop:false,
                  }
                }
              }
            >
            {imageGallery.map((figure:any,key:any) => 
                <Image key={key}
                src={figure.url}
                width={320}
                height={240}
                alt={`picture`}
                />
            )}
            </Slider>
          </div>
        )
      }
      </div>
    </section>
    </>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  imageGallery[]{
    'url':asset->url,
  },
  body,
  client,
  technos
}`
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}
export default Post