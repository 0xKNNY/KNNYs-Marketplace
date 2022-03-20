import { formatNumber } from 'lib/numbers'
import { optimizeImage } from 'lib/optmizeImage'
import { FC, useEffect, useState } from 'react'
import FormatEth from './FormatEth'

type Props = {
  stats: {
    vol24: number | undefined
    count: number | undefined
    topOffer: number | undefined
    floor: number | undefined
  }
  header: {
    banner: string | undefined
    image: string | undefined
    name: string | undefined
  }
}

const Hero: FC<Props> = ({ stats, header, children }) => {
  const [delay, setDelay] = useState(true)
  useEffect(() => {
    setTimeout(() => setDelay(false), 1500)
  }, [])

  return (
    <div>
      <div className="grid w-full place-items-center gap-5 px-2 pt-4 pb-8 sm:pb-6 lg:flex lg:items-center lg:justify-between">
        <div className="flex items-center">
          <img className="h-[70px] w-[70px] rounded-full" src={header.image} />
          <div className="ml-3">
            <h1 className="reservoir-h4 text-white mb-1">{header.name}</h1>
            <div className="flex items-center gap-5">
              <Stat name="Top Offer">
                <FormatEth amount={stats.topOffer} maximumFractionDigits={4} />
              </Stat>
              <Stat name="Floor">
                <FormatEth amount={stats.floor} maximumFractionDigits={4} />
              </Stat>
              <Stat name="Items">{formatNumber(stats.count)}</Stat>
            </div>
          </div>
        </div>
        <div className="flex gap-3">{children}</div>
      </div>
    </div>
  )
}

export default Hero

const Stat: FC<{ name: string }> = ({ name, children }) => (
  <div className="grid items-center sm:flex sm:gap-1">
    <div className="reservoir-h6 text-white">{name}</div>
    <div className="reservoir-h6 text-white">{children}</div>
  </div>
)
