let cols = document.getElementsByClassName('collapse');
for (let i = 0; i < cols.length; i++) {
	let block = cols[i].nextElementSibling;
	cols[i].addEventListener("click", (event) => {
		block.style.display === 'none' || block.style.display === ''
			? block.style.display = 'block' : block.style.display = 'none';
	});
}