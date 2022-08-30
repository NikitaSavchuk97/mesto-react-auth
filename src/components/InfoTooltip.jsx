import __success from '../images/__success.svg'
import __error from '../images/__error.svg'

function InfoTooltip() {
	return (
		<div className="popup">
			<div className="popup__container">
				<button className="popup__close" type="button"></button>
				<img className="popup__status" src={__success} alt={''} />
				< h2 className="popup__title">{''}</h2>
			</div>
		</div>
	)
}

export default InfoTooltip;