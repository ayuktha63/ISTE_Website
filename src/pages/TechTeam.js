import React from "react";
import TeamPage from "../components/TeamPage";

const techTeamData = [
    {
        name: "Rahul Menon",
        role: "Tech Lead",
        // image: require("../assets/rahul.jpg"),
        linkedin: "https://www.linkedin.com/in/rahul-menon"
    },
    {
        name: "Sneha Iyer",
        role: "Software Developer",
        // image: require("../assets/sneha.jpg"),
        linkedin: "https://www.linkedin.com/in/sneha-iyer"
    },
    {
        name: "Arjun Das",
        role: "Cloud & DevOps Engineer",
        // image: require("../assets/arjun.jpg"),
        linkedin: "https://www.linkedin.com/in/arjun-das"
    }
];

const TechTeam = () => {
    return (
        <TeamPage
            title="Tech Team"
            description="The Tech Team is responsible for developing and maintaining our technical projects and infrastructure."
            teamMembers={techTeamData}
        />
    );
};

export default TechTeam;
