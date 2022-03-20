import { toggleOffItem, toggleOnItem } from 'lib/router'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FC } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { FiChevronDown } from 'react-icons/fi'

type Props = {
  setSize: any
}

type Options = 'Lowest Price' | 'Highest Offer' | 'Token ID'

const options: { [x: string]: Options } = {
  lowest_price: 'Lowest Price',
  highest_offer: 'Highest Offer',
  token_id: 'Token ID',
}

const SortMenu: FC<Props> = ({ setSize }) => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [sortSelection, setSortSelection] = useState<Options>('Lowest Price')

  useEffect(() => {
    const sort = router?.query['sort']?.toString()
    if (sort && options[sort]) {
      setSortSelection(options[sort])
      return
    }
    setSortSelection('Lowest Price')
  }, [router.query])

  return (
    <DropdownMenu.Root onOpenChange={setOpen}>
      <DropdownMenu.Trigger className="btn-primary-outline border-neutral-800 w-[228px] justify-between px-4 py-3">
        <span className="reservoir-label-l text-white">{sortSelection}</span>
        <FiChevronDown
          className={`h-5 w-5 text-[#ffffff] transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        align="end"
        sideOffset={12}
        className="w-48 divide-y-[0px] overflow-hidden rounded-[10px] border-[1px] border-neutral-800 bg-[#171717] shadow-md radix-side-bottom:animate-slide-down md:w-56"
      >
        {Object.keys(options).map((key) => (
          <DropdownMenu.Item
            key={key}
            onClick={() => {
              setSize(0)
              if (key === 'lowest_price') {
                toggleOffItem(router, 'sort')
              } else {
                toggleOnItem(router, 'sort', key)
              }
            }}
            disabled={sortSelection === options[key]}
            className={`reservoir-gray-dropdown-item reservoir-h6 text-white rounded-none ${
              sortSelection === options[key]
                ? 'cursor-not-allowed bg-neutral-800'
                : ''
            }`}
            aria-label={`Sort by ${options[key]}`}
          >
            {options[key]}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default SortMenu
