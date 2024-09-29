import React from "react";
import appwriteservice from "../appwrite/config.js";
import { Link } from "react-router-dom";

const PostCard = ({ $id, featuredImage, title }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full p-4 rounded-xl">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteservice.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;
