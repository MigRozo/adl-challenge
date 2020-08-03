export const categoryTitle = category => {
	switch ( category ) {
		case 'CERTIFIED_DEPOSIT_TERM':
			return 'CDT';
		case 'CREDIT':
			return 'Crédito';
		case 'CREDIT_CARD':
			return 'Tarjeta de Crédito';
		case 'CURRENT_ACCOUNT':
			return 'Cuenta corriente';
		case 'DEPOSIT_ACCOUNT':
			return 'Cuenta de ahorros';
		default:
			return category;
	}
};

export const currencyFormat = num => `$${new Intl.NumberFormat('co-CO').format(num)}`;
export const ccFormat = num => String(num).replace(/.{12}/,'xxxxxxxxxxxx').split( /(?=(?:....)*$)/ ).join(' ');
export const dateFormat = str => {
	let dt = new Date(str),
		dd = dt.getDate(),
		mm = dt.getMonth() + 1,
		yy = dt.getFullYear();
	return `${yy} / ${mm} / ${dd}`;
};