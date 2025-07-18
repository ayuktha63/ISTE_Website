import React from "react";
import TeamPage from "../components/TeamPage";

const techTeamData = [
    {
        name: "Krishna Prasad",
        role: "Tech Co-Lead",
        image: require("../assets/krishna.png"),
        linkedin: "https://www.linkedin.com/in/krishna-prasad63/"
    },
    {
        name: "Sudhin Suresh",
        role: "Tech Lead",
        // image: require("../assets/sneha.jpg"),
        linkedin: "https://www.linkedin.com/in/sneha-iyer"
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
