import React from "react";
import { USER_ICON } from "../utils/constants";

const commentsData = [
  {
    name: "Akshay Saini",
    text: "This video was super helpful! Thanks for sharing.",
    replies: [],
  },
  {
    name: "Jane Smith",
    text: "Great explanation, really cleared up my doubts.",
    replies: [
      {
        name: "Alex Johnson",
        text: "I agree! The examples were on point.",
        replies: [],
      },
      {
        name: "Chris Lee",
        text: "Does anyone have more resources on this topic?",
        replies: [
          {
            name: "Taylor Brown",
            text: "Check the description, there are some links mentioned.",
            replies: [
              {
                name: "Chris Lee",
                text: "Thanks, Taylor! That’s exactly what I needed.",
                replies: [],
              },
            ],
          },
          {
            name: "Jamie Garcia",
            text: "You can also try searching for blogs on this.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Sam Patel",
    text: "Amazing content! Subscribed to your channel.",
    replies: [],
  },
  {
    name: "Emily Davis",
    text: "I had a similar issue, but this video solved it!",
    replies: [],
  },
  {
    name: "Liam Wilson",
    text: "Looking forward to more videos like this.",
    replies: [],
  },
  {
    name: "Sophia Martinez",
    text: "Can you make a video on advanced concepts next?",
    replies: [],
  },
  {
    name: "Oliver Thomas",
    text: "Thanks for breaking it down so clearly!",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 round my-2">
      <img
        src={USER_ICON}
        alt="User Icon"
        className="size-12"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-5">
      <h1 className="text-2xl font-bold">Comments :</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
