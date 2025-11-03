import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, setUser, setLoading, updateProfileUser } = use(AuthContext);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    if (user) {
      setName(user?.displayName || "");
      setPhoto(user?.photoURL || "");
    } else {
      setName("");
      setPhoto("");
    }
  }, [user]);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    updateProfileUser(name, photo)
      .then(() => {
        setLoading(false);
        toast.success("Profile Updated..🛎️");
        setUser({
          ...user,
          displayName: name,
          photoURL: photo,
        });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="min-h-[96vh] flex items-center justify-center bg-[#023020] relative overflow-hidden">
      <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 animate__animated animate__fadeInDown">
        <h2 className="text-2xl font-semibold mb-6 text-center text-white">
          My Profile
        </h2>
        <form onSubmit={handleUpdateProfile} className="space-y-4 text-white">
          <div>
            <img
              className="h-32 w-32 mx-auto rounded-full border-gray-300 border-2 shadow-md shadow-purple-800"
              src={photo || "https://avatar.iran.liara.run/public/3"}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">User Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">User Image</label>
            <input
              type="text"
              name="photo"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Your photo URL here"
              className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">User Email</label>
            <input
              type="email"
              name="email"
              value={user?.email || ""}
              readOnly
              className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none "
            />
          </div>
          <button
            type="submit"
            className="btn w-full bg-gradient-to-r from-[#023020] via-cyan-700 to-[#00FF99] text-gray-200 font-semibold border-none hover:scale-105 transition-transform duration-200"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
