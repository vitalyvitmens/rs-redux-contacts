import { Middleware } from 'redux'
import { RootState } from './store'
import { ProjectActions } from './actions/ProjectActions'
import { logAction } from '../metrics/logAction'

export const logActionMiddleware: Middleware<{}, RootState> = (storeAPI) => {
  return function wrapDispatch(next) {
    return function handleAction(action: ProjectActions) {
      logAction(action)
      next(action)
    }
  }
}
