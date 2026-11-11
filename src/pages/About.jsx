import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { CopyrightRounded } from '@mui/icons-material';
import { NavLink,Link } from 'react-router-dom';
export default function About() {
    return <div className="about-page">
        <h2>About Us</h2>
        <h1>Our Coffee Story</h1>
        <div className='about-content'>
            <div className="about-img">
                <img src='https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1200' 
                className='about-img' alt='Coffee shope' />
            </div>
            <div>
                <p className='about-text'>
                Lorem ipsum dolor sit amet  consectetur adipisicing elit.
                Nemo tempora quaerat, quia odit alias, laudantium numquam debitis i
                psam eos pariatur necessitatibus, unde delectus?
            </p>
            <Link to='/contact'>Learn more</Link>
            </div>
        </div>

        <div className='about-footer'>
            <div className="icon">
                <a href="" ><FacebookIcon /></a>
                <a href="" ><InstagramIcon /></a>
                <a href="" ><TwitterIcon /></a></div>
            <NavLink to="/contact">For More Information Contact Us</NavLink >
            <p><CopyrightRounded /> All copy rights back to Aya Akeel</p>
        </div>

    </div>;
}


