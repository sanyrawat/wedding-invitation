import { motion } from "framer-motion";
import { Heart, Flower2, Sparkles } from "lucide-react";

export default function App() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden p-6"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/flowers.png')",
        backgroundColor: "#fff5f7",
      }}
    >
      {/* Floating hearts & flowers */}
      <motion.div
        className="absolute top-20 left-10 text-pink-400 opacity-60"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Heart size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-24 right-12 text-red-300 opacity-60"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Heart size={32} />
      </motion.div>
      <motion.div
        className="absolute top-10 right-20 text-yellow-400 opacity-50"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <Flower2 size={38} />
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-16 text-pink-300 opacity-50"
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <Flower2 size={38} />
      </motion.div>

      {/* Sparkles */}
      <motion.div
        className="absolute top-1/3 left-1/4 text-yellow-400 opacity-40"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Sparkles size={30} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-1/4 text-pink-400 opacity-40"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Sparkles size={28} />
      </motion.div>

      {/* Invitation card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative bg-white/90 backdrop-blur-lg shadow-xl rounded-3xl border-4 border-pink-200 p-10 max-w-md text-center mt-12 overflow-hidden"
      >
        {/* Couple background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://your-couple-image-link.com/couple.jpg')`,
          }}
        ></div>

        {/* Decorative top ribbon with shimmer */}
        <motion.div
          className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-300 to-yellow-200 rounded-full px-6 py-2 text-sm font-semibold text-gray-700 shadow-md"
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Wedding Invitation
        </motion.div>

        {/* Content wrapper so text sits above image */}
        <div className="relative z-10">
          {/* Bride & Groom names */}
          <h2 className="text-5xl font-extrabold text-pink-600 mt-4 mb-2 font-serif drop-shadow-md">
            Sany <span className="text-3xl text-gray-500">&</span> Ankita
          </h2>
          <p className="text-lg text-gray-600 italic mb-6 drop-shadow">
            “Two souls, one journey, a lifetime of love.”
          </p>

          {/* Parents introduction */}
          <div className="mb-6 text-gray-700 text-sm">
            <p>With the blessings of our beloved parents,</p>
            <p className="font-medium">
              Mr. & Mrs. fgfjh <br />
              Mr. & Mrs. hjfgh
            </p>
            <p>We request your presence to celebrate this union.</p>
          </div>

          {/* Ceremony details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-pink-50/90 border border-pink-200 rounded-xl py-6 px-6 mb-6 shadow-inner"
          >
            <h3 className="text-xl font-semibold text-pink-600 mb-2">
              Wedding Ceremony
            </h3>
            <p className="text-lg">📅 <b>22nd November 2025</b></p>
            <p className="text-lg">⏰ <b>06:00 PM Onwards</b></p>
            <p className="text-lg">📍 <b>Basti, UP, India</b></p>
          </motion.div>

          {/* Reception details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="bg-yellow-50/90 border border-yellow-200 rounded-xl py-6 px-6 mb-6 shadow-inner"
          >
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">
              Reception Party
            </h3>
            <p className="text-lg">📅 <b>25th November 2025</b></p>
            <p className="text-lg">⏰ <b>7:00 PM Onwards</b></p>
            <p className="text-lg">📍 <b>Lucknow, UP, India</b></p>
          </motion.div>

          {/* RSVP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-gray-700 italic"
          >
            <p>Please RSVP before 15th Nov</p>
            <p className="font-medium">📞 +91-234567</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <p className="mt-10 text-sm text-gray-600">
        Designed with 💻✨ & love by Sany
      </p>
    </div>
  );
}
