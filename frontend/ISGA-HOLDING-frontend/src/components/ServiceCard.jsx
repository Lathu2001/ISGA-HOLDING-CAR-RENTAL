// import React from "react";


// export default function ServiceCard({post}) {
//   return (
//     <div
//       className="inline-flex flex-col h-[263px] m-2 items-center justify-center gap-[25px] pt-[19px] pb-[14px] px-[26px] relative bg-[#e6caf3] rounded-[36px] border-black border-2 shadow-[4px_3px_22px_#00000040]"
//     >
//       <img
//         className=" relative w-[194px] h-[180px] object-cover mix-blend-multiply"
//         alt={post.title}
//         src={post.img}
//       />
//       <div className="relative w-fit [font-family:'Roboto_Flex-Bold',Helvetica] font-bold text-black text-[28px] text-center tracking-[0] leading-[normal] whitespace-nowrap ">
//         {post.title}
//       </div>
//     </div>
//   );
// }


// last updated one

// import React from "react";

// const ServiceCard = ({ post, handleSearch }) => {
//   const { img, title } = post;

//   const handleClick = () => {
//     handleSearch(title); // Passes the title to handleSearch function
//   };

//   return (
//     <div className="grid grid-cols-1  gap-2 m-4">
//       <div className=" cursor-pointer inline-flex flex-col h-[263px] m-2 items-center justify-center gap-[25px] pt-[19px] pb-[14px] px-[26px] relative bg-[#fffeff] rounded-[25px] border-black border-2 shadow-[4px_3px_22px_#00000040]" onClick={handleClick}>
//       <img src={img} alt={title} className=" relative w-[194px] h-[180px] object-cover mix-blend-multiply" />
//       <div className="relative w-fit [font-family:'Roboto_Flex-Bold',Helvetica] font-bold text-black text-[28px] text-center tracking-[0] leading-[normal] whitespace-nowrap ">{title}</div>
//     </div>
//     </div>
//   );
// };

// export default ServiceCard;


import React from "react";

const ServiceCard = ({ post, handleSearch }) => {
  const { img, title } = post;

  const handleClick = () => {
    console.log("Card clicked:", title);
    handleSearch(title); 
    navigate("/service/" + title);// Passes the title to handleSearch function
  };

  return (
    <div className="grid grid-cols-1 gap-2 m-4">
      <div
        className="cursor-pointer inline-flex flex-col h-[263px] m-2 items-center justify-center gap-[25px] pt-[19px] pb-[14px] px-[26px] relative bg-[#fffeff] rounded-[25px] border-black border-2 shadow-[4px_3px_22px_#00000040]"
        onClick={handleClick}
      >
        <img
          src={img}
          alt={title}
          className="relative w-[194px] h-[180px] object-cover mix-blend-multiply"
        />
        <div className="relative w-fit font-bold text-black text-[28px] text-center">
          {title}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;



