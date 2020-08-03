import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { categoryTitle, currencyFormat, ccFormat, dateFormat } from '../utils/dataFormats';
import icon1 from '../icon1.svg';
import icon2 from '../icon2.svg';
import icon3 from '../icon3.svg';
import icon4 from '../icon4.svg';
import icon5 from '../icon5.svg';

const Card = props => {
	const { info } = props;
	let details;
	switch ( info.typeAccount ) {
		case 'CERTIFIED_DEPOSIT_TERM':
			details = (
				<Fragment>
					<img className="icon" src={icon1} alt="icon 1" />
					<p>Nro. { info.id }</p>
					<p>cdtInfo</p>
				</Fragment>
			);
			break;
		case 'CREDIT':
			details = (
				<Fragment>
					<img className="icon" src={icon2} alt="icon 2" />
					<p>Nro. { info.id }</p>
					<p>creditInfo</p>
				</Fragment>
			);
			break;
		case 'CREDIT_CARD':
			details = (
				<Fragment>
					<img className="icon" src={icon3} alt="icon 3" />
					<p>Nro. { ccFormat(info.id) }</p>
					<p>Saldo disponible: <strong>{currencyFormat(info.productAccountBalances.cupo_disponible_compras_pesos.amount)}</strong></p>
					<p>Fecha de pago: <strong>{dateFormat(info.dueDate)}</strong></p>
				</Fragment>
			);
			break;
		case 'CURRENT_ACCOUNT':
			details = (
				<Fragment>
					<img className="icon" src={icon4} alt="icon 4" />
					<p>Nro. { info.id }</p>
					<p>ccorrienteInfo</p>
				</Fragment>
			);
			break;
		case 'DEPOSIT_ACCOUNT':
			details = (
				<Fragment>
					<img className="icon" src={icon5} alt="icon 5" />
					<p>Nro. { info.id }</p>
					<p>Saldo disponible: <strong>{currencyFormat(info.productAccountBalances.saldo_disponible.amount)}</strong></p>
					<p>Saldo actual: <strong>{currencyFormat(info.productAccountBalances.saldo_actual.amount)}</strong></p>
				</Fragment>
			);
			break;
		default:
			return false;
	}
	return (
		<article className="Card">
			<Link to={`/detail/${info.id}`}>Ver detalle &gt;</Link>
			<h4>{ categoryTitle( info.typeAccount ) }</h4>
			{details}
		</article>
	);
}

export default Card;
