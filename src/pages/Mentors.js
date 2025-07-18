import React from "react";
import TeamPage from "../components/TeamPage";

const mentorsData = [
    {
        name: "Mr Melvin Jacob",
        role: (
            <>
                Assistant Professor
                <br />
                Dept of Mechanical Engineering
            </>
        ),
        image: require("../assets/melvin_faculty.jpg"),
        linkedin: "https://www.linkedin.com/in/johndoe/"
    },
    {
        name: "Prof. Jane Smith",
        role: "Research Mentor",
        // image: require("../assets/krishna.jpg"),
        linkedin: "https://www.linkedin.com/in/janesmith/"
    }
];


const Mentors = () => {
    return (
        <TeamPage
            title="Mentors"
            description="Our mentors guide us with their expertise, helping us grow and excel."
            teamMembers={mentorsData}
        />
    );
};

export default Mentors;
