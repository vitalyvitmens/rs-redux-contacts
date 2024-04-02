import { ContactDto } from 'src/types/dto/ContactDto'
import { ADD_NEW_CONTACT_ACTION, REMOVE_CONTACT_ACTION } from './types'

export function addNewContactActionCreator(contact: ContactDto) {
  return {
    type: ADD_NEW_CONTACT_ACTION as typeof ADD_NEW_CONTACT_ACTION,
    payload: { contact },
  }
}

export function removeContactActionCreator(id: ContactDto['id']) {
  return {
    type: REMOVE_CONTACT_ACTION as typeof REMOVE_CONTACT_ACTION,
    payload: { id },
  }
}
