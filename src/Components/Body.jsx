import './Body.css'
import Burger from './Burger'
import Navbar from './Navbar'
import Title from './Title'
import Subtitle from './Subtitle'
import Icons from './Icons'
import Footer from './Footer'

function Body() {
    return (
        <>
            <Burger />
            <Navbar />
            <main>
                <div className='splash-container'>
                    <div className='splash'>
                        <Title />
                        <Subtitle />
                        <Icons />
                        {/* <Footer /> */}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Body