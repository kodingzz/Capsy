import { useState } from "react";
import capsuleBlack from "../assets/profile-capsule-black.svg";
import capsulePurple from "../assets/profile-capsule-purple.svg";
import articleBlack from "../assets/profile-article-black.svg";
import articlePurple from "../assets/profile-article-purple.svg";
import alarmBlack from "../assets/profile-alarm-black.svg";
import alarmPurple from "../assets/profile-alarm-purple.svg";

const capsuleCount = 6;
const articleCount = 9;
const alarmCount = 6;

function ProfileContainer() {
  const [selectedTab, setSelectedTab] = useState("capsules");

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="profile-container">
      {/* Tab Navigation */}
      <div className="flex justify-evenly mb-6">
        {/* 내 캡슐 */}
        <div
          className={`tab flex flex-col items-center cursor-pointer ${
            selectedTab === "capsules" ? "text-primary" : "text-black"
          }`}
          onClick={() => handleTabClick("capsules")}
        >
          <img
            src={selectedTab === "capsules" ? capsulePurple : capsuleBlack}
            alt="내 캡슐"
            className="w-[25px] h-[25px] mb-2"
          />
          <span className="text-[14px] font-regular font-pretendard">내 캡슐</span>
        </div>

        {/* 내 일반글 */}
        <div
          className={`tab flex flex-col items-center cursor-pointer ${
            selectedTab === "articles" ? "text-primary" : "text-black"
          }`}
          onClick={() => handleTabClick("articles")}
        >
          <img
            src={selectedTab === "articles" ? articlePurple : articleBlack}
            alt="내 일반글"
            className="w-[25px] h-[25px] mb-2"
          />
          <span className="text-[14px] font-regular font-pretendard">내 일반글</span>
        </div>

        {/* 예약글 */}
        <div
          className={`tab flex flex-col items-center cursor-pointer ${
            selectedTab === "alarms" ? "text-primary" : "text-black"
          }`}
          onClick={() => handleTabClick("alarms")}
        >
          <img
            src={selectedTab === "alarms" ? alarmPurple : alarmBlack}
            alt="예약글"
            className="w-[25px] h-[25px] mb-2"
          />
          <span className="text-[14px] font-regular font-pretendard">예약글</span>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {selectedTab === "capsules" && (
          <div className="text-[14px] font-regular font-pretendard">
            공개완료 <span className="ml-1">{capsuleCount}</span>
          </div>
        )}{" "}
        {selectedTab === "articles" && (
          <div className="text-[14px] font-regular font-pretendard">
            공개완료 <span className="ml-1">{articleCount}</span>
          </div>
        )}
        {selectedTab === "alarms" && (
          <div className="text-[14px] font-regular font-pretendard">
            공개완료 <span className="ml-1">{alarmCount}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileContainer;
