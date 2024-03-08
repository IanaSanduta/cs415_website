// pages/login.tsx
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Landing: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-500 text-white p-4">
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
            <Link href="/home">
              <span className="px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">
                Budget
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold text-center mb-2">
            Welcome to Your Budgeting Solution
          </h1>
          <p className="text-gray-700 mb-6">
            Take control of your finances with our easy-to-use budgeting
            platform.
          </p>

          <Image
            src="/landing.png" // Replace with your image path
            alt="Budgeting"
            width={1200}
            height={1000}
            className="mx-auto"
          />

          <div className="mt-6">
            <Link href="/get-started">
              <span className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900 cursor-pointer">
                Get Started
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Additional Content & Features Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Why Choose Us?
          </h2>
          {/* You can add more content here like feature lists, testimonials, etc. */}
        </div>
      </div>
    </>
  );
};

export default Landing;

// import Link from "next/link";
// import Image from "next/image";
// import React from "react";

// const Landing: React.FC = () => {
//   return (
//     <>
//       {/* Navbar */}
//       <nav className="bg-blue-400 text-white p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <a className="text-xl font-semibold" href="/">
//             BudgetingApp
//           </a>
//           <div>
//             <Link className="px-4 py-2 rounded hover:bg-gray-700" href="/login">
//               Login
//             </Link>
//             <Link
//               className="px-4 py-2 rounded hover:bg-gray-700"
//               href="/budget"
//             >
//               Budget
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content Area */}
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//         <div className="px-8 py-6 text-left bg-white shadow-lg">
//           <h3 className="text-2xl text-black font-bold text-center mb-4">
//             Welcome to Our Budgeting Platform
//           </h3>

//           {/* Sample Image - Replace 'your_image_path_here' with your actual image path */}
//           <div className="flex justify-center my-4">
//             <Image
//               src="/your_image_path_here.jpg"
//               alt="Budgeting"
//               width={600}
//               height={400}
//             />
//           </div>

//           {/* Filler Text */}
//           <p className="text-gray-700 text-md">
//             Take control of your finances with our easy-to-use budgeting
//             platform. Track your expenses, set savings goals, and manage your
//             money more effectively. Whether you're saving for a big purchase or
//             just trying to get your spending in check, we've got the tools you
//             need to succeed.
//           </p>

//           {/* Action Buttons */}
//           <div className="flex justify-center space-x-4 mt-4">
//             <Link
//               className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
//               href="/login"
//             >
//               Login
//             </Link>
//             <Link
//               className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
//               href="/budget"
//             >
//               Budget
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Landing;
// <div className="flex items-center justify-center min-h-screen bg-gray-100">
//   <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg space-x-2">
//     <h3 className="text-2xl text-black font-bold text-center">
//       Landing page
//     </h3>
//     <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
//       <Link href="/login">Login</Link>
//     </button>
//     <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
//       <Link href="/">Budget</Link>
//     </button>
//   </div>
// </div>
