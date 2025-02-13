  import { useMessages, useTranslations } from 'next-intl';
  import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

  export default function Navsearch() {
    const t = useTranslations('aidePage')
    const [searchTerm, setSearchTerm] = useState('');
    const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

    const topics = {
      "Hôtes": [
        { question: "Comment publier une voiture ?", answer: "Vous pouvez publier une voiture depuis votre tableau de bord"},
        { question: "Puis-je modifier ma publication ?", answer: "Oui, accédez à vos annonces pour les modifier"},
        { question: "Comment supprimer une annonce ?", answer: "Accédez à vos annonces et supprimez celle que vous souhaitez"},
        { question: "Combien de voitures puis-je publier ?", answer: "Vous pouvez publier un nombre illimité de voitures"},
        { question: "Puis-je publier une voiture sans photo ?", answer: "Non, des photos sont nécessaires pour publier une voiture"},
        { question: "Comment ajouter des photos à mon annonce ?", answer: "Dans votre tableau de bord, vous pouvez télécharger des photos pour chaque voiture"},
        { question: "Que faire si je veux modifier les informations d’une voiture ?", answer: "Accédez à vos annonces et modifiez les informations de la voiture"},
        { question: "Comment gérer mes réservations ?", answer: "Vous pouvez gérer vos réservations depuis votre tableau de bord"},
        { question: "Que faire si ma voiture est endommagée pendant une réservation ?", answer: "Contactez notre équipe de support et nous vous aiderons à résoudre le problème"},
        { question: "Comment annuler une réservation ?", answer: "Accédez à vos réservations et sélectionnez l'option pour annuler"},
        { question: "Que faire si un locataire annule à la dernière minute ?", answer: "Contactez notre équipe de support pour obtenir de l’aide"},
        { question: "Puis-je définir des conditions particulières pour la location ?", answer: "Oui, vous pouvez définir des conditions dans l'annonce"},
        { question: "Comment voir les réservations à venir ?", answer: "Dans votre tableau de bord, vous trouverez toutes vos réservations à venir"},
        { question: "Comment voir les avis laissés par les locataires ?", answer: "Les avis sont visibles dans la section des réservations passées"},
        { question: "Comment gérer mes prix de location ?", answer: "Vous pouvez ajuster les prix depuis votre tableau de bord"},
        { question: "Puis-je refuser une réservation ?", answer: "Oui, vous pouvez refuser une réservation en accédant à votre tableau de bord"},
        { question: "Comment faire la vérification des documents d’un locataire ?", answer: "Nous vérifions les documents avant chaque réservation, vous n'avez rien à faire"},
        { question: "Que faire si un locataire ne me rend pas la voiture à temps ?", answer: "Contactez le locataire et, si nécessaire, contactez notre équipe de support"},
        { question: "Comment savoir si la voiture est assurée ?", answer: "L’assurance est incluse dans chaque réservation, vous pouvez vérifier dans les détails de la réservation"},
        { question: "Comment mettre en pause mes annonces ?", answer: "Dans votre tableau de bord, vous pouvez mettre en pause vos annonces"},
        { question: "Que faire si un locataire a un comportement inapproprié ?", answer: "Contactez notre équipe de support et nous prendrons les mesures nécessaires"},
        { question: "Comment contacter le support en cas de problème avec un locataire ?", answer: "Utilisez notre formulaire de contact pour nous signaler tout problème"},
        { question: "Comment signaler un problème avec un locataire ?", answer: "Contactez notre équipe via le centre d’aide de l’application"},
      ],
      
      "Locataires": [
        { question: "Comment réserver une voiture ?", answer: "Recherchez une voiture et cliquez sur le bouton réserver"},
        { question: "Que faire en cas de retard ?", answer: "Contactez l'hôte pour l'informer du retard"},
        { question: "Comment savoir si la voiture est disponible ?", answer: "La disponibilité de la voiture est indiquée sur la page de l'annonce"},
        { question: "Que faire si l’hôte annule la réservation ?", answer: "Nous vous proposerons une alternative ou un remboursement"},
        { question: "Comment changer la date de ma réservation ?", answer: "Vous pouvez changer la date dans votre tableau de bord, sous l'option 'Modifier la réservation'"},
        { question: "Que faire si la voiture n'est pas comme décrite dans l'annonce ?", answer: "Contactez l'hôte et, si nécessaire, notre support"},
        { question: "Comment récupérer la voiture après avoir réservé ?", answer: "L'hôte vous fournira les instructions pour récupérer la voiture"},
        { question: "Puis-je modifier mes informations personnelles ?", answer: "Oui, vous pouvez modifier vos informations dans les paramètres de votre compte"},
        { question: "Comment obtenir une facture pour ma location ?", answer: "La facture vous sera envoyée après la fin de votre réservation"},
        { question: "Comment faire une réservation pour un autre utilisateur ?", answer: "Vous pouvez réserver au nom de quelqu'un d'autre depuis votre tableau de bord"},
        { question: "Que faire si la voiture a un problème pendant la location ?", answer: "Contactez l'hôte ou notre support pour obtenir de l'aide"},
        { question: "Puis-je prolonger ma location ?", answer: "Oui, vous pouvez prolonger votre location en contactant l'hôte"},
        { question: "Comment annuler une réservation ?", answer: "Vous pouvez annuler une réservation depuis votre tableau de bord"},
        { question: "Que faire si la voiture n’est pas disponible lors de la réservation ?", answer: "Contactez notre équipe de support pour vous aider à trouver une solution"},
        { question: "Comment évaluer un hôte ?", answer: "Vous pouvez évaluer l'hôte après chaque location depuis la page de la réservation"},
        { question: "Que faire si le locataire ne respecte pas les règles ?", answer: "Signalez-le à notre support via le centre d'aide"},
        { question: "Comment savoir si la voiture a une assurance ?", answer: "L'assurance est incluse dans le processus de réservation et est visible sur la page de la réservation"},
        { question: "Comment vérifier que le locataire a bien validé ses documents ?", answer: "Nous vérifions tous les documents avant chaque réservation"},
        { question: "Que faire si je perds mes clés pendant la location ?", answer: "Contactez l'hôte ou notre équipe de support pour obtenir de l'aide"},
        { question: "Comment savoir si mon paiement a bien été effectué ?", answer: "Vous recevrez une confirmation par email une fois le paiement effectué"},
        { question: "Que faire en cas de comportement suspect d’un locataire ?", answer: "Signalez immédiatement le problème à notre équipe de support"},
      ],
    
      "Assurance": [
        { question: "Suis-je couvert en cas d'accident ?", answer: "Oui, notre assurance couvre les dommages accidentels"},
        { question: "Comment souscrire une assurance ?", answer: "L'assurance est incluse dans le processus de réservation"},
        { question: "Que faire si j’ai un accident pendant ma location ?", answer: "Contactez notre support immédiatement et suivez les instructions"},
        { question: "L'assurance couvre-t-elle les dommages causés par le locataire ?", answer: "Oui, l'assurance couvre les dommages causés par le locataire"},
        { question: "Puis-je choisir une assurance différente ?", answer: "Non, l'assurance fournie est obligatoire et incluse dans la réservation"},
        { question: "L’assurance est-elle incluse dans toutes les réservations ?", answer: "Oui, l'assurance est incluse dans chaque réservation"},
        { question: "Comment vérifier ma couverture d'assurance ?", answer: "Vous pouvez vérifier les détails de l'assurance dans votre réservation"},
        { question: "Est-ce que l’assurance couvre la perte de la voiture ?", answer: "L'assurance couvre la perte de la voiture sous certaines conditions Veuillez consulter les termes de l'assurance"},
        { question: "Que faire si j’ai un accident et que je ne sais pas comment procéder ?", answer: "Contactez immédiatement notre équipe de support pour vous guider dans les démarches"},
        { question: "Comment déposer une réclamation d'assurance ?", answer: "Vous pouvez soumettre une réclamation via notre centre d’aide"},
      ],
    
      "Légal": [
        { question: "Quelles sont les conditions générales ?", answer: "Consultez nos conditions générales sur notre site web"},
        { question: "Comment signaler un problème ?", answer: "Utilisez notre formulaire de contact pour signaler un problème"},
        { question: "Que faire si j’ai un problème légal ?", answer: "Contactez notre équipe juridique via le formulaire de contact"},
        { question: "Comment connaître les conditions d’utilisation ?", answer: "Les conditions d’utilisation sont disponibles dans le centre d’aide de l'application"},
        { question: "Comment gérer mes droits et responsabilités ?", answer: "Les informations sur vos droits et responsabilités sont disponibles dans nos conditions générales"},
      ],
    };
    const filteredTopics = Object.entries(topics).map(([topic, questions]) => {
      const filteredQuestions = questions.filter(q =>
        t(`topics.${q.question}`).toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { topic, questions: filteredQuestions };
    });

    return (
      <section className="bg-gray-50 py-12">
        <div className="max-w-screen-xl px-6 mx-auto sm:px-12 lg:px-16">
          <div className="max-w-screen-md mx-auto text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-800">{t('Comment pouvons-nous vous aider ?')}</h2>
            <p className="text-lg text-gray-600 mt-4">{t('Trouvez des réponses à vos questions ci-dessous ou utilisez la barre de recherche pour affiner votre recherche')}</p>
            <div className="mt-6 relative">
  <input
    type="text"
    className="w-full px-5 py-3 pl-10 text-sm text-gray-800 bg-gray-00 border border-transparent rounded-full shadow focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white placeholder-gray-500"
    placeholder={t("Tapez des mots-clés pour trouver des réponses")}
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
</div>

          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTopics.map(({ topic, questions }) => (
              <div key={topic} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{t(topic)}</h3>
                <ul className="space-y-4">
                  {questions.map((q, index) => (
                    <li key={index}>
                      <button
                        onClick={() =>
                          setActiveQuestion(activeQuestion === q.question ? null : q.question)
                        }
                        className="text-left text-blue-600 hover:underline w-full text-lg"
                      >
                        {t(`topics.${q.question}`)}
                      </button>
                      {activeQuestion === q.question && (
                        <p className="mt-2 text-gray-700 text-base">{t(`topics.${q.answer}`)}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }



