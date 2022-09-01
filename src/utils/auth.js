export const BASE_URL = 'https://auth.nomoreparties.co';

function dataServerAnswer(resolve) {
	if (resolve.ok) {
		return resolve.json()
	}
	return Promise.reject(`Ошибка ${resolve.status}`)
}

export const registeration = (password, email) => {
	return fetch(`${BASE_URL}/signup`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ password, email })
	})
		.then((resolve) => {
			return dataServerAnswer(resolve)
		})
}

export const authorization = (password, email) => {
	return fetch(`${BASE_URL}/signin`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ password, email })
	})
		.then((resolve) => {
			return dataServerAnswer(resolve)
		})
}

export const validation = (token) => {
	return fetch(`${BASE_URL}/users/me`, {
		method: 'GET',
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	})
		.then((resolve) => {
			return dataServerAnswer(resolve)
		})
}
