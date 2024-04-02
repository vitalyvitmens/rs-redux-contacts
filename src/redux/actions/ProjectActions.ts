import { ContactsActions } from 'src/redux/actions/contacts/types'
import { FavoritesActions } from 'src/redux/actions/favorites/types'

export type ProjectActions = ContactsActions | FavoritesActions
