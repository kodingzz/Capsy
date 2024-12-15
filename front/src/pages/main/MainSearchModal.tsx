import { useEffect, useState } from "react";
import { useMainSearchStore } from "../../store/mainSearchStore";
import axiosInstance from "../../apis/axiosInstance";
import img_search from "../../assets/Search.svg";
import { Link } from "react-router-dom";

export default function MainSearchModal() {
  const searchInput = useMainSearchStore((state) => state.searchInput);

  const [users, setUsers] = useState<UserLists[]>([]);

  // 검색된 user 목록
  const getUsers = async () => {
    try {
      // const { data } = await axiosInstance.get(`/search/users/${searchInput.replace(/\s+/g, "")}`);
      const { data } = await axiosInstance.get("/users/get-users");
      const filteredData =
        searchInput.trim().length > 0 &&
        data.filter(
          (item: UserLists) =>
            item.fullName.toLowerCase().includes(searchInput.toLowerCase().replace(/\s+/g, "")) ||
            item.username?.toLowerCase().includes(searchInput.toLowerCase().replace(/\s+/g, "")),
        );
      setUsers(filteredData);
    } catch (error) {
      setUsers([]);
    }
  };
  useEffect(() => {
    getUsers();
  }, [searchInput]);

  return (
    <>
      <div className="px-4 max-w-[600px] h-full">
        <div className="px-2 mt-5 ml-5">
          {/* 고정- 검색 keyword */}
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4 px-4">
              <div className="rounded-[20.34px] border border-[#D9D9D9] p-[10px]">
                <img className="w-[20px] h-[20px] fill-black" src={img_search} alt="검색 아이콘" />
              </div>
              <div className="text-[#000000]  ">
                <span className="text-[14px] font-bold">KEYWORD : {searchInput}</span>
              </div>
            </li>
            {/* 입력값에 따라 출력되는 사용자들*/}
            {users.length > 0 &&
              users.map((user) => {
                return (
                  <li key={user._id} className="flex items-center gap-4 px-4 transition rounded hover:bg-bg-100">
                    <div
                      className={`relative  w-[40px] h-[40px] overflow-hidden ${user.isOnline && "bg-gradient-to-r from-[rgba(3,199,90,0.60)] to-[rgba(103,78,255,0.60)]"}  rounded-full  `}
                    >
                      {/* user.profileImage */}
                      <img
                        className="w-[40px] h-[40px] rounded-full object-cover p-[2px]"
                        src={user.image ? user.image : "/Capsy.svg"}
                        alt="프로필 이미지"
                      />
                    </div>

                    <Link
                      to={`userinfo/${user.fullName}`}
                      className="block w-[80%] transition-all duration-300 rounded-lg"
                    >
                      <div className="py-[10px] ">
                        <div className={`flex items-center gap-2 font-bold  ${!user.username && "h-[40px]"}`}>
                          <p className="">@{user.fullName}</p>
                          <div
                            className={`w-[6px] h-[6px]   rounded-full ${
                              user.isOnline ? "bg-[#7CF335]" : "bg-red-500"
                            } `}
                          ></div>
                        </div>
                        <p className="text-sm">{user?.username}</p>
                      </div>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
}
