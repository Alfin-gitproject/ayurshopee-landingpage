'use client'
import Link from "next/link"
import Image from "next/image"

export default function BannerSlider() {
  return (
    <figure className="banner-image">
      <Link href="/">
        <Image
          src="/assets/images/banner/img-4.jpeg"
          alt="Natural Face Bathing Bar Banner"
          width={1200}
          height={700}
          priority
          className="w-full h-auto"
        />
      </Link>
    </figure>
  )
}