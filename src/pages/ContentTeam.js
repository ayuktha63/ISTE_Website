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
        name: "Rishika Kunnumpurath Chali ",
        role: "Subhead of Content and Documentation team",
        image: require("../assets/rishika_content.jpg"),
        linkedin: "https://www.linkedin.com/in/rishika-kunnumpurath-chali-3b6346308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        name: "Megha Susan",
        role: "Subhead of Doumentation and Content team",
        image: require("../assets/megha_content.jpg"),
        linkedin: "https://www.linkedin.com/in/megha-susan-undefined-aaa166307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        name: "Sneha A Oommen",
        role: "Member of Content and Documentation team",
        image: require("../assets/sneha_content.jpg"),
        linkedin: "https://www.linkedin.com/in/sneha-a-oommen-50a0aa328"
    },
    {
        name: "Adithyan. M. S",
        role: "Content writer ",
        image: require("../assets/adhithyan_content.jpg"),
        linkedin: "https://www.linkedin.com/in/adithyan-m-s-nandhu-b40a94357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
