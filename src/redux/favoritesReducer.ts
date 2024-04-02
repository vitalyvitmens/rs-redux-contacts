import {
  ADD_TO_FAVORITES_ACTION,
  REMOVE_FROM_FAVORITES_ACTION,
} from './actions/favorites/types'
import { ContactDto } from 'src/types/dto/ContactDto'
import { ProjectActions } from './actions/ProjectActions'

export function favoritesReducer(
  state: ContactDto[] | undefined = [],
  action: ProjectActions
) {
  switch (action.type) {
    case ADD_TO_FAVORITES_ACTION:
      return [...state, action.payload.contact]
    case REMOVE_FROM_FAVORITES_ACTION:
      return [...state.filter((contact) => contact.id !== action.payload.id)]
    default:
      return state
  }
}
