import { SITE_TITLE } from '@@/lib/const'
import type { MetaFunction } from '@remix-run/cloudflare'
import { useState } from 'react'

export const meta: MetaFunction = () => {
  return [{ title: `Recipe | ${SITE_TITLE} Dashboard` }]
}

const createSafe = async () => {}

const mintNftTx = async () => {}

export default function Recipe() {
  const [isLoading, setIsLoading] = useState<Boolean>(false)

  return (
    <>
      <div className="px-4 pt-16 pb-16 flex items-center justify-center bg-yellow-100">
        <h2 className="font-bold text-3xl text-center">
          <p className="text-5xl mb-3">🖼️</p>A NFT Recipe
        </h2>
      </div>
      <div className="mx-auto max-w-2xl py-12 px-6">
        <div>
          <button
            className="btn-outline w-full py-5 px-8"
            onClick={() => createSafe()}
          >
            <span className="text-xl">
              {
                /*isConnected ? `Connected as ${address}` : */ 'Create Safe Account'
              }
            </span>
          </button>
        </div>
        <div className="text-center my-4 text-xl"></div>
        <div>
          <button
            className="btn-outline w-full py-5 px-8"
            onClick={() => mintNftTx()}
          >
            <span className="text-xl">Let's mint NFT</span>
          </button>
        </div>
      </div>
    </>
  )
}
