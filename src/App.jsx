import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import CreateEvent from './pages/CreateEvent';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import EventDetails from './pages/EventDetails';
import Error from './components/Error';
import ChatBot from './components/ChatBot'; // Include the ChatBot component
import { UserProvider } from './context/userContext'; // Import the UserProvider
import ProtectedLayout from './layout/ProtectedLayout'; // Import ProtectedLayout for protected routes

// Define the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='event/:eventID' element={<EventDetails />} />
      <Route path='create' element={<ProtectedLayout />}>
        {/* Protect this route */}
        <Route index element={<CreateEvent />} />
      </Route>
      <Route path='signin' element={<SignIn />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='chatbot' element={<ChatBot />} /> {/* Add the ChatBot route */}
      <Route path='/*' element={<Error />} />
    </Route>
  )
);

// Wrap the RouterProvider with UserProvider
const App = () => (
  <UserProvider> {/* Ensure this wraps the entire app */}
    <RouterProvider router={router} />
  </UserProvider>
);

export default App;
