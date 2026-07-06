
// function App() {
//   const fruits = ["Apple", "Orange", "Mango", "Grapes"];

//   return (
//     <div>
//       <h2>Fruit List</h2>

//       <ul>
//         {fruits.map((fruit, index) => (
//           <li key={index}>{fruit}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


import './joblist.css'


function Joblist() {
  const list = [
    { id: 1, name: "id" },
    { id: 2, name: "company" },
    { id: 3, name: "company_id" },
    { id: 4, name: "title" },
    { id: 5, name: "description" },
    { id: 6, name: "location" },
    { id: 7, name: "salary" },
    { id: 8, name: "job_type" },
    { id: 9, name: "posted_at" },
    { id: 10, name: "is_active" }
  ];

  return (
       <div>
      <h2>Job List</h2>     
    <ul>
      {list.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
    </div>
  );
}

export default Joblist;


