
import React from 'react'
import { convertSemesterToString, convertTimeSlotsToString } from 'utilities'
import styles from './style.scss';
import classNames from 'classnames';

class Info extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tableFolded:true
    }
  }
  render(){
    const course_infos = this.props.course_infos || [];
    const 當期課號 = course_infos[0]?course_infos[0].code:"";
    return(
      <div className="container">
        <div className="row">
          <table className={classNames('table', styles.tableBorderless, "col-md-6")}>
            <tbody>
              <tr>
                <td>當期課號：<strong>{當期課號}</strong></td>
                <td>學分：<strong>{this.props.permanent_course.credit}</strong></td>
              </tr>
              <tr>
                <td>
                  永久課號：<strong>{this.props.permanent_course.code}</strong>
                </td>
                <td>
                  <a href={this.props.href} target='_blank'>課程綱要 <i className="fas fa-external-link-alt"></i></a>
                </td>

              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-responsive">
          <table className='table table-striped table-hover'>
            <thead>
              <tr>
                <th>學期</th>
                <th>單位</th>
                <th>當期課號</th>
                <th>選別</th>
                <th>修課人數/上限</th>
                <th>時間</th>
                <th>教室</th>
                <th>學分</th>
                <th>年級</th>
                <th>備註</th>
              </tr>
            </thead>
            <tbody>
              {course_infos.map((item, index)=>{
                let trStyle = "";

                const semester = course_infos[0]?course_infos[0].semester : {}
                if((JSON.stringify(item.semester) !== JSON.stringify(semester)) && this.state.tableFolded){
                  trStyle = styles.fold;
                }
                return (
                  <tr key={index} className = {trStyle}>
                    <td>{convertSemesterToString(item.semester)}</td>
                    <td>{item.department}</td>
                    <td>{item.code}</td>
                    <td>{item.requirement_type}</td>
                    <td className='text-center'>{item.registration_count}/{item.registration_limit}</td>
                    <td>{convertTimeSlotsToString(item.time_slots)}</td>
                    <td>{item.classroom}</td>
                    <td>{item.grade}</td>
                    <td>{item.remark}</td>
                  </tr>
                );
              })}
              <tr>
                <td>{convertSemesterToString(this.props.semester)}</td>
                <td>{this.props.department}</td>
                <td>
                  <a href={this.props.href} target='_blank'>{this.props.code}</a>
                </td>
                <td>{this.props.requirement_type}</td>
                <td className='text-center'>{this.props.registration_count}/{this.props.registration_limit}</td>
                <td>{convertTimeSlotsToString(this.props.time_slots)}</td>
                <td>{this.props.classroom}</td>
                <td>{this.props.credit}</td>
                <td>{this.props.grade}</td>
                <td>{this.props.remark}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.moreIcon}>
          <div>
            <span>查看往年資訊</span>
            <div className={styles.angleContainer}>
              <span>&#65088;</span>
              <span className={styles.downAngle}>&#65088;</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info
