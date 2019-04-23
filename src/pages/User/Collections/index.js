import React from 'react'
import styles from './style.scss'
import { getFriends, getInvites } from 'api/Controllers/user'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  friends: state.user.friend.show.data,
  friends_status: state.user.friend.show.status,
  invites: state.user.friend.invite.data,
  invites_status: state.user.friend.invite.status
})

const mapDispatchToProps = (dispatch) => ({
  fetchFriendData: () => dispatch(getFriends()),
  fetchInviteData: () => dispatch(getInvites())
})

class CollectionsTable extends React.Component {
  componentWillMount () {
    this.props.fetchFriendData()
    this.props.fetchInviteData()
    // console.log(this.props)
  }

  render () {
    return (
      <div className='row'>
        {
          this.props.friends_status === 2
            ? this.props.friends.map((data, index) => (
              <Collections {...data} key={index} />
            ))
            : <div className='row' />

        }
        <div style={{ backgroundColor: '#E9EAED' }} className={`mt-4 mb-4 ${styles.pullRight}`}>
          <div className='p-3 bg-white'>
            朋友數： 0&emsp;
            <button type='button' className='btn btn-primary btn-sm mr-1 pt-0 pb-0 pl-1 pr-1 ml-2'>查看朋友</button>
            <button type='button' className='btn btn-primary btn-sm mr-1 pt-0 pb-0 pl-1 pr-1'>尋找朋友</button>
            <button type='button' className='btn btn-primary btn-sm pt-0 pb-0 pl-1 pr-1'>隱私設定</button>
            <div className='input-group input-group-sm mt-4 mb-3'>
              <input type='text' className='form-control' placeholder='這個是假的' />
              <div className='input-group-append'>
                <button className='btn btn-outline-secondary' type='button' id='button-addon2'><i className='fa fa-search' /></button>
              </div>
            </div>
          </div>

          <div className='mt-3 p-3 bg-white mb-2'>
            <div className='m-2'>交友邀請： 2</div>
            <table className='table'>
              <tbody>
                {
                  this.props.invites_status === 2
                    ? this.props.invites.map((invite, index) => (
                      <tr key={index}>
                        <td>{invite.name}</td>
                        <td>{invite.department}</td>
                        <td><button type='button' className='btn btn-primary btn-sm'>確認</button></td>
                        <td><button type='button' className='btn btn-warning btn-sm'>略過</button></td>
                      </tr>
                    ))
                    : <tr />
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

const Collections = (props) => {
  return (
    <div className='m-2 mt-4 col-8'>
      <table className='table table-hover text-center bg-white  mr-4'>
        <thead>
          <tr>
            <td>名稱</td>
            <td>系所</td>
            <td>課表年級</td>
            <td />
          </tr>
        </thead>
        <tbody>
          {
            props.people.map((people, index) => (
              <tr key={people.id}>
                <td>{people.name}</td>
                <td>{people.department}</td>
                <td>{people.semester}</td>
                <td />
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsTable)
