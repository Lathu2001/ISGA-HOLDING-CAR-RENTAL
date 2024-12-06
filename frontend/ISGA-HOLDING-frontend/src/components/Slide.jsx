// import React from 'react';
// import { GrItalic } from 'react-icons/gr';

// export default function Slide({ post, isVisible }) {
//   return (
//     <div
//       className="mySlides"
//       style={{
//         ...slideStyle,
//         display: isVisible ? 'block' : 'none',
//       }}
//     >
//       <img
//         className="relative w-[850px]  h-[450px] object-cover mix-blend-multiply "
//         src={post.img}
//         alt="Slide"
//       />
//       <h2 style={headingStyle}>{post.heading}</h2>
//       <p style={paragraphStyle}>{post.text}</p>
//     </div>
//   );
  
// }

// const slideStyle = {
//   display: 'none',
// };

// const headingStyle = {
//   marginTop: '10px',
//   textAlign: 'center',
//   fontSize: '25px',
//   color: '#000',
//   fontFamily: '"Dancing Script", cursive',
//   fontWeight: 'bold',
  
  
// };

// const paragraphStyle = {
//   marginTop: '10px',
//   textAlign: 'center',
//   fontSize: '16px',
//   color: '#333',
// };

import React from 'react';
import { GrItalic } from 'react-icons/gr';

export default function Slide({ post, isVisible }) {
  return (
    <div
      className={`mySlides ${isVisible ? 'block' : 'hidden'} flex flex-col items-center`}
    >
      <img
        className="w-full sm:w-[850px] h-[250px] sm:h-[450px] object-cover mix-blend-multiply rounded-2xl"
        src={post.img}
        alt="Slide"
      />
      <h2 className="mt-3 text-center text-lg sm:text-2xl text-black font-bold font-dancing-script">
        {post.heading}
      </h2>
      <p className="mt-2 text-center text-sm sm:text-base text-gray-700 px-4 sm:px-0">
        {post.text}
      </p>
    </div>
  );
}


