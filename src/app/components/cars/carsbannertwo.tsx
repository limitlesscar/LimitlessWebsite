import { useTranslations } from "next-intl";
import './car.css'


const incentives = [
  {
    name: 'Voitures Vérifiées',
    description: "Voitures Vérifiées-desc",
  },
  {
    name: 'Assistance 24/7',
    description: "Notre équipe est disponible à tout moment pour vous aider, que ce soit en cas de panne ou pour répondre à vos questions",
  },
  {
    name: 'Réservation Facile',
    description: "Réservation Facile-desc",
    
  },
];

export default function BannerBusiness() {
  const t = useTranslations('homePage.carsBanner')
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 px-4 lg:max-w-none lg:grid-cols-3">
          {incentives.map((incentive) => (
            <div
              key={incentive.name}
              className="text-center sm:flex sm:text-left lg:block lg:text-center"
            >
              <div className="sm:shrink-0">
                <div className="flow-root">
                 
                </div>
              </div>
              <div className="mt-3 sm:ml-3 sm:mt-0 lg:ml-0 lg:mt-3">
                
                <h3   className=" different mt-12 text-4xl font-semibold tracking-tight sm:text-5xl leading-relaxed bg-gradient-to-r from-blue-500 to-[#32bb78] bg-clip-text text-transparent"
                >{t(incentive.name)}</h3>
                <p className="mt-2 text-sm text-gray-500">{t(incentive.description)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
