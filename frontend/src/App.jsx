import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useUser } from "./components/context/AuthContext"; // ✅ Import AuthProvider
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./components/Login/LoginPage";
import Signup from "./components/Login/Signup";
import JobLists from "./components/JobLists";
import JobDetails from "./components/JobDetails";
import ApplyToJob from "./components/ApplyToJob";
import VerifyEmail from "./components/VerifyEmail";
import PageNotFound from "./components/PageNotFound";
import ProtectedRoute from "./ProtectedRoute";
import { Toaster } from "react-hot-toast";
import AppLayout from "./components/AppLayout";
import UserProfile from "./components/UserProfile";
import GoogleTranslate from "./GoogleTranslate";
import EmployerRoute from "./EmployerRoute";
import JobForm from "./components/JobForm";
import CourseList from "./components/CourseList";
import CourseDetails from "./components/CourseDetails";

function ProtectedAuthRoute({ children }) {
  const { user } = useUser();
  return user ? <Navigate to="/home" replace /> : children;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />

          {/* ✅ Prevent logged-in users from accessing login/signup */}
          <Route
            path="/login"
            element={
              <ProtectedAuthRoute>
                <LoginPage />
              </ProtectedAuthRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedAuthRoute>
                <Signup />
              </ProtectedAuthRoute>
            }
          />

          <Route path="/joblists" element={<JobLists />} />
          <Route path="/home" element={<AppLayout />} />
          <Route path="/joblists/:id" element={<JobDetails />} />
          <Route path="/courselist" element={<CourseList />} />
          <Route path="/courselist/:id" element={<CourseDetails />} />

          {/* ✅ Protected Route: Only accessible if logged in */}
          <Route
            path="/apply/:id"
            element={
              <ProtectedRoute>
                <ApplyToJob />
              </ProtectedRoute>
            }
          />

          {/* ✅ Protected Profile Page */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />

          {/* ✅ Employer-Only Route for Job Creation */}
          <Route
            path="/create-job"
            element={
              <EmployerRoute>
                <JobForm />
              </EmployerRoute>
            }
          />

          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
        <Toaster position="top-center" />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
