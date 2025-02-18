import { useTranslations } from "next-intl"
import './car.css'


export default  function Numbers() {
  const t = useTranslations('newPage')
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl different font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {t("Louez votre voiture et transformez votre manière de gagner de l'argent")}
            </h2>
            <p className="mt-6 text-base/7 text-gray-600">
{t("De plus en plus d'hôtes trouvent une véritable satisfaction à louer leur voiture et à générer des revenus passifs C'est une manière simple et sûre d'augmenter votre revenu, sans effort quotidien")}            </p>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
              <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">400k</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-gray-900">{t("Hôtes satisfaits dans le monde entier")}</p>
                <p className="mt-2 text-base/7 text-gray-600">{t("Rejoignez des milliers d'hôtes qui partagent leur véhicule pour générer des revenus supplémentaires de manière flexible et rentable")}</p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">{t("Revenu supplémentaire")}</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">
                  {t("Découvrez la satisfaction de recevoir des paiements réguliers en louant votre voiture pendant vos moments de non-utilisation")}
                </p>
                <p className="mt-2 text-base/7 text-gray-400">
                  {t("Maximisez vos revenus en mettant votre véhicule à la disposition des autres tout en restant maître de votre emploi du temps")}
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-[#32bb78] p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">{t("Facilité et Flexibilité")}</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">{t("Une expérience simple, sans stress")}</p>
                <p className="mt-2 text-base/7 text-white">
                  {t("Profitez d'une plateforme intuitive qui vous permet de gérer la location de votre voiture facilement, tout en restant flexible quant à vos disponibilités")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
