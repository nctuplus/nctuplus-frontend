
import PageWrapper from 'components/PageWrapper'
import React from 'react'

const CourseMap = (props) => (
  <PageWrapper>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 text-center'>
          <div>
            <select className='form-control'>
              <option value=''>系所</option>
              <option value='118'>資科工所</option>
              <option value='119'>網工所</option>
              <option value='120'>多工所</option>
              <option value='260'>奈米學士班</option>
              <option value='261'>理學院學士班</option>
              <option value='262'>電資學士班</option>
              <option value='263'>電工系</option>
              <option value='266'>機械系</option>
              <option value='267'>土木系</option>
              <option value='269'>材料系</option>
              <option value='271'>應數系</option>
              <option value='272'>電機系</option>
              <option value='273'>光電系</option>
              <option value='274'>應化系</option>
              <option value='275'>生科系</option>
              <option value='276'>管科系</option>
              <option value='277'>運管系</option>
              <option value='278'>工工系</option>
              <option value='279'>外文系</option>
              <option value='280'>資財系</option>
              <option value='281'>人社系</option>
              <option value='282'>傳科系</option>
              <option value='494'>資工系(資工組)</option>
              <option value='495'>資工系(資電組)</option>
              <option value='496'>資工系(網多組)</option>
              <option value='500'>電物系(電子物理組)</option>
              <option value='501'>電物系(光電與奈米科學組)</option>
            </select>
          </div>
          <div>
            <select className='form-control'>
              <option value=''>入學年度</option>
              <option value='99'>99</option>
              <option value='100'>100</option>
              <option value='101'>101</option>
              <option value='102'>102</option>
              <option value='103'>103</option>
              <option value='104'>104</option>
              <option value='105'>105</option>
              <option value='106'>106</option>
            </select>
          </div>
          <button className='btn btn-success'>送出</button>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-10 col-md-offset-1 panel panel-default'>
          <div className='panel-body'>
            <h3>
              <b>資工系(資工組) 入學年度:</b>
              <b>畢業學分:128</b>
              <small>管理者: <a href='https://www.facebook.com/1330758163606152' target='_blank'>陳小翠</a></small>
              <button className='btn btn-info pull-right'>使用導覽</button>
              <a href='http://aadm.nctu.edu.tw/chcourse/class03.aspx?ftype=3' className='pull-right btn btn-primary' target='_blank'>
                <i className='fa fa-bookmark-o' />必修科目表
              </a>
            </h3>

            <hr />
            <div>
              <h3>
                <strong>課程列表</strong>
                <div className='btn-group'>
                  <button className='btn btn-success' disabled='disabled'>
                    修課學期
                  </button>
                  <button className='btn btn-success'>
                    學程
                  </button>
                </div>
              </h3>
              <section className='hidden'>
                <button className='btn btn-default'>展開互抵課程</button>
                <table className='table table-striped' />
                <table className='table table-bordered'>
                  <tbody>
                    <tr className='row course-required'>
                      <td id='1156' colspan='6' className='text-center'>
                        <h4>[必修]基本必修 | 需 <strong>56</strong> 學分</h4>
                      </td>
                    </tr>
                    <tr className='row'>
                      <th className='col-md-1' />
                      <th className='col-md-3 text-center'>課名</th>
                      <th className='col-md-2 text-center'>修課學期</th>
                      <th className='col-md-1 text-center'>學分</th>
                      <th className='col-md-2 text-center'>永久課號</th>
                      <th className='col-md-3 text-center'>類別</th>
                    </tr>
                    <tr className='lead_cours row'>
                      <td className='text-center' />
                      <td className='text-center'>線性代數</td>
                      <td className='text-center'>大一上</td>
                      <td className='text-center'>3</td>
                      <td className='text-center'>DCP2354</td>
                      <td className='text-center' />
                    </tr>
                    <tr className='lead_cours row'>
                      <td className='text-center' />
                      <td className='text-center'>導師時間</td>
                      <td className='text-center'>大一上</td>
                      <td className='text-center'>0</td>
                      <td className='text-center'>DCP1329</td>
                      <td className='text-center' />
                    </tr>
                    <tr className='lead_cours row'>
                      <td className='text-center' />
                      <td className='text-center'>作業系統概論</td>
                      <td className='text-center'>大三上</td>
                      <td className='text-center'>3</td>
                      <td className='text-center'>DCP4334</td>
                      <td className='text-center' />
                    </tr>
                    <tr className='lead_cours row'>
                      <td className='text-center' />
                      <td className='text-center'>微處理機系統實驗</td>
                      <td className='text-center'>大三上</td>
                      <td className='text-center'>2</td>
                      <td className='text-center'>DCP1155</td>
                      <td className='text-center' />
                    </tr>
                    <tr className='lead_cours row'>
                      <td className='text-center' />
                      <td className='text-center'>編譯器設計概論</td>
                      <td className='text-center'>大三上</td>
                      <td className='text-center'>3</td>
                      <td className='text-center'>DCP4529</td>
                      <td className='text-center' />
                    </tr>
                    <tr className='lead_cours row'>
                      <td className='text-center' />
                      <td className='text-center'>資訊工程研討</td>
                      <td className='text-center'>大四上</td>
                      <td className='text-center'>1</td>
                      <td className='text-center'>DCP4140</td>
                      <td className='text-center' />
                    </tr>
                    <tr className='row lead_course'>
                      <td className='text-center clickable-hover toggle-group' ><i className='fa fa-plus' /></td>
                      <td className='text-center'>微積分（一）</td>
                      <td className='text-center'>大一上</td>
                      <td className='text-center'>4</td>
                      <td className='text-center'>DAM1357</td>
                      <td className='text-center' />
                    </tr>
                  </tbody>
                </table>
                <table className='table table-bordered'>
                  <tbody>
                    <tr className='row course-elective'>
                      <td id='1157' colspan='6' className='text-center'><h4>[修選]物/化/生三選一 | 至少需 <strong>6</strong> 學分</h4></td>
                    </tr>
                    <tr className='row'><th className='col-md-1' />
                      <th className='col-md-3 text-center'>課名</th>
                      <th className='col-md-2 text-center'>修課學期</th>
                      <th className='col-md-1 text-center'>學分</th>
                      <th className='col-md-2 text-center'>永久課號</th>
                      <th className='col-md-3 text-center'>類別</th>
                    </tr>
                    <tr className='row lead_course'>
                      <td className='text-center clickable-hover toggle-group'><i className='fa fa-plus' /></td>
                      <td className='text-center'>物理(一)</td>
                      <td className='text-center'>大一上</td>
                      <td className='text-center'>4</td>
                      <td className='text-center'>DEP1111</td>
                      <td className='text-center' />
                    </tr>

                  </tbody>
                </table>
              </section>

              <section className='block'>
                <div className='row'>
                  <div className='col-md-4'>
                    <span className='clickable-hover' >
                      <div className='square-course' /> 基本必修
                    </span>
                  </div>
                  <div className='col-md-4'>
                    <span className='clickable-hover'>
                      <div className='square-course' /> 物/化/生三選一
                    </span>
                  </div>
                  <div className='col-md-4'>
                    <span className='clickable-hover'>
                      <div className='square-course' /> 已修課程
                    </span>
                  </div>
                </div>
                <table className='table'>
                  <tbody>
                    <tr className='text-center grade1'>
                      <th className='text-center' colspan='2'>一年級</th>
                      <th className='text-center grade2' colspan='2'>二年級</th>
                      <th className='text-center grade2' colspan='2'>三年級</th>
                      <th className='text-center grade2' colspan='2'>四年級</th>
                    </tr>
                    <tr className='text-center semester1'>
                      <th className='text-center semester1'>上學期</th>
                      <th className='text-center semester2'>下學期</th>
                      <th className='text-center semester2'>上學期</th>
                      <th className='text-center semester2'>下學期</th>
                      <th className='text-center semester2'>上學期</th>
                      <th className='text-center semester2'>下學期</th>
                      <th className='text-center semester2'>上學期</th>
                      <th className='text-center semester2'>下學期</th>
                    </tr>
                    <tr>
                      <td className='border-gray-line'>
                        <div className='btn-course '>普通生物學（一）</div>
                      </td>
                      <td className='border-gray-line'>
                        <div className='btn-course '>普通生物學（一）</div>
                      </td>
                      <td className='border-gray-line'>
                        <div className='btn-course '>普通生物學（一）</div>
                      </td>
                      <td className='border-gray-line'>
                        <div className='btn-course '>普通生物學（一）</div>
                      </td>
                      <td className='border-gray-line'>
                        <div className='btn-course '>普通生物學（一）</div>
                      </td>
                      <td className='border-gray-line'>
                        <div className='btn-course '>普通生物學（一）</div>
                      </td>
                      <td className='border-gray-line'>
                        <div className='btn-course '>普通生物學（一）</div>
                      </td>
                      <td className='border-gray-line'>
                        <div className='btn-course '>普通生物學（一）</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <hr />

              <section>
                <h3><strong>修課規定</strong></h3>
                <ul><li>[必修]基本必修 | 需 <strong>56</strong> 學分 </li></ul>
                <ul><li>[修選]物/化/生三選一 | 至少需 <strong>6</strong> 學分 </li></ul>
              </section>

              <hr />

              <section />
            </div>

            <div>
              <h3><strong>問題回報區</strong></h3>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
)

export default CourseMap
