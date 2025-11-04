import React from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import useSkill from "../useSkill/useSkill";
import { ClimbingBoxLoader } from "react-spinners";

const SkillDetails = () => {
  const { skills, loading } = useSkill();
  const { skillId } = useParams();
  const intId = parseInt(skillId);
  const singleData = skills.find((skill) => skill.skillId === intId);
  if (loading) {
    return (
      <div className="h-[97vh] flex items-center justify-center">
        <ClimbingBoxLoader color="#23ce99" />
      </div>
    );
  }
  const { image, skillName, description, category, slotsAvailable, rating } =
    singleData;
  const handelBookSubmit = (e) => {
    e.preventDefault();
    toast.success("Submit Successful..🌸");
    e.target.reset();
  };
  return (
    <div className=" container mx-auto p-4 md:p-10 lg:p-20">
      <div className="card lg:card-side bg-base-100 shadow-lg rounded-xl p-2 md:p-4">
        <figure>
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body space-y-3">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold ">
            {skillName}
          </h2>
          <p className="text-gray-600">{description}</p>
          <p className="text-lg md:text-xl lg:text-2xl font-medium ">
            {category}
          </p>
          <div className="flex justify-between ">
            <div className="border-2 border-emerald-800 rounded-xl shadow-lg px-4 py-1">
              <p className="text-emerald-900 font-semibold text-lg">
                Slots: {slotsAvailable}
              </p>
            </div>
            <div className="border-2 border-emerald-800 rounded-xl shadow-lg px-4 py-1">
              <p className="text-emerald-900 font-semibold text-lg">
                *{rating}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 space-y-4">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold text-[#1E2939] pb-2">
          Book Session
        </h2>
        <div className="flex justify-center">
          <form
            onSubmit={handelBookSubmit}
            className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
          >
            <label className="label">Name</label>
            <input type="name" className="input" placeholder="Name" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <button type="submit" className="btn btn-neutral mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;
