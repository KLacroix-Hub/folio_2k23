// frontend/pages/index.tsx
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
import Header from '@/components/Header/Header'

function urlFor (source:any) {
  return imageUrlBuilder(client).image(source)
}

const imageHome = 
[
  "https://placehold.co/2000x2000",
  "https://placehold.co/2000x2000",
  "https://placehold.co/2000x2000"
]


const Index = () => {

    return (
     <>
      <Header />
      <div className='homepage'>
        <h1 className="homepage-title headline headline-xxl">Creative</h1>
        <div className='homepage-figure'>
          {imageHome.map((image, index) => {
            return (
              <span className='homepage-figure__item' key={index}>
                <img src={image} alt="img" />
              </span>
            )
          })}
        </div>
        <div className='homepage-footer'>
          <p className='body body-xl'>Fullstack dev</p>
          <p className='body body-xl'>Graphic Designer</p>
        </div>
      </div>
     </>
    )
}

export default Index