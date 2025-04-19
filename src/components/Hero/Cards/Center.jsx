import React, { useEffect, useState } from "react";
import GithubCard from "./GithubRepo";
import ProfileCard from "./Profiles";
import Skills from "./Skills";
import { fetchGithubData } from "../../../utils/github"; // adjust path if needed

const Center = () => {
  const [repoCount, setRepoCount] = useState(0);
  const [followers, setFollowers] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const { repoCount, followers } = await fetchGithubData("withsammi");
      setRepoCount(repoCount);
      setFollowers(followers);
    };

    getData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full gap-4 md:gap-5 mb-5"> 
      <GithubCard repoCount={repoCount} followers={followers} />

      <div className="bg-gradient-to-br from-[rgb(32,32,32)] to-[rgb(23,23,23)] rounded-2xl md:rounded-4xl w-full md:w-3/5">
        <Skills />
      </div>

      <ProfileCard />
    </div>
  );
};

export default Center;
