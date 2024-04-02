import { contacts } from 'src/__data__'
import {
  ADD_NEW_CONTACT_ACTION,
  REMOVE_CONTACT_ACTION,
} from './actions/contacts/types'
import { ProjectActions } from './actions/ProjectActions'

export function contactsReducer(state = contacts, action: ProjectActions) {
  switch (action.type) {
    case ADD_NEW_CONTACT_ACTION:
      return [...state, action.payload.contact]
    case REMOVE_CONTACT_ACTION:
      return state.filter((contact) => contact.id !== action.payload.id)
    default:
      return state
  }
}
