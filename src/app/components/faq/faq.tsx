 "use client";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl'

const faqs = [
  {
    question: "Comment fonctionne le partage de voiture avec limitless ?",
    answer:
      "limitless permet aux utilisateurs de louer des voitures à d'autres particuliers ou de louer leur propre véhicule lorsqu'il n'est pas utilisé Il vous suffit de parcourir les voitures disponibles dans votre région, de réserver une location pour la période souhaitée, puis de récupérer la voiture Le processus est entièrement géré via notre application",
  },
  {
    question: "Comment puis-je louer une voiture sur limitless ?",
    answer:
      "Pour louer une voiture, téléchargez simplement l'application limitless, créez un compte, parcourez les voitures disponibles près de chez vous, sélectionnez la voiture que vous souhaitez louer, choisissez votre période de location et finalisez la réservation Le paiement est effectué en toute sécurité via l'application",
  },
  {
    question: "Les voitures sont-elles assurées ?",
    answer:
      "Oui, tous les véhicules listés sur limitless sont couverts par une assurance tous risques pendant la durée de la location Notre assurance couvre les dommages, le vol et la responsabilité civile, vous offrant ainsi une tranquillité d'esprit pendant votre location",
  },
  {
    question: "Quelles sont les conditions pour louer une voiture ?",
    answer:
      "Pour louer une voiture, vous devez avoir au moins 21 ans, posséder un permis de conduire valide et répondre aux critères de vérification du profil conducteur de notre plateforme Certains véhicules peuvent avoir des conditions supplémentaires selon les préférences du propriétaire",
  },
  {
    question: "Comment rendre une voiture après la location ?",
    answer:
      "Vous pouvez rendre la voiture à l'endroit spécifié dans votre réservation L'application vous guidera tout au long du processus de retour, y compris l'inspection du véhicule En cas de problème lors du retour, vous pouvez contacter notre service client via l'application",
  },
  {
    question: "Que faire si j'ai un problème avec la voiture pendant la location ?",
    answer:
      "Si vous rencontrez un problème avec la voiture pendant la location, vous pouvez signaler le problème directement via l'application Notre équipe de support vous assistera, et en fonction de la nature du problème, nous pourrons organiser un véhicule de remplacement ou proposer une solution",
  },
  {
    question: "Puis-je louer ma propre voiture via limitless ?",
    answer:
      "Oui ! Si vous possédez une voiture, vous pouvez la proposer sur la plateforme limitless et gagner de l'argent en la louant Inscrivez-vous simplement en tant que propriétaire de véhicule, téléchargez les détails de votre voiture et sa disponibilité, et notre application se charge des réservations",
  },
  {
    question: "Que se passe-t-il si je rends la voiture en retard ?",
    answer:
      "Les retards de retour sont soumis à des frais supplémentaires en fonction du tarif horaire ou quotidien de la location Pour éviter ces frais, assurez-vous de rendre la voiture à temps Si vous prévoyez un retard, merci de prévenir le propriétaire du véhicule via l'application",
  },
  {
    question: "Puis-je prolonger ma période de location ?",
    answer:
      "Oui, vous pouvez prolonger votre période de location directement via l'application, tant que la voiture est disponible pour les nouvelles dates Vous pouvez demander une extension, et si le propriétaire du véhicule l'accepte, votre réservation sera mise à jour",
  },
  {
    question: "Comment contacter le service client ?",
    answer:
      "Si vous avez besoin d'assistance, vous pouvez contacter notre équipe de support client via l'application Il vous suffit de vous rendre dans la section 'Aide' et de soumettre votre demande, un représentant vous répondra dans les plus brefs délais",
  },
]

export default function FAQSection() {
  const t = useTranslations('homePage')
  return (
    <div className="bg-[#32BA78] text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold sm:text-5xl">
          {t('Questions fréquemment posées')}
        </motion.h2>
      </div>
      <div className="max-w-3xl mx-auto mt-10 space-y-6">
        {faqs.map((faq, index) => (
          <motion.div 
            key={faq.question} 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Disclosure as="div" className="p-6 bg-white rounded-2xl shadow-lg">
              {({ open }) => (
                <>
                  <DisclosureButton className="flex w-full justify-between text-left text-lg font-semibold text-gray-900">
                    <span>{t(faq.question)}</span>
                    <span>
                      {open ? (
                        <MinusSmallIcon className="h-6 w-6 text-[#32BA78]" />
                      ) : (
                        <PlusSmallIcon className="h-6 w-6 text-[#32BA78]" />
                      )}
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel as="div" className="mt-3 text-gray-700 text-base leading-relaxed">
                    {t(faq.answer)}
                    
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
