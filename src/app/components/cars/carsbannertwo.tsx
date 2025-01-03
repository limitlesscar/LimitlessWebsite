import { useTranslations } from "next-intl";

const incentives = [
  {
    name: 'Voitures Vérifiées',
    description: "Voitures Vérifiées-desc",
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce/icons/icon-delivery-light.svg', // Remplacez cette URL par une image pertinente liée aux voitures
  },
  {
    name: 'Assistance 24/7',
    description: "Notre équipe est disponible à tout moment pour vous aider, que ce soit en cas de panne ou pour répondre à vos questions",
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce/icons/icon-chat-light.svg', // Remplacez cette URL par une image pertinente liée au support
  },
  {
    name: 'Réservation Facile',
    description: "Réservation Facile-desc",
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce/icons/icon-fast-checkout-light.svg', // Remplacez cette URL par une image pertinente liée à la réservation
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
                  <img
                    alt={incentive.name}
                    src={incentive.imageSrc}
                    className="mx-auto h-24 w-28"
                  />
                </div>
              </div>
              <div className="mt-3 sm:ml-3 sm:mt-0 lg:ml-0 lg:mt-3">
                
                <h3 className="text-sm font-medium text-gray-900">{t(incentive.name)}</h3>
                <p className="mt-2 text-sm text-gray-500">{t(incentive.description)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
