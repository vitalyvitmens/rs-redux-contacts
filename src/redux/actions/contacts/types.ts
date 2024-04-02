import { ContactDto } from 'src/types/dto/ContactDto'

export const ADD_NEW_CONTACT_ACTION = 'ADD_NEW_CONTACT'
export const REMOVE_CONTACT_ACTION = 'REMOVE_CONTACT'

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

export type ContactsActions = AddNewContactAction | RemoveContactAction
