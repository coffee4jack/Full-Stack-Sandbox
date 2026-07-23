import { motion } from "motion/react"

// Card that has an input of background color
function Card({ BackgroundColor = 'bg-[#42c264]', Image, Title, Description, Price }) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer w-64 m-3"
            >
                <div className={`${BackgroundColor} p-3 rounded-2xl shadow-lg`}>
                    <div className="bg-[#ededed] p-3 rounded-xl flex flex-col gap-3">
                        {Image && (
                            <img 
                                src={Image} 
                                alt={Title} 
                                className="w-full h-40 object-cover rounded-lg shadow-sm"
                            />
                        )}
                        <div>
                            <h1 className="text-xl font-bold text-black truncate">{Title}</h1>
                            <p className="text-gray-600 text-xs font-light line-clamp-2 h-8 mt-1">{Description}</p>
                            {Price && (
                                <div className="flex justify-between items-center mt-3 pt-2 border-t border-gray-200">
                                    <span className="text-sm font-bold text-purple-700">{Price}</span>
                                    <span className="text-[10px] bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded">Comprar</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Card