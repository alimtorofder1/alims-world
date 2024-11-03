import { Link } from 'react-router-dom';
import '../../../App.css';
import useProducts from '../../../hooks/useProducts';

const Category = () => {
    const [products]=useProducts();
    const humidifier = products.filter(item => item.category === 'humidifier')
    const fan = products.filter(item => item.category === 'fan')
    const powerBank = products.filter(item => item.category === 'powerBank')
    const Watch = products.filter(item => item.category === 'Watch')
    const airpods = products.filter(item => item.category === 'airpods')

    return (
        <div id='box-1' class="box">
            <ul>
                <li className='hover:link-secondary pl-4 pt-2'><Link to={'/humidifer'}>Humidifer</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link>Fan</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link>Lamp</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link>PowerBank</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link>Clock</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link>Airpods</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link>Speaker</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link>Tripod</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link>Mouse</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link>Power Bank</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link>Keyboard</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link>Mouse Pad</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link>Headset</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link>Mobile Stand</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link>Smart Watch</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link>Watch</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link>Toys</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link>Key Ring</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link>Stiker</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link>Wooden</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link>Trimmer</Link></li>
                <li className='hover:link-secondary pl-4 pt-2'><Link>Mobile Cover</Link></li>
            </ul>
        </div>
    );
};

export default Category;