const row = document.querySelector('.carousel-container');
const movies = document.querySelectorAll('.movie');

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

// ----- ----- right-arrow's Event Listener ----- -----
rightArrow.addEventListener('click', () => {
	row.scrollLeft += row.offsetWidth;

	const indicatoractive = document.querySelector('.indicators .active');
	if(indicatoractive.nextSibling){
		indicatoractive.nextSibling.classList.add('active');
		indicatoractive.classList.remove('active');
	}
});

// ----- ----- Left-arrow's Event Listener ----- -----
leftArrow.addEventListener('click', () => {
	row.scrollLeft -= row.offsetWidth;

	const indicatoractive = document.querySelector('.indicators .active');
	if(indicatoractive.previousSibling){
		indicatoractive.previousSibling.classList.add('active');
		indicatoractive.classList.remove('active');
	}
});

// ----- ----- Pagination ----- -----
const numeroPaginas = Math.ceil(movies.length / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicator = document.createElement('button');

	if(i === 0){
		indicator.classList.add('active');
	}

	document.querySelector('.indicators').appendChild(indicator);
	indicator.addEventListener('click', (e) => {
		row.scrollLeft = i * row.offsetWidth;

		document.querySelector('.indicators .active').classList.remove('active');
		e.target.classList.add('active');
	});
}

// ----- ----- Hover ----- -----
movies.forEach((movie) => {
	movie.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			movies.forEach(movie => movie.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 50);
	});
});

row.addEventListener('mouseleave', () => {
	movies.forEach(movie => movie.classList.remove('hover'));
});