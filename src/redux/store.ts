import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import { logActionMiddleware } from './logActionMiddleware'
import { contactsReducer } from './contactsReducer'
import { groupContactsReducer } from './groupContactsReducer'
import { favoritesReducer } from './favoritesReducer'
import thunkMiddleware from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from '@redux-devtools/extension'

const rootReducer = persistReducer(
  { key: 'rs-redux-contacts', storage: storage },
  combineReducers({
    contacts: contactsReducer,
    groups: groupContactsReducer,
    favorites: favoritesReducer,
  })
)

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, logActionMiddleware))
)

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
