import './homePage.scss';
import SearchBar from '../../components/searchBar/SearchBar';
import { useContext } from 'react';
import {AuthContext} from '../../context/AuthContext.jsx';
function HomePage() {
    const {currentUser} = useContext(AuthContext)
    console.log(currentUser); //refresh page after login to see curr user info
    return (
        <div className='homePage'>

            <div className="textContainer">     { /*Container for heading and searchbar in left */}
            
                <div className="wrapper">       {/* text wrapper */}

                    <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni perferendis impedit delectus quis perspiciatis quos sint ullam. Impedit, quas temporibus?</p>

                    <SearchBar />
                    {/* ------------- */}
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>2000+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                    
                </div>   
                
            </div>

            <div className="imgContainer">      {/*  Image container on the right */}
                <img src="/bg.png" alt="building sample images" />
            </div>
        </div>
    );
}

export default HomePage;
