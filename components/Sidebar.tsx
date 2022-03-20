import * as Accordion from '@radix-ui/react-accordion'
import { paths } from 'interfaces/apiTypes'
import { toggleOffItem, toggleOnAttributeKey } from 'lib/router'
import { useRouter } from 'next/router'
import { FC } from 'react'
import AttributeSelector from './filter/AttributeSelector'
import { SWRResponse } from 'swr'
import { SWRInfiniteResponse } from 'swr/infinite/dist/infinite'
import { FiChevronDown } from 'react-icons/fi'

type Props = {
  attributes: SWRResponse<
    paths['/attributes']['get']['responses']['200']['schema']
  >
  setTokensSize: SWRInfiniteResponse['setSize']
}

const Sidebar: FC<Props> = ({ attributes, setTokensSize }) => {
  const router = useRouter()

  return (
    <Accordion.Root>
    
    </Accordion.Root>
  )
}

export default Sidebar
