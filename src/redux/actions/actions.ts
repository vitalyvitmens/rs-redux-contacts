import { ContactDto } from 'src/types/dto/ContactDto'
import {
  ADD_NEW_CONTACT_ACTION,
  ADD_TO_FAVORITES_ACTION,
  AddNewContactAction,
  AddToFavoritesAction,
  REMOVE_CONTACT_ACTION,
  REMOVE_FROM_FAVORITES_ACTION,
  RemoveContactAction,
  RemoveFromFavoritesAction,
} from './types'

export function addNewContactActionCreator(
  contact: ContactDto
): AddNewContactAction {
  return { type: ADD_NEW_CONTACT_ACTION, payload: { contact } }
}

export function removeContactActionCreator(
  id: ContactDto['id']
): RemoveContactAction {
  return { type: REMOVE_CONTACT_ACTION, payload: { id } }
}

export function addToFavoritesActionCreator(
  contact: ContactDto
): AddToFavoritesAction {
  return { type: ADD_TO_FAVORITES_ACTION, payload: { contact } }
}

export function removeFromFavoritesActionCreator(
  id: ContactDto['id']
): RemoveFromFavoritesAction {
  return { type: REMOVE_FROM_FAVORITES_ACTION, payload: { id } }
}
