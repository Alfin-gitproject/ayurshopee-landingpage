'use client'
import Link from "next/link"
import Image from "next/image"

export default function BannerSlider() {
  return (
    <figure className="banner-image">
      <Link href="/index-2">
        <Image
          src="/assets/images/banner/img-3.png"
          alt="Natural Face Bathing Bar Banner"
          width={1200}
          height={400}
          priority
          className="w-full h-auto"
        />
      </Link>
    </figure>
  )
}