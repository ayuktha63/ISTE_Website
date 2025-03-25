import React from "react";
import TeamPage from "../components/TeamPage";

const sheTeamData = [
    {
        name: "Reshma RL",
        role: "She Team Lead",
        image: require("../assets/reshma_she.jpeg"),
        linkedin: "https://www.linkedin.com/in/reshma-rl-3a3111212?"
    },
    {
        name: "Riya Verma",
        role: "Community Outreach",
        // image: require("../assets/riya.jpg"),
        linkedin: "https://www.linkedin.com/in/riya-verma"
    }
];

const SheTeam = () => {
    return (
        <TeamPage
            title="She Team"
            description="The She Team empowers and supports women in technology and leadership."
            teamMembers={sheTeamData}
        />
    );
};

export default SheTeam;
