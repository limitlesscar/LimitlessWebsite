import { useTranslations } from "next-intl";
import styled from "styled-components";
import './car.css'; // Custom styles for any additional styles you may need

const hostIncentives = [
  {
    name: "Gagnez de l'argent rapidement tout les jours",
    description:
      "Proposez votre voiture sur notre plateforme et générez des revenus supplémentaires facilement",
  },
  {
    name: "Flexibilité totale",
    description:
      "Vous avez le contrôle total sur la disponibilité, les tarifs et les conditions de location de votre véhicule",
  },
  {
    name: "Assurance incluse",
    description:
      "Votre véhicule est protégé par une assurance complète pendant chaque location, pour une tranquillité d'esprit totale",
  }
];

// Styled-component for Glassmorphism effect
const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px); /* Stronger blur effect */
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover effect */
  
  &:hover {
    transform: translateY(-10px); /* Lift effect on hover */
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5); /* Deep shadow effect on hover */
  }
`;

const Title = styled.h3`
  font-size: 1.25rem; /* Adjusted font size */
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.7); /* Light gray text */
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
`;

export default function BannerHostBusinessTwo() {
  const t = useTranslations("newPage.hostIncentives");

  return (
    <div className="bg-[#32bb78] py-24">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 px-4 lg:max-w-none lg:grid-cols-3">
          {hostIncentives.map((incentive) => (
            <div
              key={incentive.name}
              className="text-center sm:flex sm:text-left lg:block lg:text-center"
            >
              <div className="sm:shrink-0">
                <div className="flow-root">
                  {/* Using Glassmorphism effect with styled-components */}
                  <GlassCard>
                    <Title>{t(incentive.name)}</Title>
                    <Description>{t(incentive.description)}</Description>
                  </GlassCard>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
