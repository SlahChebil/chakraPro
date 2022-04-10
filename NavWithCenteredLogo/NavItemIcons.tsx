import { AiOutlineUser } from 'react-icons/ai'
import { RiHeartLine, RiSearchLine, RiShoppingCartLine } from 'react-icons/ri'

export const items = {
  wishlist: {
    label: 'Wishlist',
    icon: RiHeartLine,
    href: '#',
  },
  user: {
    label: 'Sign in',
    icon: AiOutlineUser,
    href: '#',
  },
  cart: {
    label: 'Cart',
    icon: RiShoppingCartLine,
    href: '#',
  },
  search: {
    label: 'Search',
    icon: RiSearchLine,
    href: '#',
  },
}
