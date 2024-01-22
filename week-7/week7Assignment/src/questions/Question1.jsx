import React from "react";

export default function Question1({
  photoLink = "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  followers,
  likes,
  photos,
  name,
  id,
}) {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white">
          <div className="relative mb-6">
            <img className="w-full" src={photoLink} alt="Profile picture" />
            <div
              className="text-center absolute w-full"
              style={{ bottom: "-30px" }}
            >
              <div className="mb-10">
                <p className="text-white tracking-wide uppercase text-lg font-bold">
                  {name}
                </p>
                <p className="text-gray-400 text-sm">@{id}</p>
              </div>
            </div>
          </div>
          <div className="py-10 px-6 text-center tracking-wide grid grid-cols-3 gap-6">
            <div className="followers">
              <p className="text-lg">
                {(followers > 1000 ? followers / 1000 : followers).toFixed(1)}
                {followers > 1000 ? "K" : ""}
              </p>
              <p className="text-gray-400 text-sm">Followers</p>
            </div>
            <div className="likes">
              <p className="text-lg">
                {(likes > 1000 ? likes / 1000 : likes).toFixed(1)}
                {likes > 1000 ? "K" : ""}
              </p>
              <p className="text-gray-400 text-sm">likes</p>
            </div>
            <div className="photos">
              <p className="text-lg">
                {(photos > 1000 ? photos / 1000 : photos).toFixed(1)}
                {photos > 1000 ? "K" : ""}
              </p>
              <p className="text-gray-400 text-sm">photos</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
