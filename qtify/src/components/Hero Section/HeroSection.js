import './heroSection.css'
import heroImage from '../../assets/heroImage.png'

const HeroSection = () => {
  return (
    <div className="heroSection">
        <div>
      <h1> 100 Thousand Songs, ad - free </h1>
      <h1> Over thousands podcast episodes</h1>
        </div>
      <img src={heroImage} alt='Hero_Image' />
    </div>
  );
};

export default HeroSection;
