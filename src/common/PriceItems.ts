interface IPriceItems {
  id: number
  title: string
  price: string
  description: string
}

export const priceItem: IPriceItems[] = [
  {
    id: 1,
    title: 'Landing Page',
    price: 'from 4000',
    description:
      'Landing on tilde. Suitable for small businesses, professionals or presentations of one product (service), as well as promotional pages'
  },
  {
    id: 2,
    title: 'Online store',
    price: 'from 8000',
    description:
      'Website with catalog connection, shopping cart, filters and all the settings to sell any goods online'
  },
  {
    id: 3,
    title: 'Multipage site',
    price: 'from 4000',
    description:
      'Site of several pages on tilde. Suitable for corporate sites, companies with a lot of services and content'
  },
  {
    id: 4,
    title: 'Online course',
    price: 'from 8000',
    description:
      'Website with catalog connection, shopping cart, filters and all the settings to sell any goods online'
  }
]
