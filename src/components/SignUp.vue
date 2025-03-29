<template>
    <div class="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
      <div
        class="bg-white p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 hover:shadow-2xl transition duration-300"
        style="width: 400px"
      >
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-4">Sign Up</h2>
        <p class="text-gray-600 text-center mb-6">Create your portfolio account</p>
  
        <form>
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2" for="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-400"
            />
          </div>
  
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2" for="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-400"
            />
          </div>
  
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2" for="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-400"
            />
          </div>
  
          <button
            type="submit"
            class="w-full py-3 px-6 bg-purple-500 hover:bg-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SignUpPage",
  };
  </script>
  
  <style>
  /* Add custom animations or styles here if needed */
  </style>
  