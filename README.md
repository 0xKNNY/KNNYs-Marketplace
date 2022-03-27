# KNNY's Marketplace

This repository is a self-deployed marketplace that I sell my 1/1 and multi-edition artworks on, using an open-source, web-3 native order book protocol and API called [Reservoir](https://reservoirprotocol.github.io/), and deployed on [Vercel](https://vercel.com). 

This ensures that I'm truly decentralized in the web3 ecoysystem, and that no matter what happens with centralized marketplaces (such as censorship, delisting artworks for no reason, delayed royalties, etc.) that I don't have any of those problems because I'm the admin of my own marketplace.

![Auction House Montage](https://ipfsgateway.makersplace.com/ipfs/Qmf87koZ7PsKaWMQt4rwfoZeHnFMVUBwsx7kh3aB5ZhfTj)

## Modes

The marketplace supports 3 different modes:

- Single collection (e.g. [Crypto Coven](https://cryptocoven.reservoir.market))
- Multi collection community (e.g. [BAYC](https://bayc.reservoir.market))
- All collections ([example](https://www.reservoir.market))

A demo deployment allows you to test any collection, by changing the subdomain:

- [{collection-slug}.reservoir.market](https://cryptocoven.reservoir.market) (if a collection is unsupported, ping us on Discord to get it added)
- [{community-id}.reservoir.market](https://bayc.reservoir.market) (currently works with `bayc`,`loot`,`forgottenrunes`)

## Get started

Fork this repository and follow these instructions:

### Install dependencies

With yarn:

```bash
$ yarn install
```

With NPM:

```bash
$ npm install
```

### Add environment variables

There are also two main environment variables used in this repo:

`NEXT_PUBLIC_CHAIN_ID` is the Ethereum Chain ID. Use 1 for Ethereum Mainnet and 4 for Rinkeby Testnet.  
`NEXT_PUBLIC_API_BASE` is the base url for the Reservoir API. This will vary depending on the network you are using.

You can copy the values you want to use from `env.development` or `env.production` into a new file called `.env.local`

If you want to focus on a particular collection or community, add one of the following variables:

`NEXT_PUBLIC_COLLECTION={collection-slug}`  
`NEXT_PUBLIC_COMMUNITY={community-id}`

If you want to change the name and logo shown in the navigation bar:

`NEXT_PUBLIC_NAVBAR_TITLE={your-title}`

`NEXT_PUBLIC_NAVBAR_LOGO={url}`

The url for the logo can be a relative path if you have the image stored in your repository:

`NEXT_PUBLIC_NAVBAR_LOGO="/logo.png"`

If you want to support cross-posting listings to OpenSea (optional), you'll need an API key:

`NEXT_PUBLIC_OPENSEA_API_KEY=abc`

### Run the app

Once you have your setup ready, run:

With yarn:

```bash
$ yarn dev
```

With npm:

```bash
$ npm run dev
```

### Deploy

This is a Next.js app that can be easily deployed using [Vercel](https://vercel.com/)

## Where else to find me
You can find everything about my through [knny.io](https://knny.io).