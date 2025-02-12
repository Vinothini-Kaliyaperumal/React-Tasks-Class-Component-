// import React, { Component } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// const pieData = [
//   { name: "Category A", value: 400 },
//   { name: "Category B", value: 300 },
//   { name: "Category C", value: 300 },
//   { name: "Category D", value: 200 }
// ];

// const lineData = [
//   { name: "Jan", value: 100 },
//   { name: "Feb", value: 200 },
//   { name: "Mar", value: 300 },
//   { name: "Apr", value: 250 },
//   { name: "May", value: 400 }
// ];

// class Landing extends Component {
//   render() {
//     return (
//       <div className="p-6">
//         <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//         <div className="grid grid-cols-3 gap-4">
//           <Card className="col-span-1 p-4">
//             <CardContent>
//               <h2 className="text-lg font-semibold">Total Users</h2>
//               <p className="text-2xl font-bold">1,250</p>
//             </CardContent>
//           </Card>
//           <Card className="col-span-1 p-4">
//             <CardContent>
//               <h2 className="text-lg font-semibold">Revenue</h2>
//               <p className="text-2xl font-bold">$12,500</p>
//             </CardContent>
//           </Card>
//           <Card className="col-span-1 p-4">
//             <CardContent>
//               <h2 className="text-lg font-semibold">New Orders</h2>
//               <p className="text-2xl font-bold">320</p>
//             </CardContent>
//           </Card>
//         </div>
//         <div className="grid grid-cols-2 gap-4 mt-6">
//           <Card className="p-4">
//             <CardContent>
//               <h2 className="text-lg font-semibold">Sales Overview</h2>
//               <ResponsiveContainer width="100%" height={300}>
//                 <LineChart data={lineData}>
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <Tooltip />
//                   <Legend />
//                   <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
//                 </LineChart>
//               </ResponsiveContainer>
//             </CardContent>
//           </Card>
//           <Card className="p-4">
//             <CardContent>
//               <h2 className="text-lg font-semibold">Category Distribution</h2>
//               <ResponsiveContainer width="100%" height={300}>
//                 <PieChart>
//                   <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" label />
//                 </PieChart>
//               </ResponsiveContainer>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     );
//   }
// }

// export default Landing;
