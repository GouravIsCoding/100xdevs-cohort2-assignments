import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Question5(props) {
  const username = "gouraviscoding";
  const api = `https://api.github.com/users/${username}`;
  const [res, setRes] = useState(null);
  useEffect(() => {
    axios.get(api).then((response) => setRes(() => response.data));
  }, []);
  if (res)
    return (
      <>
        <>
          <div className="w-screen h-screen flex justify-center items-center">
            <div className="container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white">
              <div className="relative mb-6">
                <img
                  className="w-full"
                  src={res.avatar_url}
                  alt="Profile picture"
                />
                <div
                  className="text-center absolute w-full"
                  style={{ bottom: "-30px" }}
                ></div>
              </div>
              <div className="py-10 px-6 text-center tracking-wide grid grid-cols-3 gap-6">
                <div className="followers">
                  <p className="text-lg">{res.followers}</p>
                  <p className="text-gray-400 text-sm">Followers</p>
                </div>
                <div className="following">
                  <p className="text-lg">{res.following}</p>
                  <p className="text-gray-400 text-sm">following</p>
                </div>
                <div className="repos">
                  <p className="text-lg">{res.public_repos}</p>
                  <p className="text-gray-400 text-sm">repos</p>
                </div>
              </div>
            </div>
          </div>
        </>
      </>
    );
}
