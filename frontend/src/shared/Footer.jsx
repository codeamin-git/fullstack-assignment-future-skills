
const Footer = () => {
    return (
        <footer className="bg-black text-white p-12 flex flex-col lg:flex-row">
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">

        <div>
            <h3 className="font-bold mb-2">Abstract</h3>
            <ul>
                <li><a className="text-gray-400">Branches</a></li>
            </ul>
        </div>
        
        <div>
            <h3 className="font-bold mb-2">Resources</h3>
            <ul>
                <li><a className="text-gray-400">Blog</a></li>
                <li><a className="text-gray-400">Help Center</a></li>
                <li><a className="text-gray-400">Release Notes</a></li>
                <li><a className="text-gray-400">Status</a></li>
            </ul>
        </div>
        
        <div>
            <h3 className="font-bold mb-2">Community</h3>
            <ul>
                <li><a className="text-gray-400">Twitter</a></li>
                <li><a className="text-gray-400">LinkedIn</a></li>
                <li><a className="text-gray-400">Facebook</a></li>
                <li><a className="text-gray-400">Dribbble</a></li>
                <li><a className="text-gray-400">Podcast</a></li>
            </ul>
        </div>
        
        <div>
            <h3 className="font-bold mb-2">Company</h3>
            <ul>
                <li><a className="text-gray-400">About Us</a></li>
                <li><a className="text-gray-400">Careers</a></li>
                <li><a className="text-gray-400">Legal</a></li>
                <li><a className="text-white font-bold mt-4">Contact Us</a></li>
                <li><a className="text-gray-400">info@abstract.com</a></li>
            </ul>
        </div>
    </div>
    <div className="text-center text-gray-400 max-w-xs flex justify-end items-end mt-6">
        <p>&copy; Copyright 2022 Abstract Studio Design, Inc. All rights reserved.</p>
    </div>
    
</footer>

    );
};

export default Footer;