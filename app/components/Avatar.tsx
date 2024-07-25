'use client';

import Image from "next/image";

function Avatar() {
  return (
    <Image
        alt="Avatar"
        className="rounded-full"
        src="/images/placeholder.png"
        width={30}
        height={30}
    />
  )
}

export default Avatar