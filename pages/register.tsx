import { useRouter } from "next/router";
import { useState } from "react";
import "../src/app/globals.css";
import Link from "next/link";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL_BASE + "/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            username: username, // Make sure this matches with your backend expectation
          }),
        }
      );

      if (response.ok) {
        router.push("/home"); // Redirect to the login page after successful registration
      } else {
        const data = await response.json();
        alert(data.error);
      }
    } catch (error) {
      console.error("Registration request failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl text-black font-bold text-center">Register</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block text-black" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none text-black focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-black" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none text-black focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block text-black" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border text-black rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button
                type="submit"
                className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              >
                Register
              </button>
              <Link
                href="/login"
                className="px-6 py-2 mt-4 text-blue-500 underline hover:underline-offset-2"
              >
                Already have an account?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
