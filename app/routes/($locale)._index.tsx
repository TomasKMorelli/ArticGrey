import Hero from "~/components/Hero";
import GoalsComponent from "~/components/Goals";
import InstagramComponent from "~/components/InstagramComponent";
import Articles from "~/components/Articles";
import Generation from "~/components/Generation";


export const Homepage: React.FC = () => {


  return (
    <div>
      <Hero />
      <GoalsComponent />
      <Generation />
      <Articles />
      <InstagramComponent />
    </div>
  )

}








export default Homepage;





