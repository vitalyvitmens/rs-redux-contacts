import { ContactDto } from 'src/types/dto/ContactDto'

export const ADD_NEW_CONTACT_ACTION = 'ADD_NEW_CONTACT'
export const REMOVE_CONTACT_ACTION = 'REMOVE_CONTACT'
export const ADD_TO_FAVORITES_ACTION = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES_ACTION = 'REMOVE_FROM_FAVORITES'

export interface AddNewContactAction {
  type: typeof ADD_NEW_CONTACT_ACTION
  payload: {
    contact: ContactDto
  }
}

export interface RemoveContactAction {
  type: typeof REMOVE_CONTACT_ACTION
  payload: {
    id: ContactDto['id']
  }
}

export interface AddToFavoritesAction {
  type: typeof ADD_TO_FAVORITES_ACTION
  payload: {
    contact: ContactDto
  }
}

export interface RemoveFromFavoritesAction {
  type: typeof REMOVE_FROM_FAVORITES_ACTION
  payload: {
    id: ContactDto['id']
  }
}

export type ProjectActions =
  | AddNewContactAction
  | RemoveContactAction
  | AddToFavoritesAction
  | RemoveFromFavoritesAction
