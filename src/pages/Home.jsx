import React from 'react';
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import EventCard from '../components/EventCard';


export default function Home() {
    return (
        <>
            
            <Hero />
            <EventCard />
            <h2>Create Event</h2>
        </>
    );
}