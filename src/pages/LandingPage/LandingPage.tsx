import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight, FaArrowDown, FaCheckCircle } from "react-icons/fa";

const covers = [
  "/images/coverBg.jpg",
  "/images/coverBg.jpg",
  "/images/coverBg.jpg",
];

const LandingPage = () => {
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === covers.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("1234567890");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={covers[current]}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${covers[current]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        {/* Overlay Text */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 p-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">
            Unbound
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Introducing Our New Magazine
          </p>
          <button className="flex items-center gap-2 bg-white text-indigo-900 font-semibold px-6 py-3 rounded-full hover:bg-indigo-100 transition">
            Learn More <FaArrowRight />
          </button>
        </motion.div>

        {/* Scroll Arrow */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaArrowDown size={24} />
        </motion.div>
      </section>

      {/* Previous Editions Section */}
      <section className="w-full py-20 px-6 md:px-20 bg-gray-50 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our Journey So Far
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
            We've come a long way. Here's a look back at our earlier editions.
          </p>

          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-2">Frontline Magazine</h3>
              <p className="text-gray-500">
                Our very first edition, highlighting voices that paved the way.
              </p>
              <div className="">
                <img src="/images/cover.jpg" alt="" />
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-2">Brainwave Magazine</h3>
              <p className="text-gray-500">
                A vibrant display of creativity and student energy.
              </p>
              <img src="/images/cover2.jpg" alt="" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* New Magazine Section */}
      <section className="w-full py-20 px-6 md:px-20 bg-white text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Introducing SAT Magazine 3.0 —{" "}
            <span className="text-indigo-600">UNBOUND!</span>
          </h2>

          <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed mb-8">
            The UNBOUND magazine is a compilation of students' expression,
            creativity and individuality whilst incorporating it as the Voice of
            the Students Populace. In essence, this edition aims to amplify the
            voices of the students and let them shine through, hence the
            theme...
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-4">
            Sponsorship Benefits:
          </h3>
          <ul className="text-left max-w-3xl mx-auto mb-8 text-gray-700 space-y-3">
            {[
              "Full page advert in the magazine",
              "Certificates/Frames of appreciation presented at the event",
              "Premium logo display on event banner",
              "Exclusive booth space for product showcasing and interaction with students",
              "Collaborated brand promotion",
              "Speaking opportunities during the event",
              "Special appreciation during the event",
            ].map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <FaCheckCircle className="text-green-500 mt-1" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setShowModal(true)}
            className="bg-indigo-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-indigo-700 transition"
          >
            Sponsor Us
          </button>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-4">Sponsor Details</h3>
              <p>
                <strong>Bank:</strong> Sterling Bank
              </p>
              <p>
                <strong>Account Name:</strong> The Students Ambassadors Team
              </p>
              <p className="mb-4">
                <strong>Account Number:</strong>{" "}
                <span
                  className="cursor-pointer text-indigo-600 underline"
                  onClick={handleCopy}
                >
                  0503184457
                </span>
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 text-sm text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Copied Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
          >
            Copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="w-full bg-gray-800 py-10 text-center text-gray-300">
        <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
          <p>&copy; 2025 Frontline Magazine</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              Home
            </a>
            <a href="#" className="hover:text-white">
              About
            </a>
            <a href="#" className="hover:text-white">
              Donate
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
