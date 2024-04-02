import { ContactDto } from 'src/types/dto/ContactDto'
import { ADD_TO_FAVORITES_ACTION, REMOVE_FROM_FAVORITES_ACTION } from './types'

export function addToFavoritesActionCreator(contact: ContactDto) {
  return {
    type: ADD_TO_FAVORITES_ACTION as typeof ADD_TO_FAVORITES_ACTION,
    payload: { contact },
  }
}

export function removeFromFavoritesActionCreator(id: ContactDto['id']) {
  return {
    type: REMOVE_FROM_FAVORITES_ACTION as typeof REMOVE_FROM_FAVORITES_ACTION,
    payload: { id },
  }
}
