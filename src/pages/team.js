// src/pages/team.js
import React from 'react';
import Header from '@/components/header/Header';
import FooterWithSettings from "@/components/footer/FooterWithSettings";
import Image from "next/image";
import Link from "next/link";
import Head from 'next/head'; // Import Head for SEO
// --- getStaticProps Function ---
export async function getStaticProps() {
  let teamMembers = []; // Default to empty array

  try {
    // Manually constructed populate query for Strapi v5
    // Populate the 'headshot' field.
    const populateQuery = 'populate[0]=headshot';
    // Optional: Add sorting manually if needed later
    // const sortQuery = 'sort[0]=group:asc&sort[1]=name:asc';
    // const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/team-members?${populateQuery}&${sortQuery}`;

    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/team-members?${populateQuery}`;
    console.log("Fetching team members from:", apiUrl);

    const res = await fetch(apiUrl);
    if (!res.ok) {
      console.error(`API fetch failed: ${res.status}`);
      const errorText = await res.text();
      console.error("Strapi Error:", errorText.substring(0, 500));
      // Keep teamMembers empty on error
    } else {
        const json = await res.json();
        teamMembers = json.data || []; // Assign directly for Strapi v5
        console.log(`✅ Fetched ${teamMembers.length} team members.`);
    }

  } catch (error) {
    console.error("❌ Error fetching team members:", error.message);
    // Keep teamMembers as empty array on error
  }

  return {
    props: {
      teamMembers, // Pass the fetched data as teamMembers prop
    },
    revalidate: 60, // Re-fetch data every 60 seconds
  };
}

// --- Helper Component for Individual Cards ---
const TeamMemberCard = ({ member }) => {
  // Use simple .url access for Strapi v5 headshot
  const imageUrl = member.headshot?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${member.headshot.url}`
    : '/images/placeholder-headshot.png'; // Provide a path to your placeholder

  // Ensure shortBio is derived correctly, limiting length
  let shortBio = member.bio_short || '';
  if (!shortBio && member.bio_long) {
      // Basic extraction - adjust logic if bio_long is complex Rich Text
      const plainTextBio = member.bio_long.replace(/<[^>]*>?/gm, ''); // Simple HTML tag removal
      shortBio = plainTextBio.substring(0, 160) + (plainTextBio.length > 160 ? '...' : '');
  }
  if (!shortBio) {
      shortBio = `Expert in ${member.title}.`; // Ultimate fallback
  }

  return (
    // Card structure inspired by hub-card
    <div className="team-card h-100 d-flex flex-column">
      <div className="team-headshot-wrapper">
        <Image
          src={imageUrl}
          alt={`Headshot of ${member.name}`}
          width={400} // Base width for quality
          height={400} // Maintain 1:1 aspect ratio
          className="team-headshot-img" // Add specific class
        />
         {/* Optional Overlay on hover */}
         <div className="headshot-overlay d-flex align-items-center justify-content-center">
             {/* Can add view profile button here later */}
         </div>
      </div>
      <div className="team-info d-flex flex-column flex-grow-1">
        {/* Use Recoleta font for name */}
        <h3 className="team-name font-recoleta">{member.name}</h3>
        {/* Use pink color for title */}
        <p className="team-title">{member.title}</p>
        <p className="team-bio-short flex-grow-1">{shortBio}</p>
        {member.linkedin_url && (
          // Updated button style
          <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="linkedin-button mt-auto">
            <span>Connect</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};


// --- Main Page Component ---
const TeamPage = ({ teamMembers }) => { // Correctly receive teamMembers prop

  // Group members (ensure data exists before filtering)
  const executives = teamMembers?.filter(m => m.group === 'Executive') || [];
  const creatives = teamMembers?.filter(m => m.group === 'Creative') || [];

  return (
    <> {/* <---- Main Fragment Start */}
      <Head>
        <title>Team | Adaptive Intelligence</title>
        <meta name="description" content="Meet the executive team and creatives behind Adaptive Intelligence: strategists, technologists, and storytellers blending human insight with adaptive marketing." />
      </Head>

      <Header />

      {/* Section A: Intro */}
      <section className="team-intro pt-180 pb-100 lg-pt-150 lg-pb-80 text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h1 className="hero-headline font-recoleta">
                Meet the team behind Adaptive Intelligence
              </h1>
              <p className="hero-body fs-20 mt-30 mb-40">
                We’re a collective of strategists, technologists, and creatives who believe the world runs on great ideas and responsible execution. Where artificial stops at automation, we go further, pairing data with discernment, ethics with outcomes, and creativity with measurable growth.
              </p>
              <p className="hero-subtext fs-18 fw-500">
                Get to know the executive team and the minds shaping the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section B: Team Grids */}
      <section className="team-grid-section pb-150 lg-pb-120 pt-150 lg-pt-120">
        <div className="container">

          {/* Executive Team */}
          {executives.length > 0 && (
            <div className="team-group mb-100 lg-mb-80">
              <h2 className="group-title text-center font-recoleta">Executive Team</h2>
              <div className="row g-4 justify-content-center mt-40">
                {executives.map(member => (
                  <div key={member.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex"> {/* Responsive columns */}
                    <TeamMemberCard member={member} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Creative & Strategy Team */}
          {creatives.length > 0 && (
            <div className="team-group">
              <h2 className="group-title text-center font-recoleta">Creative & Strategy</h2>
              <div className="row g-4 justify-content-center mt-40">
                {creatives.map(member => (
                  <div key={member.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex"> {/* Responsive columns */}
                    <TeamMemberCard member={member} />
                  </div>
                ))}
              </div>
            </div>
          )}

           {/* Fallback if no members */}
           {(!teamMembers || teamMembers.length === 0) && ( // Check if array is null or empty
               <p className="text-center fs-20">Team member information is currently unavailable.</p>
           )}

        </div>
      </section>

      <FooterWithSettings />

    </>
  );
};

export default TeamPage;