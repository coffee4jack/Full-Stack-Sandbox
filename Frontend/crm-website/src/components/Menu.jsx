import { Music, Disc, Headphones, Tag, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

function Menu() {
    return (
        <div className="w-full bg-[#111115]/95 backdrop-blur-md text-[#eaeaea] py-4 px-6 md:px-12 flex justify-between items-center shadow-2xl border-b border-[#22222a] sticky top-0 z-50">
            {/* Logo / Nombre de la Tienda */}
            <div className="flex items-center gap-2 font-bold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 cursor-pointer">
                <Music className="text-purple-400 stroke-[2.5px]" />
                <span className="font-extrabold">SONORA</span>
            </div>

            {/* Enlaces de Navegación del Menú (Tienda de Música) */}
            <ul className="hidden md:flex items-center gap-8 font-medium">
                <li className='hover:text-purple-400 hover:scale-105 transition-all duration-200 ease-in-out'>
                    <a href="#instrumentos" className="flex items-center gap-2">
                        <Music size={18} /> Instrumentos
                    </a>
                </li>
                <li className='hover:text-purple-400 hover:scale-105 transition-all duration-200 ease-in-out'>
                    <a href="#vinilos" className="flex items-center gap-2">
                        <Disc size={18} /> Vinilos & CDs
                    </a>
                </li>
                <li className='hover:text-purple-400 hover:scale-105 transition-all duration-200 ease-in-out'>
                    <a href="#audio" className="flex items-center gap-2">
                        <Headphones size={18} /> Audio & DJ
                    </a>
                </li>
                <li className='hover:text-purple-400 hover:scale-105 transition-all duration-200 ease-in-out'>
                    <a href="#ofertas" className="flex items-center gap-2">
                        <Tag size={18} /> Ofertas
                    </a>
                </li>
            </ul>

            {/* Carrito de Compras en la parte derecha */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative"
            >
                <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-2 px-5 rounded-full shadow-lg transition-all duration-200">
                    <ShoppingCart size={18} strokeWidth={2} />
                    <span className="hidden sm:inline">Carrito</span>
                    <span className="bg-white text-pink-600 text-xs font-bold px-2 py-0.5 rounded-full ml-1">
                        3
                    </span>
                </button>
            </motion.div>
        </div>
    );
}

export default Menu;