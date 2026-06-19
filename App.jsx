import React from 'react'
import "./App.css"
import Card from './components/Card'

const App = () => {
  const Users = [
  {
    "Username": "Vinny",
    "City": "Kolkata",
    "Age": 16,
    "Profession": "Frontend Developer",
    "Profile_Pic": "https://i.pravatar.cc/150?img=1"
  },
  {
    "Username": "rahul_dev",
    "City": "Delhi",
    "Age": 18,
    "Profession": "Backend Developer",
    "Profile_Pic": "https://i.pravatar.cc/150?img=2"
  },
  {
    "Username": "ananya_codes",
    "City": "Mumbai",
    "Age": 17,
    "Profession": "UI/UX Designer",
    "Profile_Pic": "https://i.pravatar.cc/150?img=3"
  },
  {
    "Username": "rohit77",
    "City": "Bangalore",
    "Age": 19,
    "Profession": "Full Stack Developer",
    "Profile_Pic": "https://i.pravatar.cc/150?img=4"
  },
  {
    "Username": "priya_x",
    "City": "Chennai",
    "Age": 18,
    "Profession": "Data Analyst",
    "Profile_Pic": "https://i.pravatar.cc/150?img=5"
  },

  {
    "Username": "arjun_dev",
    "City": "Hyderabad",
    "Age": 20,
    "Profession": "Frontend Developer",
    "Profile_Pic": "https://i.pravatar.cc/150?img=6"
  },
  {
    "Username": "sneha_ui",
    "City": "Pune",
    "Age": 19,
    "Profession": "UI Designer",
    "Profile_Pic": "https://i.pravatar.cc/150?img=7"
  },
  {
    "Username": "vikas_js",
    "City": "Lucknow",
    "Age": 21,
    "Profession": "JavaScript Developer",
    "Profile_Pic": "https://i.pravatar.cc/150?img=8"
  },
  {
    "Username": "neha_data",
    "City": "Jaipur",
    "Age": 18,
    "Profession": "Data Analyst",
    "Profile_Pic": "https://i.pravatar.cc/150?img=9"
  },
  {
    "Username": "aman_ai",
    "City": "Bhopal",
    "Age": 22,
    "Profession": "AI Engineer",
    "Profile_Pic": "https://i.pravatar.cc/150?img=10"
  },
  {
    "Username": "karan_node",
    "City": "Ahmedabad",
    "Age": 20,
    "Profession": "Backend Developer",
    "Profile_Pic": "https://i.pravatar.cc/150?img=11"
  },
  {
    "Username": "isha_design",
    "City": "Indore",
    "Age": 19,
    "Profession": "Graphic Designer",
    "Profile_Pic": "https://i.pravatar.cc/150?img=12"
  },
  {
    "Username": "dev_python",
    "City": "Nagpur",
    "Age": 23,
    "Profession": "Python Developer",
    "Profile_Pic": "https://i.pravatar.cc/150?img=13"
  },
  {
    "Username": "meera_cloud",
    "City": "Surat",
    "Age": 20,
    "Profession": "Cloud Engineer",
    "Profile_Pic": "https://i.pravatar.cc/150?img=14"
  },
  {
    "Username": "yash_stack",
    "City": "Chandigarh",
    "Age": 21,
    "Profession": "Full Stack Developer",
    "Profile_Pic": "https://i.pravatar.cc/150?img=15"
  },

  {
    "Username": "aditya_web",
    "City": "Ranchi",
    "Age": 20,
    "Profession": "Web Developer",
    "Profile_Pic": "https://i.pravatar.cc/150?img=16"
  },
  {
    "Username": "riya_code",
    "City": "Patna",
    "Age": 18,
    "Profession": "Frontend Developer",
    "Profile_Pic": "https://i.pravatar.cc/150?img=17"
  },
  {
    "Username": "harsh_sql",
    "City": "Kanpur",
    "Age": 22,
    "Profession": "Database Developer",
    "Profile_Pic": "https://i.pravatar.cc/150?img=18"
  },
  {
    "Username": "kavya_ui",
    "City": "Bhubaneswar",
    "Age": 19,
    "Profession": "UI Designer",
    "Profile_Pic": "https://i.pravatar.cc/150?img=19"
  },
  {
    "Username": "anish_java",
    "City": "Noida",
    "Age": 21,
    "Profession": "Java Developer",
    "Profile_Pic": "https://i.pravatar.cc/150?img=20"
  },
  {
    "Username": "tina_cloud",
    "City": "Kochi",
    "Age": 20,
    "Profession": "Cloud Engineer",
    "Profile_Pic": "https://i.pravatar.cc/150?img=21"
  },
  {
    "Username": "rahul_react",
    "City": "Visakhapatnam",
    "Age": 23,
    "Profession": "React Developer",
    "Profile_Pic": "https://i.pravatar.cc/150?img=22"
  },
  {
    "Username": "pooja_ml",
    "City": "Mysore",
    "Age": 22,
    "Profession": "Machine Learning Engineer",
    "Profile_Pic": "https://i.pravatar.cc/150?img=23"
  },
  {
    "Username": "deep_node",
    "City": "Jamshedpur",
    "Age": 21,
    "Profession": "Node.js Developer",
    "Profile_Pic": "https://i.pravatar.cc/150?img=24"
  },
  {
    "Username": "simran_dev",
    "City": "Amritsar",
    "Age": 19,
    "Profession": "Software Developer",
    "Profile_Pic": "https://i.pravatar.cc/150?img=25"
  },
  {
    "Username": "aryan_stack",
    "City": "Guwahati",
    "Age": 20,
    "Profession": "Full Stack Developer",
    "Profile_Pic": "https://i.pravatar.cc/150?img=26"
  },
  {
    "Username": "nisha_python",
    "City": "Dehradun",
    "Age": 18,
    "Profession": "Python Developer",
    "Profile_Pic": "https://i.pravatar.cc/150?img=27"
  }


]




  return (
    <div>
      {Users.map(function(elem , idx){
        return <Card key={idx} Username={elem.Username} City={elem.City} Age={elem.Age} Picture={elem.Profile_Pic}
        Profession={elem.Profession} />

      })}

    </div>
  )
}

export default App
