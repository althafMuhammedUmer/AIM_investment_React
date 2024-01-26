import React from "react";
import img from "../../assets/images/image_1.jpg";

const JuryMembers = () => {
  const members = [
    {
      id: 1,
      title: "Business Person 1",
      designation: "CEO",
      imageUrl: "https://source.unsplash.com/300x200/?business-person", // Replace with actual business person image URL
    },
    {
      id: 2,
      title: "Business Person 2",
      designation: "CTO",
      imageUrl: "https://source.unsplash.com/300x201/?business-person",
    },
    {
      id: 3,
      title: "Business Person 3",
      designation: "CFO",
      imageUrl: "https://source.unsplash.com/300x202/?business-person",
    },
    {
      id: 4,
      title: "Business Person 4",
      designation: "COO",
      imageUrl: "https://source.unsplash.com/300x203/?business-person",
    },
  ];
  return (
    <div className="flex flex-col p-16 gap-8">
      <p className="text-3xl font-bold text-center">JURY MEMBERS</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white">
        {members.map((card) => (
          <div key={card.id} className="bgPrimary p-4 rounded-md shadow-md">
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-64 object-cover mb-4 rounded-md"
            />
            <div className="text-white text-center">
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="text-sm">{card.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JuryMembers;
