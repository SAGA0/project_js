'use strict'

let numberOfFilms

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы смотрели', '')

	while (
		numberOfFilms == '' ||
		numberOfFilms == null ||
		isNaN(numberOfFilms)
	) {
		numberOfFilms = +prompt('Сколько фильмов вы смотрели', '')
	}
}

start()

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
}

function detectPersonalLevel() {
	if (personalMovieDB.count <= 10) {
		alert('Мало просмотренных фильмов')
	} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
		alert('Вы классический зритель')
	} else {
		alert('Вы киноман')
	}
}

detectPersonalLevel()

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из просмотренных фильмов?', ''),
			b = +prompt('На сколько оцените?', '')

		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b
			console.log('done')
		} else {
			console.log('error')
			i--
		}
	}
}

rememberMyFilms()

console.log(personalMovieDB)
