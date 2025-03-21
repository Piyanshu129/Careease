import React from 'react';
import './WhyChooseUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNurse } from '@fortawesome/free-solid-svg-icons';

interface FeatureCardProps {
  imageUrl: string;
  icon: React.ReactNode;
  title: React.ReactNode; // Allow ReactNode to support JSX elements
  description: React.ReactNode; // Allow ReactNode to support JSX elements
  backgroundColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageUrl, icon, title, description, backgroundColor }) => {
  return (
   
    <div className="feature-card">
       <br></br>
      <div className="image-container">
        <img src={imageUrl} alt={title?.toString()} className="feature-image" />
      </div>
      <div className="content-container" style={{ backgroundColor }}>
        <div className="icon-container">{icon}</div>
        <h3>{title}</h3>
        <br/>
        <p>{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  return (
    <div className="why-choose-us-container">
      <h2>Why choose <span className="brand-name-oval">CareEase</span></h2>
      <p>No more waiting in lines or arranging complex transport for care. CareEase brings professional caregivers right to your doorstep, offering quality healthcare wherever you are.</p>
      <br/>

      <div className="features">
        <FeatureCard
          imageUrl="/i1.jpeg"
          icon={<span className="icon-personalized-care">👩‍⚕️</span>}
          title="Personalised Care"
          description="Customised care based on each patient’s unique needs, enhancing comfort"
          backgroundColor="rgba(22, 53, 96, 0.9)"
        />
                <br></br>

        <FeatureCard
          imageUrl="/i2.jpeg"
          icon={<span className="icon-certified-caregivers">📝</span>}
          title={<span className="ams">Certified caregivers</span>}
          description={<span className="ass">All caregivers are certified, ensuring safe and professional care</span>}
          backgroundColor="rgba(255, 255, 255, 0.9)"
        />
                <br></br>

        <FeatureCard
          imageUrl="/i3.jpeg"
          icon={<span className="icon-friendly-service">💖</span>}
          title="Friendly service"
          description="Our caregivers provide warm, supportive and affordable services"
          backgroundColor="rgba(22, 53, 96, 0.9)"
        />
      </div>
      <br/>
      <br/>
      <br/>
      <div className="features">
        <FeatureCard
          imageUrl="/i4.jpeg"
          icon={<span className="icon-simple-process">👆</span>}
          title={<span className="ams">Simple process</span>}
          description={<span className="ass">Easy to use platform for hassle-free booking and management</span>}
          backgroundColor="rgba(255, 255, 255, 0.9)"
        />
        <br/>
      <br/>
        <FeatureCard
          imageUrl="/i5.jpeg"
          icon={<span className="icon-availability">🕒</span>}
          title="24*7 availability"
          description="Access to care services any time of day, with reliable customer support"
          backgroundColor="rgba(22, 53, 96, 0.9)"
        />
        <br></br>
        <FeatureCard
          imageUrl="/i6.jpeg"
          icon={<span className="icon-verified-caregivers">✔️</span>}
          title={<span className="ams">Verified Caregivers</span>}
          description={<span className="ass">Background checked caregivers for reliable and secure care</span>}
          backgroundColor="rgba(255, 255, 255, 0.9)"
        />
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default WhyChooseUs;
