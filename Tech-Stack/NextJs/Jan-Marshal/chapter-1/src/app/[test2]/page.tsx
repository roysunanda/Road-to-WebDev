// interface paramsId {
//   params: Promise<{ test2: string }>;
// }

// export default async function page({ params }: paramsId) {
//   const { test2 } = await params;
//   return (
//     <div>
//       <h1 className='text-5xl'>This is test page.</h1>
//       <h1 className='text-5xl'>ID: {test2}</h1>
//     </div>
//   );
// }

export default async function page({ params }) {
  const { test2 } = await params;
  return (
    <div>
      {/* <h1 className='text-5xl'>This is test page.</h1> */}
      <h1 className='text-5xl'>ID: {test2}</h1>
    </div>
  );
}
