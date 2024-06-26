import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { contactsReducer } from './contactsReducer'
import { groupContactsReducer } from './groupContactsReducer'
import { favoritesReducer } from './favoritesReducer'
import { logActionMiddleware } from './logActionMiddleware'
import { composeWithDevTools } from '@redux-devtools/extension'
import { LOCAL_STORAGE_KEY } from 'src/constants/storageKeys'

const rootReducer = persistReducer(
  { key: LOCAL_STORAGE_KEY, storage: storage },
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
