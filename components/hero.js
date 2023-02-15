import Image from 'next/image'
import cube from 'images/cube.jpg'

export default function Hero ({ title, subtitle, imageOn = false }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {imageOn && (
        <figure> <Image src={cube} alt='' layout='responsive' size='(min-width:1152px) 576px, (min-width:768px) 50vw, 100vw' priority placeholder='blur' /> </figure>)}
    </div>
  )
}
