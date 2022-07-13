import './style.css'
import icon1 from '../../assets/icon-1.png'
import icon2 from '../../assets/icon-2.png'
import icon3 from '../../assets/icon-3.png'
import icon4 from '../../assets/icon-4.png'

function VerticalNav() {
    return <aside className='vertical-nav'>
        <nav className='icons'>
            <img src={icon1} alt='icon 1' />
            <img src={icon2} alt='icon 2' />
            <img src={icon3} alt='icon 3' />
            <img src={icon4} alt='icon 4' />
        </nav>
        <p>Copiryght, SportSee 2020</p>
    </aside>

}
export default VerticalNav