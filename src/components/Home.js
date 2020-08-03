import React, { useState } from 'react';
import Card from './Card';
import { categoryTitle } from '../utils/dataFormats';

const Home = props => {
	const { list } = props;
	const banks = Array.from( new Set(list.map( item => item.accountInformation.bank )) );
	const categories = Array.from( new Set(list.map( item => item.typeAccount )) );
	const productsByBank = bank => list.filter( item => item.accountInformation.bank === bank );
	const productsByCategory = (bank, category) => bank.filter( item => item.typeAccount === category );

	const [showAllBanks, setShowAllBanks] = useState(false);

	const handleChange = e => {
		setShowAllBanks(e.target.checked);
	};
	return (
		<section className="products">
			<header className="header">
				<h1>Buenos días, Miguel</h1>
				<p>
					Mostrar todos los productos
					<label className="switch" htmlFor="show_all_banks">
						<input type="checkbox" id="show_all_banks" onChange={handleChange} />
						<span className="switch_mod"></span>
					</label>
				</p>
			</header>

			{banks.sort().map( (bank, i) => {
				const currentBank = productsByBank(bank);
				let maxBanksToShow = showAllBanks ? banks.length : 1;
				if (i < maxBanksToShow) {
					return (
						<div className="bank" id={`bank${i+1}`} key={i}>
							<h2>Banco {i+1}</h2>

							{categories.map( (category, j) => {
								const currentCategory = productsByCategory(currentBank, category);
								if (currentCategory.length) {
									return (
										<div className="category" id={`category${j+1}`} key={j}>
											<h3>{ categoryTitle(category) } {`(${currentCategory.length})`}</h3>
											<div className="category_list">
												{currentCategory.map( (item, k) => <Card info={item} key={item.id} /> )}
											</div>
										</div>
									);
								}
							} )}

						</div>
					);
				}
			})}
		</section>
	);
}

export default Home;
