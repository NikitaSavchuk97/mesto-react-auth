import __success from '../images/__success.svg'
import __error from '../images/__error.svg'

function InfoTooltip({ open, close, message }) {
	return (
		<div className={`popup ${open ? 'popup_active' : ''}`}>
			<div className="popup__container">
				<button onClick={close} className="popup__close" type="button"></button>
				<img className="popup__status" src={message ? __error : __success} alt={''} />
				< h2 className="popup__title">{message ? 'Что-то пошло не так! Попробуйте ещё раз.' : 'Вы успешно зарегистрировались!'}</h2>
			</div>
		</div>
	)
}

export default InfoTooltip;