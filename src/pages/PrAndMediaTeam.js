import React from "react";
import TeamPage from "../components/TeamPage";

const prAndMediaTeamData = [
    {
        name: "S Aravind Krishna",
        role: "PR and Media Team Head",
        image: require("../assets/aravind_pr.png"),
        linkedin: "https://www.linkedin.com/in/s-aravind-krishna-775187284"
    },
    // image: require("../assets/sneha.jpg"),
    {
        name: "Adhithya Mohan S",
        role: "PR and Media",
        image: require("../assets/mohan_pr.jpg"),
        linkedin: "https://www.linkedin.com/in/adhithya-mohan-s"
    },
    {
        name: "Hemanth H",
        role: "Sub Head",
        // No image link provided
        linkedin: "https://www.linkedin.com/in/hemanth-h-4850a5255"
    },
    {
        name: "Neeraj D Manoj",
        role: "Sub Head",
        image: require("../assets/neeraj_pr.jpeg"),
        linkedin: "https://www.linkedin.com/in/neeraj-d-manoj-032862274"
    }
];

const PrAndMediaTeam = () => {
    return (
        <TeamPage
            title="PR & Media Team"
            description="The PR and Media Team manages public relations, content creation, and media presence to promote our initiatives."
            teamMembers={prAndMediaTeamData}
        />
    );
};

export default PrAndMediaTeam;
