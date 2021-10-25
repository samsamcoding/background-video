import {VFC} from 'react';
import {BiMenu} from 'react-icons/bi';
import {FaFacebookF, FaGoogle, FaInstagram, FaTwitter} from 'react-icons/fa';

export const WebsiteOverlay: VFC = () => {
    return <div className="flex flex-col absolute w-full h-full z-10 p-10 text-white">
        <div className="flex">
            <div className="text-lg font-bold uppercase">Philippines Tourism</div>
            <div className="ml-auto text-4xl font-bold uppercase"><BiMenu/></div>
        </div>
        <div className="flex font-bold flex-col my-auto max-w-[38rem] backdrop-blur-[40px] p-4 rounded-3xl">
            <div className="uppercase text-8xl">Welcome!</div>
            <div className="uppercase text-5xl mb-6">Exploring the Philippines</div>
            <div className="mb-6">
                When it comes to tourism in the Philippines, it is necessary to mention the Palawan archipelago that nature bestows on this country. Palawan province includes the largest, long and narrow Palawan island, plus a number of other nearby islets such as Coron Island and El Nido, which are already well-known on the world island tourism map.
            </div>
            <button className="mr-auto px-6 py-2 bg-white text-lg text-black uppercase rounded-lg font-bold">Explore</button>
        </div>
        <div className="flex text-3xl gap-8 mt-auto">
            <FaFacebookF/>
            <FaInstagram/>
            <FaTwitter/>
            <FaGoogle/>
        </div>
    </div>;
};
