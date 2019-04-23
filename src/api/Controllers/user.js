
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

export const getPastCos = () => dispatch => {
  dispatch(actions.user.pastCourse.show.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .get(`/api/v1/user/courses`)
    .then(({ data: courses }) => {
      dispatch(actions.user.pastCourse.show.store(courses))
      dispatch(actions.user.pastCourse.show.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => {
      dispatch(actions.user.pastCourse.show.setStatus(FETCHING_STATUS.FAIL))
      // fake data
      dispatch(actions.user.pastCourse.show.store(tempCourses))
      dispatch(actions.user.pastCourse.show.setStatus(FETCHING_STATUS.DONE))
    })
}

export const getGPA = () => dispatch => {
  dispatch(actions.user.gpa.show.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .get(`/api/v1/user/GPA`)
    .then(({ data: gpa }) => {
      dispatch(actions.user.gpa.show.store(gpa))
      dispatch(actions.user.gpa.show.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => {
      dispatch(actions.user.gpa.show.setStatus(FETCHING_STATUS.FAIL))
      // fake data
      dispatch(actions.user.gpa.show.store(tempGPA))
      dispatch(actions.user.gpa.show.setStatus(FETCHING_STATUS.DONE))
    })
}

export const getFriends = () => dispatch => {
  dispatch(actions.user.friend.show.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .get(`/api/v1/user/friends`)
    .then(({ data: friends }) => {
      dispatch(actions.user.friend.show.store(friends))
      dispatch(actions.user.friend.show.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => {
      dispatch(actions.user.friend.show.setStatus(FETCHING_STATUS.FAIL))
      // fake data
      dispatch(actions.user.friend.show.store(tempUsers))
      dispatch(actions.user.friend.show.setStatus(FETCHING_STATUS.DONE))
    })
}

export const getInvites = () => dispatch => {
  dispatch(actions.user.friend.invite.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .get(`/api/v1/user/invites`)
    .then(({ data: invites }) => {
      dispatch(actions.user.friend.invite.store(invites))
      dispatch(actions.user.friend.invite.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => {
      dispatch(actions.user.friend.invite.setStatus(FETCHING_STATUS.FAIL))
      // fake data
      dispatch(actions.user.friend.invite.store(tmpInvite))
      dispatch(actions.user.friend.invite.setStatus(FETCHING_STATUS.DONE))
    })
}

const tmpInvite = [
  {
    'name': '邊緣人',
    'department': '資工系'
  },
  {
    'name': '夯',
    'department': '傳科系'
  }
]

const tempUsers = [
  {
    people: [
      {
        'id': 1,
        'name': '白白',
        'department': '資工系',
        'semester': '107下'

      },
      {
        'id': 2,
        'name': '阿旦',
        'department': '電機系',
        'semester': '106下'
      },
      {
        'id': 3,
        'name': '嘿嘿',
        'department': '傳科系',
        'semester': '107上'
      },
      {
        'id': 4,
        'name': '嘿嘿哈哈',
        'department': '電工系',
        'semester': '105上'
      },
      {
        'id': 5,
        'name': '台中花博真心推',
        'department': '業配系',
        'semester': '107下'
      }
    ]
  }
]

// GPA
const tempGPA =
{
  'sem_score': [
    { 'semester': '一上', 'grade': 90 },
    { 'semester': '一下', 'grade': 82.5 },
    { 'semester': '二上', 'grade': 87 },
    { 'semester': '二下', 'grade': 83 },
    { 'semester': '三上', 'grade': 92.1 },
    { 'semester': '三下', 'grade': 'NULL' },
    { 'semester': '四上', 'grade': 'NULL' },
    { 'semester': '四下', 'grade': 'NULL' }
  ],
  'picked': [
    {
      'country': '美國',
      'school': 'UCLA',
      'department': '資工',
      'overall': 3.87,
      'last60': 4.0
    },
    {
      'country': '台灣',
      'school': 'NCTU',
      'department': '資工',
      'overall': 3.87,
      'last60': 3.57
    },
    {
      'country': '中國',
      'school': '上海交大',
      'department': '資工',
      'overall': 3.87,
      'last60': 3.33
    }
  ]
}

// 歷年修課
const tempCourses =
[
  {
    'semester': '106下',
    'total_credit': 21,
    'average': 90,
    'courses': [
      {
        'name': '服務學習(二)',
        'code': 'DCP3362',
        'type': '基本必修',
        'score': '未通過',
        'credit': 0
      },
      {
        'name': '經濟社會學',
        'code': 'GEC8174',
        'type': '群己/進階(96 )',
        'score': 90,
        'credit': 2
      },
      {
        'name': '計算機系統',
        'code': 'GEC8174',
        'type': '基本必修',
        'score': 90,
        'credit': 3
      },
      {
        'name': '計算機系統',
        'code': 'GEC8174',
        'type': '基本必修',
        'score': 90,
        'credit': 3
      },
      {
        'name': '計算機系統',
        'code': 'GEC8174',
        'type': '基本必修',
        'score': 90,
        'credit': 3
      },
      {
        'name': '計算機系統',
        'code': 'GEC8174',
        'type': '基本必修',
        'score': 90,
        'credit': 3
      },
      {
        'name': '資料結構與',
        'code': 'GEC8174',
        'type': '基本必修',
        'score': 90,
        'credit': 3
      },
      {
        'name': '計算機系統',
        'code': 'GEC8174',
        'type': '基本必修',
        'score': 90,
        'credit': 3
      }
    ]
  },
  {
    'semester': '106上',
    'total_credit': 20,
    'average': 87.5,
    'courses': [
      {
        'name': '計算機組織',
        'code': 'DCP3362',
        'type': '基本必修',
        'score': 95,
        'credit': 3
      },
      {
        'name': '經濟社會學',
        'code': 'GEC8174',
        'type': '群己/進階(96 )',
        'score': 90,
        'credit': 2
      }
    ]
  },
  {
    'semester': '106上',
    'total_credit': 20,
    'average': 87.5,
    'courses': [
      {
        'name': '計算機組織',
        'code': 'DCP3362',
        'type': '基本必修',
        'score': 95,
        'credit': 3
      },
      {
        'name': '經濟社會學',
        'code': 'GEC8174',
        'type': '群己/進階(96 )',
        'score': 90,
        'credit': 2
      }
    ]
  },
  {
    'semester': '106上',
    'total_credit': 20,
    'average': 87.5,
    'courses': [
      {
        'name': '計算機組織',
        'code': 'DCP3362',
        'type': '基本必修',
        'score': 95,
        'credit': 3
      },
      {
        'name': '經濟社會學',
        'code': 'GEC8174',
        'type': '群己/進階(96 )',
        'score': 90,
        'credit': 2
      }
    ]
  }
]

// 個人頁面假資料，現在頁面改版暫時disable
const tempData = {
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
