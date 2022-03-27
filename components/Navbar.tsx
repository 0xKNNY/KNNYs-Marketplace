import { FC } from 'react'
import ConnectWallet from './ConnectWallet'
import Link from 'next/link'
import SearchCollections from './SearchCollections'
import { useRouter } from 'next/router'
import InfoBanner from './InfoBanner'

type Props = {
  communityId?: string
}

const title = process.env.NEXT_PUBLIC_NAVBAR_TITLE
const logo = process.env.NEXT_PUBLIC_NAVBAR_LOGO

const Navbar: FC<Props> = ({ communityId }) => {
  const router = useRouter()
  return (
    <nav className="relative">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-12 p-3 sm:py-4 md:px-4 lg:px-6">
        <Link href="/">
          <a className="flex items-center justify-between gap-3">
            <img
              src={logo || '/face.gif'}
              alt={`${title} Logo` || 'Reservoir Logo'}
              className="w-[50px] sm:block"
            />
            {title ? (
              <span className="font-bold">{title}</span>
            ) : (
              <span className="font-['Obvia'] text-xl">KNNY</span>
            )}
          </a>
        </Link>
        <Link href="https://knny.io/">
          <a className="flex justify-between gap-3">
            
            {title ? (
              <span className="font-regular">main site</span>
            ) : (
              <span className="font-['Obvia'] text-xl">main site</span>
            )}
          </a>
        </Link>
        <Link href="https://github.com/kennyflaten/KNNY">
          <a className="flex justify-between gap-3">
            
            {title ? (
              <span className="font-regular">github</span>
            ) : (
              <span className="font-['Obvia'] text-xl">github</span>
            )}
          </a>
        </Link>
        {router.pathname !== '/' &&
          router.pathname !== '/[contract]/[tokenId]' &&
          router.pathname !== '/[address]' && (
            <div className="hidden lg:block">
              <SearchCollections communityId={communityId} />
            </div>
          )}
        <ConnectWallet />
        <InfoBanner />
      </div>
    </nav>
  )
}

export default Navbar
