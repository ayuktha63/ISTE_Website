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
        name: "Varsha Mary",
        role: "Sub-Head SHE Team",
        image: require("../assets/varsha_she.jpg"),
        linkedin: "https://www.linkedin.com/in/varsha-mary-9687022a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
        {
        name: "Aparna Rajagopal R",
        role: "Junior Execom Member",
        image: require("../assets/aparna_she.jpeg"),
        linkedin: "https://www.linkedin.com/in/aparna-rajagopal-r-772008319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        name: "Adia Ani",
        role: "SHE Team Member",
        image: require("../assets/adia_she.jpg"),
        linkedin: "https://www.linkedin.com/in/adia-ani-703a55327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
