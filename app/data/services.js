import { FaCode } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { RiShoppingCart2Line } from "react-icons/ri";  

 const services = [
    {
    name: "Development", 
    description: "Collaborate with Webcrunchy's skilled team to create robust software applications, whether you're a new start-up or an established company aiming to stand out with innovative ideas!", 
    icon: <FaCode size={45}/>, 
    link: "mobileapp"
 }, 
 {
    name: "Website",
    description: "Are you looking to create a new website or revamp an underperforming one? Webcrunchy designs captivating websites that provide excellent user experiences and generate inquiries.",
    icon: <FaCodeCompare size={45}/>, 
    link: "webdesign"
 },
 {
  name: "Ecommerce", 
  description: "Our eCommerce websites are packed with features and optimized for conversions. Combined with our industry-leading expertise, they give you the control needed to grow your business.", 
  icon: <RiShoppingCart2Line size={45}/>,
  link: "ecommerce"
}
 ]

 export default services