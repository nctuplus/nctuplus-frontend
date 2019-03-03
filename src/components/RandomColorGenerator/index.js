import React from 'react';
import styles from './style.scss'
import randomColor from 'randomcolor';

const RandomColorGenerator = (props) => {
	return Array(50).fill(0).map((item, index)=>{
		const seed = 'NCTU+ is G' + (Array(index).fill('o').join('') + 'd');
		const color = randomColor({
			count: 5,
			seed: seed//'NCTU+ is goooood'//'NCTUplus is Goood'//
		})
		return(
			<div className={styles.randomColorGenerator} key={index}>
				<h6>{seed}</h6>
				<div>
					{color.map((c, i)=>(
						<div key={i} style={{backgroundColor:c}}/>
					))}
				</div>
			</div>
		)
	})
}
export default RandomColorGenerator
