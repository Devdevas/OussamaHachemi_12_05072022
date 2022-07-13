import './style.css'

function InfosCard({ icon, nutrition, count }) {
    return <div className='card'>
        <img src={icon} alt='icon' />
        <div>
            <p className='count'>{count}</p>
            <p className='nutrition'>{nutrition}</p>
        </div>
    </div>
}

export default InfosCard