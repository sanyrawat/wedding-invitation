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
            backgroundImage: `url('/DSC_0253.JPG')`,
            backgroundPosition: '40% center',
          }}
        ></div>

        {/* Decorative top ribbon with shimmer */}
        <motion.div
          className="absolute -top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-300 to-yellow-200 rounded-full px-6 py-2 text-sm font-semibold text-gray-700 shadow-md whitespace-nowrap"
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Wedding Invitation
        </motion.div>

        {/* Content wrapper so text sits above image */}
        <div className="relative z-10">
          {/* Bride & Groom names */}
          <h2 className="text-5xl font-extrabold text-pink-600 mt-4 mb-2 font-serif drop-shadow-md">
            Sany <span className="text-3xl text-gray-500"><br />&</span> <br />Ankita
          </h2>
          <p className="text-lg text-gray-600 italic mb-6 drop-shadow">
            “Two souls, one journey, a lifetime of love.”
          </p>

          {/* Parents introduction */}
          <div className="mb-6 text-gray-700 text-sm">
            <p>With the blessings of our beloved parents,</p>
            <p className="font-bold">
              Mr. & Mrs. GopalJi Rawat, <br />
              Mr. & Mrs. Durga Prasad Rawat
            </p>
            <p>We request your presence to celebrate this union.</p>
          </div>

          {/* Ceremony details */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.8 }}
  className="bg-pink-45/50 border border-pink-200 rounded-xl py-6 px-6 mb-6 shadow-inner text-left"
>
  <h3 className="text-xl font-semibold text-pink-600 mb-2">
    Wedding Ceremony
  </h3>
  <p className="text-lg">🥁 <b>22nd Nov 2025</b></p>
  <p className="text-lg">⏰ <b>06:00 PM Onwards</b></p>
  <p className="text-lg">
    📍{" "}
    <a
      href="https://maps.app.goo.gl/tjM9BXYCC3ufVjpf7"
      target="_blank"
      rel="noopener noreferrer"
      className="underline text-pink-600 hover:text-pink-800"
    >
      Prince Garden Marriage Hall, Station Road, Chiyabari Basti, UP, India
    </a>
  </p>
</motion.div>

{/* Reception details */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1, duration: 0.8 }}
  className="bg-yellow-50/50 border border-yellow-200 rounded-xl py-6 px-6 mb-6 shadow-inner text-left"
>
  <h3 className="text-xl font-semibold text-yellow-600 mb-2">
    Reception Party
  </h3>
  <p className="text-lg">🥂 <b>25th Nov 2025</b></p>
  <p className="text-lg">⏰ <b>7:00 PM Onwards</b></p>
  <p className="text-lg">
    📍{" "}
    <a
      href="https://maps.app.goo.gl/ATZS1j2dCbd7nVJV8"
      target="_blank"
      rel="noopener noreferrer"
      className="underline text-yellow-600 hover:text-yellow-800"
    >
      Isha Niwas, Sardar Patel Nagar, Maharajganj, Azamgarh, UP, India
    </a>
  </p>
</motion.div>


          {/* RSVP Section */}
<div className="text-gray-700 italic mt-4">
  <p className="mb-2">Please RSVP before 15th Nov</p>

  <div className="flex justify-center gap-3 mt-2">
    <a
      href={`https://wa.me/91-9415005761?text=${encodeURIComponent(
        "Hi, I would love to attend Sany & Ankita's wedding! RSVP: Yes"
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium"
    >
      ✅ Yes
    </a>

    <a
      href={`https://wa.me/91-9415005761?text=${encodeURIComponent(
        "Hi, I won't be able to attend Sany & Ankita's wedding. RSVP: No"
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium"
    >
      ❌ No
    </a>

    <a
      href={`https://wa.me/91-9415005761?text=${encodeURIComponent(
        "Hi, I might attend Sany & Ankita's wedding. RSVP: Maybe"
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium"
    >
      🤔 Maybe
    </a>
  </div>
</div>

          {/* Share via WhatsApp */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="mt-6"
          >
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                "💍 You're Invited! 🎉\n\nSany & Ankita’s Wedding 💕\n\n📅 22nd Nov 2025 - Wedding Ceremony\n📍 Prince Garden Marriage Hall, Station Road, Chiyabari Basti, UP\n\n🥂 25th Nov 2025 - Reception Party\n📍 Isha Niwas, Sardar Patel Nagar, Maharajganj, Azamgarh, UP\n\nWe’d love to see you there! 🌸"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M16.001 2.917c-7.29 0-13.208 5.917-13.208 13.208 0 2.324.615 4.588 1.782 6.574L2.917 29.083l6.606-1.727c1.91 1.037 4.063 1.582 6.478 1.582 7.291 0 13.208-5.917 13.208-13.208s-5.917-13.208-13.208-13.208zm0 23.875c-2.062 0-4.083-.532-5.875-1.542l-.417-.24-3.927 1.025 1.052-3.823-.26-.438c-1.104-1.833-1.688-3.948-1.688-6.031 0-6.417 5.208-11.625 11.625-11.625 6.417 0 11.625 5.208 11.625 11.625s-5.208 11.625-11.625 11.625zm6.479-8.792c-.354-.177-2.083-1.031-2.406-1.146-.323-.115-.562-.177-.802.177-.24.354-.917 1.146-1.125 1.385-.208.24-.417.27-.771.094-.354-.177-1.49-.552-2.84-1.76-1.049-.938-1.76-2.094-1.969-2.448-.208-.354-.021-.542.156-.719.161-.16.354-.417.531-.625.177-.208.24-.354.354-.594.115-.24.06-.448-.03-.625-.083-.177-.802-1.927-1.099-2.635-.29-.698-.583-.604-.802-.615-.208-.01-.448-.012-.688-.012s-.635.094-.969.448c-.333.354-1.271 1.24-1.271 3.021 0 1.781 1.302 3.5 1.49 3.74.188.24 2.563 3.917 6.208 5.292.867.375 1.542.594 2.073.76.87.276 1.667.24 2.292.146.698-.104 2.083-.854 2.375-1.677.292-.823.292-1.531.208-1.677-.083-.146-.323-.24-.677-.417z" />
              </svg>
              Share via WhatsApp
            </a>
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
