'use client';

import TEAM_MEMBERS from "@/data/teamMembers";
import TeamMemberCard from "./TeamMemberCard";

const TeamMembers = () => {
    return (
        <section className="pb-[192px]">
            <h2 className="font-inter font-medium text-4xl text-[#35322F] capitalize pb-3 text-center">our team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center pt-[54px] gap-x-5 gap-y-10 w-full mx-auto">
              {TEAM_MEMBERS.map(teamMember => <TeamMemberCard key={teamMember.id} {...teamMember} />)}
            </div>
        </section>
    );
}
 
export default TeamMembers;