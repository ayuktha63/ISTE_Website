import React from "react";
import TeamPage from "../components/TeamPage";

const eventManagementTeamData = [
    {
        name: "Akhil Raj",
        role: "Event Coordinator",
        image: require("../assets/Joan_Joe_event.jpg"),
        linkedin: "https://www.linkedin.com/in/joan-eliza-joe-101b94297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        name: "Sneha Menon",
        role: "Logistics Head",
        image: require("../assets/arya_event.png"),
        linkedin: "https://in.linkedin.com/in/arya-v-448103307"
    },
    {
        name: "Nandana D",
        role: "Event management head",
        image: require("../assets/nandana_event.jpeg"),
        linkedin: "https://in.linkedin.com/in/nandana-d-489605284"
    },
    {
        name: "Aadi Shankar Pillai ",
        role: "Sub Head",
        image: require("../assets/aadi_event.jpg"),
        linkedin: "www.linkedin.com/in/aadi-shankar-163784256"
    }
    
];

const EventManagement = () => {
    return (
        <TeamPage
            title="Event Management Team"
            description="The Event Management team ensures that all our events run smoothly and successfully."
            teamMembers={eventManagementTeamData}
        />
    );
};

export default EventManagement;
