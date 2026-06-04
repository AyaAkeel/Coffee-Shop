import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { CopyrightRounded } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
export default function About() {
    return <div className="about-page">
        <h2>About Our Coffee Shop</h2>
        <div className='about-content'>
            <div><img src='src/images/coffee-backgrounds/pic2.png' className='about-img' alt='Coffee shope' /></div>
            <div><p className='about-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum porro omnis quos, libero cum, debitis distinctio mollitia amet voluptatum consequatur labore totam velit repellendus rerum. Doloribus ipsum facere perferendis?
                Lorem ipsum dolor sit amet  consectetur adipisicing elit.<br /> Nemo tempora quaerat, quia odit alias, laudantium numquam debitis ipsam eos pariatur necessitatibus, unde delectus? Voluptates possimus ducimus quidem repellendus id aut.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint sit dolorum dolor eaque. Nisi modi voluptatum quis architecto soluta. Nostrum aperiam atque provident labore tenetur ipsam voluptas laborum maiores!
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum porro omnis quos, libero cum, debitis distinctio mollitia amet voluptatum consequatur labore totam velit repellendus rerum. Doloribus ipsum facere perferendis?
                Lorem ipsum dolor sit amet  consectetur adipisicing elit.<br /> Nemo tempora quaerat, quia odit alias, laudantium numquam debitis ipsam eos pariatur necessitatibus, unde delectus? Voluptates possimus ducimus quidem repellendus id aut.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint sit dolorum dolor eaque. Nisi modi voluptatum quis architecto soluta. Nostrum aperiam atque provident labore tenetur ipsam voluptas laborum maiores!
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum porro omnis quos, libero cum, debitis distinctio mollitia amet voluptatum consequatur labore totam velit repellendus rerum. Doloribus ipsum facere perferendis?
                Lorem ipsum dolor sit amet  consectetur adipisicing elit.<br /> Nemo tempora quaerat, quia odit alias, laudantium numquam debitis ipsam eos pariatur necessitatibus, unde delectus? Voluptates possimus ducimus quidem repellendus id aut.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint sit dolorum dolor eaque. Nisi modi voluptatum quis architecto soluta. Nostrum aperiam atque provident labore tenetur ipsam voluptas laborum maiores!
            </p></div>
        </div>

        <div className='about-footer'>
            <div className="icon">
                <a href="#" ><FacebookIcon /></a>
                <a href="#" ><InstagramIcon /></a>
                <a href="#" ><TwitterIcon /></a></div>
            <NavLink to="/contact">For More Information Contact Us</NavLink >
            <p><CopyrightRounded /> All copy rights back to Aya Akeel and Nour Al Marhaj</p>
        </div>

    </div>;
}


