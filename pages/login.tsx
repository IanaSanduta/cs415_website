"use client";
import router, { useRouter } from "next/router";
import { useState } from "react";
import "../src/app/globals.css";
import Link from "next/link";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const router = useRouter(); // Use the useRouter hook here

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Send the credentials to the backend
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL_BASE + "/login/",
        {
          // Make sure this URL matches your Django backend endpoint
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        // Save the token, navigate to home or another page
        localStorage.setItem("token", data.token);
        //window.location.href = "/home";
        router.push("/home"); // Redirect to the home page, adjust the path if necessary
      } else {
        // Handle login failure
        alert("Invalid login credentials.");
      }
    } catch (error) {
      // Handle errors
      console.error("Login request failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl text-black font-bold text-center">
          Login to your account
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block text-black" htmlFor="email">
                Username
              </label>
              <input
                type="text"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none text-black focus:ring-1 focus:ring-blue-600"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-black" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border text-black rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-baseline justify-between">
              {/* Remove the Link component wrapping the button */}
              <button
                type="submit"
                className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              >
                Login
              </button>
              <Link
                href="/register"
                className="px-6 py-2 mt-4 text-blue-500 underline hover:underline-offset-2"
              >
                Don't have an account yet?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
