import React from "react";
import TeamPage from "../components/TeamPage";

const coreTeamData = [
    {
        name: "Krishna Prashanth",
        role: "Vice Chairperson",
        image: require("../assets/krishna.jpg"),
        linkedin: "https://www.linkedin.com/in/krishna-prasanth-2121b61b3/"
    },
    {
        name: "Kiran Biju",
        role: "Joint Secretary",
        image: require("../assets/kiran.jpg"),
        linkedin: "https://www.linkedin.com/in/kiran-biju"
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
