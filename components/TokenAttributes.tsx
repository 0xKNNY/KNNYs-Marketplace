import Link from 'next/link'
import formatUrl from 'lib/formatUrl'
import { paths } from 'interfaces/apiTypes'

type Props = {
  token: NonNullable<
    paths['/tokens/details']['get']['responses']['200']['schema']['tokens']
  >[0]['token']
}

const TokenAttributes = ({ token }: Props) => {
  return (
    <article className="mb-4 max-w-[533px] overflow-hidden rounded-2xl border-[0px] border-neutral-800 bg-transparent p-6">
      <p className="reservoir-h5 text-white mb-4">Attributes</p>
      <div className="grid grid-cols-3 gap-2">
        {token?.attributes?.map(({ key, value }) => (
          <Link
            key={`${key}-${value}`}
            href={`/collections/${token?.collection?.id}?${formatUrl(
              `attributes[${key}]`
            )}=${formatUrl(`${value}`)}`}
          >
            <a className="rounded-[7px] border border-neutral-800 transition hover:shadow-md">
              <p className="reservoir-subtitle text-white truncate p-3 text-center capitalize">
                {key}
              </p>
              <p
                className="reservoir-subtitle text-white truncate bg-transparent p-3 text-center capitalize"
                title={value}
              >
                {value}
              </p>
            </a>
          </Link>
        ))}
      </div>
    </article>
  )
}

export default TokenAttributes
