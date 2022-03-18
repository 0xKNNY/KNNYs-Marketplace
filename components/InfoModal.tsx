import { FC } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'

const InfoModal: FC = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="hidden hover:underline sm:grid">
        About KNNY
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay>
          <Dialog.Content className="fixed inset-0 bg-[#000000b6]">
            <div className="fixed top-1/2 left-1/2 max-w-prose -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-white p-6 shadow-md ">
              <Dialog.Close className="btn-neutral-ghost ml-auto mb-3 p-1.5">
                Close
              </Dialog.Close>
              <div className="space-y-3">
                <section>
                  <strong className="mb-3 block text-xl">
                    About KNNY
                  </strong>
                  <p className="mb-1">
                  Hi, I&#39;m KNNY, a digital artist from New York. My work deals with universal concepts pertaining to the self, mental illness, death, and enlightenment.

                  My most recent series titled “Light Beings” features materialized consciousness as someone who is looking for the all-encompassing purpose of life while entering different dimensions of reality. To create a dialogue, in the art I include black/white spheres, representing an invisible force, that the Light Being chases after; these could be looked at as one&#39;s subconscious or divinity. All things considered, it&#39;s my mission to intentionally communicate the truth of what it means to be yourself.

                  My most recent developments have been around digital apartment buildings, houses, and creating large format digital spaces. These are somewhat like digital sculptures, but might eventually become tokenized space that the user can walk inside rather than just look at.
                  
                  TEST TEST - 10:12 AM
                    TEST #2
                    TEST #3
                  </p>
                </section>
                <section>
                  <strong className="mb-2 block">Where else to find me</strong>
                  <ul>
                    <li>
                      Follow me on {' '}
                      <Link href="https://twitter.com/0xKNNY/">
                        <a
                          className="underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Twitter
                        </a>
                      </Link>
                    </li>
                    <li>
                      View my other work on{' '}
                      <Link href="https://makersplace.com/knny">
                        <a
                          className="underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          MakersPlace,
                        </a>
                      </Link>
                      {' '}
                      <Link href="https://knownorigin.io/kenny">
                        <a
                          className="underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                        KnownOrigin,
                        </a>
                      </Link>
                      {' '}
                      <Link href="https://foundation.app/knny">
                        <a
                          className="underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                        Foundation
                        </a>
                      </Link>
                    </li>
                    <li>
                    Check out my first{' '}
                      <Link href="https://www.amazon.com/Yellow-Flowers-Poetry-Depression-Love/dp/0692116907/ref=sr_1_2?dchild=1&keywords=kenny+flaten&qid=1596771056&sr=8-2">
                        <a
                          className="underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          physical book
                        </a>
                      </Link>
                      , and my second{' '}
                      <Link href="https://makersplace.com/knny/white-flowers-poetry-book-by-kenny-flaten-1-of-1-69658/">
                        <a
                          className="underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          
                        </a>
                      </Link>
                      <Link href="https://www.amazon.com/Yellow-Flowers-Poetry-Depression-Love/dp/0692116907/ref=sr_1_2?dchild=1&keywords=kenny+flaten&qid=1596771056&sr=8-2">
                        <a
                          className="underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                        book published on Ethereum
                        </a>
                      </Link>
                    </li>
                  </ul>
                </section>

                <section>
                  <p>
                    It comes with all the functionality you expect (browsing,
                    listing, buying, etc), as well as powerful new features like
                    trait exploration and bidding.
                  </p>
                </section>
                <section>
                  <p>
                    It&apos;s open-source, and{' '}
                    <Link href="https://github.com/reservoirprotocol/sample-marketplace">
                      <a
                        className="underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ready to be forked
                      </a>
                    </Link>
                    . Just add lore.
                  </p>
                </section>
                <section>
                  <p>
                    This permissionless marketplace is running on the Reservior Protocol, learn more about it{' '}
                    <Link href="https://reservoirprotocol.github.io/">
                      <a
                        className="underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        here
                      </a>
                    </Link>
                    .
                  </p>
                </section>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default InfoModal