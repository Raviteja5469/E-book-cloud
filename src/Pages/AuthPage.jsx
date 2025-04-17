import React, { useState, useEffect } from "react";
import {
  Mail,
  Github,
  ArrowRight,
  ArrowLeft,
  Lock,
  User,
  Eye,
  EyeOff,
  Twitch,
  Twitter,
} from "lucide-react";

const AuthPage = () => {
  // Component State
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Disable body scrolling while modal is active
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling when unmounted
    };
  }, []);

  // Toggle between Login and Signup Forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  // Toggle Password Visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      // Login API call
      try {
        const response = await fetch("/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (response.ok) {
          console.log("Login successful:", data);
          localStorage.setItem("token", data.token);
          window.location.href = "/";
        } else {
          console.error("Login failed:", data.message);
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    } else {
      // Signup API call
      try {
        const response = await fetch("/api/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        });
        const data = await response.json();
        if (response.ok) {
          console.log("Signup successful:", data);
          localStorage.setItem("token", data.token);
          window.location.href = "/";
        } else {
          console.error("Signup failed:", data.message);
        }
      } catch (error) {
        console.error("Error during signup:", error);
      }
    }
  };

  // Quote based on login or sign-up mode
  const quote = isLogin
    ? "Unlock your potential with every login."
    : "Begin your journey with us, sign up today.";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 p-4 relative overflow-hidden">
      {/* Animated Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-indigo-200/50 dark:bg-indigo-800/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 30 + 150}px`,
              height: `${Math.random() * 30 + 150}px`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Auth Container */}
      <div className="relative w-full mt-7 max-w-md z-10 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl dark:shadow-none border border-gray-100 dark:border-gray-700 overflow-hidden">
        {/* Transition Forms Container */}
        <div className="relative h-[520px] overflow-hidden">
          {/* Login Form */}
          <div
            className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out transform ${
              isLogin ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"
            }`}
          >
            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Welcome Back
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 italic">
                  {quote}
                </p>
              </div>

              {/* Username */}
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute top-4 left-4 text-gray-400 dark:text-gray-600" />
                  <input
                    type="text"
                    placeholder="Enter your username"
                    className="input-field"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute top-4 left-4 text-gray-400 dark:text-gray-600" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="input-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full btn-primary">Login</button>
            </form>
          </div>

          {/* Signup Form */}
          {/* Same structure as the login form, but shows when `isLogin` is false */}
          {/* ... Additional code here for Signup */}
        </div>

        {/* Toggle Between Login and Signup */}
        <div className="toggle-auth">
          <button onClick={toggleForm} className="toggle-auth-content">
            {isLogin ? (
              <>
                Need an account? <ArrowRight className="w-5 h-5" />
              </>
            ) : (
              <>
                Already have an account? <ArrowLeft className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
