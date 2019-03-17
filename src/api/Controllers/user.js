
import actions from 'api/Actions/User'
import { server } from 'api/Controllers'
import { FETCHING_STATUS } from 'utilities/constants'

export const login = data => dispatch =>
  server.protected
    .post('/auth/sign_in', data)
    .then(({ data: user }) => dispatch(actions.user.auth.login(user.data)))
    .catch(() => dispatch(actions.user.auth.setStatus(FETCHING_STATUS.FAIL)))

export const logout = () => dispatch =>
  server.protected
    .delete('/auth/sign_out')
    .then(() => dispatch(actions.user.auth.logout()))
    .catch(() => dispatch(actions.user.auth.setStatus(FETCHING_STATUS.FAIL)))

export const validateToken = () => dispatch => {
  const storage = window.localStorage
  const token = storage.getItem('token')
  const client = storage.getItem('client')
  const uid = storage.getItem('uid')
  const config = { params: { 'access-token': token, client, uid } }
  if (token && uid && client) {
    server.protected
      .get('/auth/validate_token', config)
      .then(({ data: user }) => dispatch(actions.user.auth.login(tempData)))
      .catch(() => dispatch(actions.user.auth.setStatus(FETCHING_STATUS.FAIL)))
  }
}

// 個人頁面假資料，現在頁面改版暫時disable
var tempData = {
  'id': 872,
  'email': 'admin@abcde.com',
  'provider': 'email',
  'name': 'admin',
  'admission_year': 100,
  'uid': 'admin@abcde.com',
  'allow_password_change': false,
  'role': 0,
  'agree_to_term_of_service': false,
  'agree_to_share_course_table': false,
  'major': '資工系',
  'student_id': '0123456',
  'identity': 'FB Google',
  'share_schedule': 0,
  'start_time': '2018-09-09',
  'avg_score': 100,
  'rank': 1,
  'graduate_day': 594,
  'now_credit': 20,
  'past_credit': 69,
  'need_credit': 128,
  'service_one': 0, // 服學 可討論
  'service_two': 0,
  'art_one': 1, // 藝文賞析分上下 討論ㄍ
  'art_two': 0,
  'pe_basic': 2, // 大一體育
  'pe': 3, // 選修幾門
  'mentor': 0, // 導師時間
  'language': {
    'total': 6, // 學分數
    'basic': 4,
    'advanced': 2
  },
  'general': {
    'total': 16,
    'contemporary': 2,
    'civil': 4,
    'group': 0,
    'history': 2,
    'culture': 4,
    'science': 4
  },
  'new_general': { // 每個學院會有不一樣的制度，還沒想到怎麼處理就是
    'total': 13,
    'core': {
      'total': 2,
      'human': 2,
      'society': 0,
      'science': 0
    },
    'basic': 3,
    'cross': 8
  },

  'this_semester': {
    'basic': {
      'service_one': 0, // 服學 可討論
      'service_two': 1,
      'art_one': 0, // 藝文賞析分上下 討論ㄍ
      'art_two': 1,
      'pe_basic': 0, // 大一體育
      'pe': 1, // 選修幾門
      'mentor': 0 // 導師時間
    },
    'language': {
      'total': 2,
      'basic': 0,
      'advanced': 2
    },
    'general': {
      'total': 2,
      'contemporary': 0,
      'civil': 0,
      'group': 2,
      'history': 0,
      'culture': 0,
      'science': 0
    },
    'new_general': { // 每個學院會有不一樣的制度，還沒想到怎麼處理就是
      'total': 6,
      'core': {
        'total': 2,
        'human': 0,
        'society': 2,
        'science': 0
      },
      'basic': 2,
      'cross': 2
    }
  }
}
