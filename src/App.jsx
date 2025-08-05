import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaUserAlt, FaLock } from "react-icons/fa";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white bg-opacity-5 p-10 rounded-2xl backdrop-blur-md shadow-lg w-80"
      >
        <h2 className="text-2xl font-bold text-center text-neon mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="relative">
            <FaUserAlt className="absolute top-3 left-3 text-neon" />
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="pl-10 pr-4 py-2 w-full rounded bg-black text-white border border-neon focus:outline-none focus:ring-2 focus:ring-neon"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute top-3 left-3 text-neon" />
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="pl-10 pr-4 py-2 w-full rounded bg-black text-white border border-neon focus:outline-none focus:ring-2 focus:ring-neon"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-neon text-black font-semibold rounded hover:bg-white transition"
          >
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
}
