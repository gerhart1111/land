import React from 'react'
import styles from '../JobPost.module.scss'
import Image from 'next/image'

interface WarpTopProps {
  src: string,
  name: string,
  location: string
}

const WarpTop = ({ src, name, location }: WarpTopProps) => {
  return (
    <div className={styles.warpTop}>
      <Image
        width={65}
        height={65}
        src={src}
        alt="profile_Image"
        className={styles.profileImg}
      />
      <div className={styles.flexColumn}>
        <div className={styles.name}>{name}</div>
        <div className={styles.location}>{location}</div>
      </div>
    </div>
  )
}

export default WarpTop