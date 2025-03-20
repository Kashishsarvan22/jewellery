// import { useState } from "react";
// import axios from "axios";

// const Login = () => {
//     const [formData, setFormData] = useState({ email: "", password: "" });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post("http://localhost:5000/login", formData);
//             alert(res.data.message);
//         } catch (err) {
//             alert(err.response.data.message);
//         }
//     };

//     return (
//         <div className="flex items-center justify-center h-screen">
//             <form className="bg-white p-6 rounded shadow-lg" onSubmit={handleSubmit}>
//                 <input type="email" name="email" placeholder="Email" className="border p-2 w-full" onChange={handleChange} />
//                 <input type="password" name="password" placeholder="Password" className="border p-2 w-full mt-2" onChange={handleChange} />
//                 <button className="bg-green-500 text-white p-2 w-full mt-2">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;
 