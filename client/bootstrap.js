import { store } from '@things-factory/shell'
import { i18next } from '@things-factory/i18n-base'

export default function bootstrap() {
  // var offlineLast
  // store.subscribe(() => {
  //   var state = store.getState()
  //   let offline = state.offline.offline
  //   if (offline != offlineLast) {
  //     document.dispatchEvent(
  //       new CustomEvent('notify', {
  //         detail: {
  //           level: result ? 'info' : 'error',
  //           message: i18next.t('text.you.are.now.in', {
  //             state: {
  //               text: i18next.t(offline ? 'text.offline' : 'text.online')
  //             }
  //           })
  //         }
  //       })
  //     )
  //   }
  //   offlineLast = offline
  // })
}
