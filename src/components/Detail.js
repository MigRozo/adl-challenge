import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { categoryTitle } from '../utils/dataFormats';

const Detail = props => {
	const { list } = props;
	const { id } = useParams();
	const currentItem = list.find( item => item.id === parseInt(id) );
	return (
		<article className="Detail">
			<Link to="/">&lt; Volver al inicio</Link>
			<h2>{categoryTitle(currentItem.typeAccount)}</h2>
			<ul>
				{Object.entries(currentItem).map(
					p => (typeof p[1] === 'string' || typeof p[1] === 'number')
						? <li><strong>{p[0]}:</strong> {p[1]}</li>
						: ''
				)}
			</ul>
		</article>
	);
}

export default Detail;
