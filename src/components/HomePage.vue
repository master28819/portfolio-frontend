<template>
    <div class="homepage bg-gray-100 text-gray-900 min-h-screen flex flex-col">
      <!-- Navigation Header -->
      <header class="navbar fixed top-0 w-full z-50">
  <nav class="container mx-auto flex justify-between items-center py-4 px-6">
    <h1 class="logo">PortfolioPro</h1>
    <!-- Navigation Links -->
    <div class="nav-links hidden md:flex space-x-1 text-lg">
        <a href="#" class="nav-link active">Home</a>
        <a href="#features" class="nav-link">Features</a>
      <a href="#deploy" class="nav-link">Deploy</a>
      <a href="#pricing" class="nav-link">Pricing</a>
      <a href="#contact" class="nav-link">Contact</a>
    </div>
  </nav>
</header>

      <!-- Main Hero Section -->
      <main class="flex-grow flex items-center justify-center mt-20">
        <div class="container mx-auto flex flex-col md:flex-row items-center gap-10 p-6">
          <!-- Image Section -->
          <div class="image-section w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1612119241005-d6b7f7440c44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80"
              alt="Portfolio Website Preview"
              class="rounded-lg shadow-lg"
            />
          </div>
    
          <!-- Text Section -->
          <div class="text-section w-full md:w-1/2 text-center md:text-left">
            <h2 class="heading">
              Create Your Portfolio in Minutes!
            </h2>
            <p class="description">
              Welcome to PortfolioPro! Generate a stunning and personalized portfolio page with just a few clicks.
              Highlight your skills, projects, and achievements without any coding.
            </p>
            <button class="cta-button">
              Get Started Now
            </button>
            <!-- Additional Information -->
            <p class="mt-4 text-sm text-gray-600">
              We deploy your web page instantly and provide you with a unique URL that is active for one month.
            </p>
          </div>
        </div>
      </main>
    
      <!-- Features Section -->
      <section id="features" class="py-10 bg-white">
        <div class="container mx-auto px-6 text-center">
          <h3 class="text-3xl font-bold text-gray-800 mb-6">Why Use PortfolioPro?</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="feature-box">
              <h4 class="text-2xl font-bold mb-2">Easy to Use</h4>
              <p class="text-gray-600">
                Our intuitive interface makes portfolio creation fast and fun.
              </p>
            </div>
            <div class="feature-box">
              <h4 class="text-2xl font-bold mb-2">Customizable Themes</h4>
              <p class="text-gray-600">
                Choose from modern themes to make your portfolio truly yours.
              </p>
            </div>
            <div class="feature-box">
              <h4 class="text-2xl font-bold mb-2">Instant Deployment</h4>
              <p class="text-gray-600">
                We deploy your portfolio and give you a unique URL, ready to share.
              </p>
            </div>
          </div>
        </div>
      </section>
    
      <!-- Footer -->
      <footer class="footer">
        <div class="container mx-auto text-center">
          <p>&copy; 2025 PortfolioPro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <style scoped>
 /* Navigation Container */
.navbar {
  /* Optional background gradient for the nav bar itself */
  background: linear-gradient(to right, #cfd3d6, #e2e6e9);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-bottom: 1px solid #ccc;
}

/* Logo */
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2563eb; /* Blue-600 */
}

/* Navigation Links Container */
.nav-links {
  /* We rely on Tailwind’s "flex" and "space-x-1" for layout and spacing */
}
.nav-link.active {
  background: linear-gradient(to bottom, #ffffff 0%, #cccccc 100%);
  color: #000;
  transform: translateY(-2px);
  text-decoration: none; /* or underline, up to you */
}

/* Each Nav Link for 3D/tab-like appearance */
.nav-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem 0.5rem 0 0; /* Rounded top corners to mimic tabs */
  background: linear-gradient(to bottom, #f7f7f7 0%, #e2e2e2 100%);
  border: 1px solid #ccc;
  color: #333;
  text-decoration: none;
  transition: background 0.3s, color 0.3s, transform 0.3s;
}

/* Hover State (appears pressed/active) */
.nav-link:hover {
  background: linear-gradient(to bottom, #ffffff 0%, #d9d9d9 100%);
  color: #000;
  text-decoration: underline;
  transform: translateY(-2px);
}

  /* Footer Styling */
  .footer {
    background-color: #1a202c; /* Gray-900 */
    color: #e2e8f0; /* Gray-300 */
    font-size: 0.875rem;
    padding: 1rem 0;
  }
  
  /* Main Section Styles */
  .heading {
    font-size: 2.5rem;
    font-weight: 800;
    color: #1f2937; /* Gray-800 */
    margin-bottom: 1rem;
  }
  
  .description {
    font-size: 1.125rem;
    color: #4b5563; /* Gray-600 */
    margin-bottom: 1.5rem;
  }
  
  .cta-button {
    background-color: #2563eb; /* Blue-600 */
    color: #ffffff;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-size: 1.125rem;
    font-weight: 600;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #1d4ed8; /* Blue-700 */
    transform: translateY(-3px);
  }
  
  /* Feature Box Styling */
  .feature-box {
    background-color: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .feature-box:hover {
    transform: scale(1.05);
  }
  </style>
  