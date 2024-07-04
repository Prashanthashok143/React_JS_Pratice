// Filename - Search.js 

import React from "react";
import "./Main2.css"


function Search({ searchInput, search }) {
	return (
		<div className="search-bar">
			<input
				type="text"
				placeholder="Search for a Movie..."
				className="search"
				onChange={searchInput}
				onKeyPress={search}
			/>
		</div>
	);
}

export default Search;
