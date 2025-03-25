import React from "react";
import TeamPage from "../components/TeamPage";

const mentorsData = [
    {
        name: "Dr. John Doe",
        role: "Senior Advisor",
        image: require("../assets/krishna.jpg"),
        linkedin: "https://www.linkedin.com/in/johndoe/"
    },
    {
        name: "Prof. Jane Smith",
        role: "Research Mentor",
        image: require("../assets/krishna.jpg"),
        linkedin: "https://www.linkedin.com/in/janesmith/"
    }
];

const Mentors = () => {
    return (
        <TeamPage
            title="Mentors"
            description="Our mentors guide us with their expertise, helping us grow and excel."
            teamMembers={mentorsData}
        />
    );
};

export default Mentors;
