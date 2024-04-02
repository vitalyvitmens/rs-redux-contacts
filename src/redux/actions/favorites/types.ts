import { ContactDto } from 'src/types/dto/ContactDto'

export const ADD_TO_FAVORITES_ACTION = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES_ACTION = 'REMOVE_FROM_FAVORITES'

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

export type FavoritesActions = AddToFavoritesAction | RemoveFromFavoritesAction
