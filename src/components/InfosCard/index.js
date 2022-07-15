import './style.css'
import PropTypes from 'prop-types'

/**
 * Create informations card of a user
 * @param { String } icon
 * @param { String } nutrition 
 * @param { String } count
 * @return { HTMLElement } 
 */

function InfosCard({ icon, nutrition, count }) {
    return <div className='card'>
        <img src={icon} alt='icon' />
        <div>
            <p className='count'>{count}</p>
            <p className='nutrition'>{nutrition}</p>
        </div>
    </div>
}

InfosCard.propTypes = {
    icon: PropTypes.string,
    nutrition: PropTypes.string,
    count: PropTypes.string,
}

export default InfosCard