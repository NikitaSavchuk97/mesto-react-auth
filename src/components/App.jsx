import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";

import Main from "./Main";
import Login from './Login';
import Header from "./Header";
import Footer from "./Footer";
import api from "../utils/Api";
import Register from './Register';
import ImagePopup from "./ImagePopup";
//import InfoTooltip from './InfoTooltip';
import PopupTypeInfo from "./PopupTypeInfo";
import ProtectedRoute from './ProtectedRoute';
import PopupTypeAvatar from "./PopupTypeAvatar";
import PopupTypeAddCard from "./PopupTypeAddCard";
import PopupTypeConfirm from "./PopupTypeConfirm";
import { registeration, authorization, validation } from "../utils/auth";



function App() {
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState({ name: '', link: '' });
	const [isEditInfoPopupOpen, setIsEditInfoPopupOpen] = useState(false);
	const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
	const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
	const [currentUser, setCurrentUser] = useState({});
	const [loggedIn, setLoggedIn] = useState(false);
	const [cards, setCards] = useState([]);
	const navigate = useNavigate();

	function handleShowIllustrationClick(card) { setSelectedCard(card) };
	function handleEditAvatarClick() { setIsEditAvatarPopupOpen(true) };
	function handleEditProfileClick() { setIsEditInfoPopupOpen(true) };
	function handleAddCardClick() { setIsAddCardPopupOpen(true) };
	function handleConfirmClick() { setIsConfirmPopupOpen(true) };

	function closeThisPopup() {
		setIsEditAvatarPopupOpen(false);
		setIsEditInfoPopupOpen(false);
		setIsAddCardPopupOpen(false);
		setIsConfirmPopupOpen(false);
		setSelectedCard({});
	};

	/*
		function checkToken() {
			const token = localStorage.getItem('token')
			validation(token)
				.then((res) => {
					setLoggedIn(true)
					navigate('/cards')
				})
		}
	*/

	useEffect(() => {
		Promise.all([api.getUserInfo(), api.getCards()])
			.then(([apiUser, apiCards]) => {
				setCurrentUser(apiUser)
				setCards(apiCards)
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			validation(token)
				.then((res) => {
					setLoggedIn(true);
					navigate("/cards");
				})
		}
	}, [navigate]);

	function logout() {
		localStorage.removeItem('token')
		setLoggedIn(false)

	}

	function handleCardLike(card) {
		const isLiked = card.likes.some(i => i._id === currentUser._id);
		let apiMethod;
		if (!isLiked) {
			apiMethod = api.likeCard(card._id, !isLiked)
		} else {
			apiMethod = api.dislikeCard(card._id, !isLiked)
		}
		apiMethod
			.then((newCard) => {
				setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
			})
			.catch((err) => console.log(err))
	}

	function handleCardDelete(card) {
		api.deleteCard(card._id)
			.then(() => {
				setCards((res) => (res.filter((item) => item._id !== card._id)))
			})
			.catch((err) => console.log(err))
	}

	function handleUpdateUser(data) {
		api.setUserInfo(data)
			.then((res) => {
				setCurrentUser(res)
				closeThisPopup()
			})
			.catch((err) => console.log(err))
	}

	function handleUpdateAvatar(data) {
		api.setAvatar(data)
			.then((res) => {
				setCurrentUser(res)
				closeThisPopup()
			})
			.catch((err) => console.log(err))
	}

	function handleAddNewCard(data) {
		api.setCard(data)
			.then((res) => {
				setCards([res, ...cards])
				closeThisPopup()
			})
			.catch((err) => console.log(err))
	}

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="page">

				<Header
					logout={logout}
				/>

				<Routes>
					<Route
						path="/cards"
						element={
							<ProtectedRoute loggiedIn={loggedIn}>
								<Main
									cards={cards}
									likeClick={handleCardLike}
									deleteClick={handleCardDelete}
									cardClick={handleAddCardClick}
									avatarClick={handleEditAvatarClick}
									profileClick={handleEditProfileClick}
									illustrationClick={handleShowIllustrationClick}
								/>
							</ProtectedRoute>
						}
					/>

					<Route
						path="/sign-in"
						element={
							<Login />
						}
					/>

					<Route
						path="/sign-up"
						element={
							<Register />
						}
					/>

					<Route
						exact
						path="/"
						element={
							loggedIn ? <Navigate to="/cards" /> : <Navigate to="/sign-in" />
						}
					/>
				</Routes>

				<Footer />

				<PopupTypeAvatar
					onUpdateAvatar={handleUpdateAvatar}
					open={isEditAvatarPopupOpen}
					close={closeThisPopup}
				/>

				<PopupTypeInfo
					onUpdateUser={handleUpdateUser}
					open={isEditInfoPopupOpen}
					close={closeThisPopup}
				/>

				<PopupTypeAddCard
					onAddNewCard={handleAddNewCard}
					open={isAddCardPopupOpen}
					close={closeThisPopup}
				/>

				<PopupTypeConfirm
					open={isConfirmPopupOpen}
					close={closeThisPopup}
				/>

				<ImagePopup
					card={selectedCard}
					close={closeThisPopup}
				/>

			</div >
		</CurrentUserContext.Provider>
	);
}

export default App;