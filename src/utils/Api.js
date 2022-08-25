class Api {
	constructor({ baseUrl, headers }) {
		this._baseUrl = baseUrl;
		this._headers = headers;
	}



	getUserInfo() {
		return fetch(`${this._baseUrl}/users/me`, {
			headers: this._headers,
		}).then(this._dataServerAnswer)
	}

	setUserInfo({ name, about }) {
		return fetch(`${this._baseUrl}/users/me`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				name: name,
				about: about,
			})
		}).then(this._dataServerAnswer)
	}

	getCards() {
		return fetch(`${this._baseUrl}/cards`, {
			headers: this._headers,
		}).then(this._dataServerAnswer)
	}

	setCard({ name, link }) {
		return fetch(`${this._baseUrl}/cards`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({
				name: name,
				link: link,
			})
		}).then(this._dataServerAnswer)
	}

	deleteCard(id) {
		return fetch(`${this._baseUrl}/cards/${id}`, {
			method: 'DELETE',
			headers: this._headers,
		}).then(this._dataServerAnswer)
	}

	likeCard(id) {
		return fetch(`${this._baseUrl}/cards/likes/${id}`, {
			method: 'PUT',
			headers: this._headers,
		}).then(this._dataServerAnswer)
	}

	dislikeCard(id) {
		return fetch(`${this._baseUrl}/cards/likes/${id}`, {
			method: 'DELETE',
			headers: this._headers,
		}).then(this._dataServerAnswer)
	}

	setAvatar({ avatar }) {
		return fetch(`${this._baseUrl}/users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				avatar: avatar,
			})
		}).then(this._dataServerAnswer)
	}

	_dataServerAnswer(resolve) {
		if (resolve.ok) {
			return resolve.json()
		}
		return Promise.reject(resolve.status)
	}
}

const api = new Api({
	baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-45',
	headers: {
		authorization: '73461d7d-29b1-45f6-bf45-d662ef1bce52',
		'Content-Type': 'application/json',
	},
})

export default api;