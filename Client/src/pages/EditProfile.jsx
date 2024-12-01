import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from './../Context/Authcontext'; // Custom hook to get and update user details

function EditProfile() {
  const { user } = useLocation().state; // Assuming user data is passed from Profile Page
  const navigate = useNavigate();
  // Assuming this method updates the backend data

  // Form fields
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio || "");
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || "");
  const [profilePicture, setProfilePicture] = useState(user.profilePicture || "");
  const [bannerImage, setBannerImage] = useState(user.bannerImage || "");

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBannerImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    // Create the updated user object
    const updatedUser = { name, email, bio, phoneNumber, profilePicture, bannerImage };
  
    // Log the updated user details to the console
    console.log("Updated User Details:", updatedUser);
  
    
  };

  return (
    <div className="min-h-screen mt-20 bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Banner Image Section */}
        

        {/* Profile Picture Section */}
        <div className="flex justify-center mb-8">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img
              src={profilePicture || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <label htmlFor="profile-picture" className="absolute bottom-0 right-0 bg-white rounded-full p-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9M14 4l8 8-6 6-8-8-4 4V4h6z" />
              </svg>
            </label>
            <input
              type="file"
              id="profile-picture"
              className="hidden"
              accept="image/*"
              onChange={handleProfilePictureChange}
            />
          </div>
        </div>

        {/* Edit Profile Form */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-300">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div className="mb-4">
          <label htmlFor="banner-image" className="block text-sm font-medium text-gray-700">Banner Image</label>
          <div className="relative">
            <div className="w-full h-44 bg-cover bg-center rounded-xl" style={{ backgroundImage: `url(${bannerImage || "https://via.placeholder.com/600x200"})` }}></div>
            <input
              type="file"
              id="banner-image"
              className="hidden"
              accept="image/*"
              onChange={handleBannerImageChange}
            />
            <label htmlFor="banner-image" className="absolute bottom-4 right-4 bg-white p-2 rounded-full cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9M14 4l8 8-6 6-8-8-4 4V4h6z" />
              </svg>
            </label>
          </div>
        </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 mt-2 border text-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
              disabled
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full px-4 py-3 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Tell us something about yourself..."
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-3 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Your phone number"
            />
          </div>

          <button
            onClick={handleSave}
            className="w-full py-3 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition duration-300 mt-6"
          >
            Save Changes
          </button>
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  );
}

export default EditProfile;