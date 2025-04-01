"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';

type FormData = {
  username: string;
  email: string;
  contact: string;
  password: string;
  skillset: string;
};

export default function Page() {
  const [isLogin, setIsLogin] = useState<boolean>(true); // To toggle between login and register
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    contact: '',
    skillset: '',
  });

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Logging in with data: ', formData);
    } else {
      console.log('Registering with data: ', formData);
    }
    // Add your authentication logic here
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-4 text-center">{isLogin ? 'Login' : 'Register'}</h1>

      <form onSubmit={handleSubmit}>
        <table className="w-full">
          <tbody>
            {/* Email field for Register */}
            {!isLogin && (
              <tr>
                <td className="py-2 text-left"><label htmlFor="email" className="font-medium">Email</label></td>
                <td className="py-2"><input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                /></td>
              </tr>
            )}

            {/* Username field */}
            <tr>
              <td className="py-2 text-left"><label htmlFor="username" className="font-medium">{isLogin ? 'Username' : 'Full Name'}</label></td>
              <td className="py-2"><input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              /></td>
            </tr>

            {/* Contact field */}
            {!isLogin && (
            <tr>
                <td className="py-2 text-left"><label htmlFor="contact" className="font-medium">Contact</label></td>
                <td className="py-2"><input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                /></td>
            </tr>
            )}

            {/* Skillset field */}
            {!isLogin && (
            <tr>
                <td className="py-2 text-left"><label htmlFor="skillset" className="font-medium">Skillset</label></td>
                <td className="py-2"><input
                type="text"
                id="skillset"
                name="skillset"
                value={formData.skillset}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                /></td>
            </tr>
            )}

            {/* Password field */}
            <tr>
              <td className="py-2 text-left"><label htmlFor="password" className="font-medium">Password</label></td>
              <td className="py-2"><input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              /></td>
            </tr>
          </tbody>
        </table>

        <div className="mt-4">
          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </div>
      </form>

      <p className="mt-4 text-center text-sm">
        {isLogin ? 'Need an account?' : 'Already have an account?'}{' '}
        <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500 hover:text-blue-700">
          {isLogin ? 'Register' : 'Login'}
        </button>
      </p>
    </div>
  );
}
