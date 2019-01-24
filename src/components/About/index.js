import React from 'react'
import styles from './style.scss'

const About = (props) => (
  <section className={`${styles.about} py-5`}>
    <div className='container'>
      <div className={styles.gridContainer}>
        <div className={styles.logoWrapper}>
          <img
            alt='Logo22'
            className={`${styles.logo} d-inline-block`}
            src='https://plus.nctu.edu.tw/assets/logo22-aa2cbf8a416ebd64859993acc6c97feb.png'
          />
        </div>
        <h2 className={styles.title}>About NCTU+ </h2>
        <div className={styles.article}>
          NCTU+是一個交大非官方的資訊組織，有鑑於目前校園系統仍有許多改善空間，我們從改寫校園系統開始，擴展出許多更便利、更友善且更美觀的服務。<br />
          我們一方面向校方請求開放Data及API，另一方面聆聽同學們的需求並不斷發想新的點子，我們不僅純粹的coding，我們希望結合行銷、設計、工程等不同領域的人才，不斷地進步使平台變的更好。
        </div>
      </div>
    </div>
  </section>

)

export default About
