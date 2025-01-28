import React from 'react'
import Link from "next/link"

const Navigation = () => {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-screen-lg px-2 py-5 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          星評価
        </Link>
      </div>
    </header>
  )
}

export default Navigation