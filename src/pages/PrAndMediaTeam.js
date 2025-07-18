import React from "react";
import TeamPage from "../components/TeamPage"; // fixed typo in import

const prAndMediaTeamData = [
    {
        name: "Sneha Iyer",
        role: "PR & Media Lead",
        image: require("../assets/sneha.jpg"),
        linkedin: "https://www.linkedin.com/in/sneha-iyer"
    },
    {
        name: "Arya Raj",
        role: "Media Coordinator",
        image: require("../assets/arya.jpg"),
        linkedin: "https://www.linkedin.com/in/arya-raj/"
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
