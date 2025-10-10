import React from 'react'
import Image from 'next/image'

type Props = {
    icon: string;
    name: string;
    description: string;
}
const ServiceCard = ({icon,name,description}:Props) => {
  return (
    <div>
        <Image src={icon} alt='img' width={60} height={60}/>
    </div>
  )
}

export default ServiceCard