import React from "react";
import TeamPage from "../components/TeamPage";

const coreTeamData = [
    {
        name: "Yash Chhalotre ",
        role: "Chairperson",
        image: require("../assets/yash_core.jpeg"),
        linkedin: "https://www.linkedin.com/in/cdt-yash-chhalotre-55090b24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
        name: "Krishna Prasanth",
        role: "Joint Secretary",
        image: require("../assets/krishna_core.jpg"),
        linkedin: "https://www.linkedin.com/in/krishna-prasanth-2121b61b3"
    },
    {
        name: "Snith Shibu ",
        role: "General Secretary ",
        image: require("../assets/snith_core.jpeg"),
        linkedin: "https://www.linkedin.com/in/snithshibu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }
];

const CoreTeam = () => {
    return (
        <TeamPage
            title="Core Team"
            description="Our core team members drive the vision and ensure smooth operations."
            teamMembers={coreTeamData}
        />
    );
};

export default CoreTeam;
