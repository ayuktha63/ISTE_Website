import React from "react";
import TeamPage from "../components/TeamPage";

const contentTeamData = [
    {
        name: "Pushkala S S",
        role: "Documentation and content Team Head",
        image: require("../assets/pushkala_content.jpg"),
        linkedin: "https://www.linkedin.com/in/pushkala-s-s-38661b2a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        name: "Rohan Verma",
        role: "Copywriter",
        // image: require("../assets/rohan.jpg"),
        linkedin: "https://www.linkedin.com/in/rohan-verma"
    },
    {
        name: "Meera Nair",
        role: "Content Strategist",
        // image: require("../assets/meera.jpg"),
        linkedin: "https://www.linkedin.com/in/meera-nair"
    }
];

const ContentTeam = () => {
    return (
        <TeamPage
            title="Content Team"
            description="The Content Team crafts engaging and impactful narratives, ensuring our brand voice remains strong and consistent."
            teamMembers={contentTeamData}
        />
    );
};

export default ContentTeam;
