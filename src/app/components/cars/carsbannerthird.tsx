import { useTranslations } from "next-intl";

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
  
  export default function BannerHostBusinessTwo() {
    const t = useTranslations("newPage.hostIncentives")
    return (
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 px-4 lg:max-w-none lg:grid-cols-3">
            {hostIncentives.map((incentive) => (
              <div
                key={incentive.name}
                className="text-center sm:flex sm:text-left lg:block lg:text-center"
              >
                <div className="sm:shrink-0">
                  <div className="flow-root">
                   
                  </div>
                </div>
                <div className="mt-3 sm:ml-3 sm:mt-0 lg:ml-0 lg:mt-3">
                  <h3 className="text-xl font-medium text-gray-900">
                    {t(incentive.name)}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {t(incentive.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  