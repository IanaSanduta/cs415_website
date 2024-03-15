import React, { useEffect, useState } from "react";
import Link from "next/link";
import "../src/app/globals.css";
import router from "next/router";
import { GetServerSideProps } from "next";
import nookies from "nookies";

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { token } = nookies.get(ctx);

//   if (!token) {
//     // Redirect to login if there's no token
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {}, // will be passed to the page component as props
//   };
// };
interface User {
  username_id: number;
  email: string;
  password: string;
  username: string;
  // Add other user properties as needed, for example:
  // email: string;
}

const Home: React.FC = () => {
  const [budgetItems, setBudgetItems] = useState([]);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("expense"); // 'saving' or 'expense'
  const [users, setUsers] = useState<User[]>([]);
  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");

    // Redirect to login page or home page
    router.push("/login");
  };
  // Dummy function to simulate adding a budget item
  const addBudgetItem = () => {
    const newItem = {
      id: budgetItems.length + 1,
      type,
      amount: parseFloat(amount),
      description,
    };
    //setBudgetItems([...budgetItems, newItem]);
    // Clear inputs
    setAmount("");
    setDescription("");
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch("http://50.16.61.244/users/");
      if (!response.ok) {
        throw new Error("Data fetch failed");
      }
      const data = await response.json(); // No type casting here
      // Extract the users array from the response and set it to the state
      setUsers(data.users); // Fallback to an empty array if data.users is undefined
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  // Calculate totals
  const totalSavings = "";
  // budgetItems
  //   .filter((item) => item.type === "saving")
  //   .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpenses = "";
  // budgetItems
  //   .filter((item) => item.type === "expense")
  //   .reduce((acc, curr) => acc + curr.amount, 0);

  const totalAmount = 1234;
  //totalSavings - totalExpenses;

  return (
    <>
      {/* Navbar - Reuse the style from the Landing component */}
      <nav className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <span className="text-xl font-semibold cursor-pointer">
              BudgetingApp
            </span>
          </Link>
          <div className="flex space-x-4">
            <Link href="/login">
              <span className="px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">
                Login
              </span>
            </Link>
            <Link href="/budget">
              <span className="px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">
                Budget
              </span>
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="bg-gray-700 flex flex-col items-center justify-center min-h-screen">
        <div className="container mx-auto px-6 py-16 text-center">
          <div>
            {users.map((user) => (
              <p key={user.username_id}>{user.username}</p> // Adjust according to actual user object structure
            ))}
          </div>
          <h1 className="text-4xl font-bold mb-2">Your Budget Overview</h1>
          <p className="text-gray-300 mb-6">
            Track your savings and expenses to better manage your finances.
          </p>

          {/* Budget Item Form */}
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="select select-bordered w-full max-w-xs"
            >
              <option value="saving">Saving</option>
              <option value="expense">Expense</option>
            </select>
            <button
              onClick={addBudgetItem}
              className="btn bg-blue-600 hover:bg-blue-900 text-white"
            >
              Add Item
            </button>
          </div>

          {/* Display Totals */}
          <div className="text-lg">
            <p>Total Savings: ${totalSavings}</p>
            <p>Total Expenses: ${totalExpenses}</p>
            <p>Net Amount: ${totalAmount}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

// // pages/login.tsx
// "use client";
// import { useState } from "react";
// import React from "react";

// const Home: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const router = useRouter();

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     // Handle the login logic
//     console.log("Email:", email, "Password:", password);
//     //router.push("/home.tsx");
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
//         <h3 className="text-2xl text-black font-bold text-center">
//           Home screen
//         </h3>
//       </div>
//     </div>
//   );
// };

// export default Home;
