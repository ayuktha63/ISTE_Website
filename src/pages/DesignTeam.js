import React from "react";
import TeamPage from "../components/TeamPage";

const designTeamData = [
    {
        name: "Abhinav K",
        role: "Lead Designer",
        image: require("../assets/abhinav_design.jpeg"),
        linkedin: "https://www.linkedin.com/in/abhinav-k-aa6403284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
        name: "Sariga Joseph Fredy",
        role: "UI/UX Designer",
        image: require("../assets/sariga_design.jpeg"),
        linkedin: "https://www.linkedin.com/in/sariga-joseph-fredy-565473340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }
];

const DesignTeam = () => {
    return (
        <TeamPage
            title="Design Team"
            description="The Design Team creates stunning visuals and user experiences for our projects."
            teamMembers={designTeamData}
        />
    );
};

export default DesignTeam;
