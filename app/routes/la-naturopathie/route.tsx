import type { LinksFunction } from "@vercel/remix";
import { PageHeader } from "../../views";
import { mapNavLinks } from "../navLinks";
import styles from "./la_naturopathie.styles.css";
import { useLocation } from "@remix-run/react";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Route() {
  const { pathname } = useLocation();

  return (
    <main className="main_la_naturopathie">
      <PageHeader title={mapNavLinks[pathname].pageTitle} />

      <section className="section_la_naturopathie">
        <h2>Déﬁnition & présentation</h2>

        <p>La naturopathie est une médecine naturelle, complémentaire et intégrative.</p>

        <p>
          Reconnue par l’organisation mondiale de la santé depuis 2001 comme étant une médecine
          traditionnelle au même titre que la médecine traditionnelle chinoise ou l’ayurveda
          indienne, elle vise à conserver ou retrouver la santé à l’aide de moyens et techniques
          naturels, en se tenant à son mot d’ordre : ne pas nuire.
        </p>

        <p>
          L’idée est de soutenir le corps et ses facultés d’autoguérison que nos modes de vie et
          d’alimentation actuels malmènent trop souvent.
        </p>

        <p>
          La naturopathie est une médecine holistique, c’est-à dire qu’elle s’intéresse à l’individu
          dans son entièreté et ne segmente pas le corps humain, partant du principe que notre corps
          est une entité globale et que tout ce qui s’y passe est interdépendant. Cela s’appuie sur
          des fondements datant d’Hippocrate, père de la médecine moderne, qui faisait de
          l’organisme un tout indissoluble.
        </p>

        <p>
          La naturopathie n’est pas une médecine alternative dans le sens où elle ne prétend pas
          remplacer la médecine allopathique mais bien au contraire à travailler de pair avec elle
          pour guider chacun vers le recouvrement de la santé et/ou un apaisement des symptômes.
          Chacune a son action dans le processus thérapeutique.
        </p>

        <p>
          La naturopathie se fait au « cas par cas », chaque individu est singulier avec ses
          spéciﬁcités, répondant différemment à son environnement : alimentation, pollution, stress,
          médicaments, fatigue, etc.
        </p>

        <p>
          Selon le terrain d’un individu, ses antécédents et ses caractéristiques, une cure plus
          qu’une autre sera utilisée.
        </p>
      </section>

      <section className="section_la_naturopathie">
        <h2>Le naturopathe axe sa pratique sur 3 piliers centraux</h2>

        <ul>
          <li>L’alimentation</li>
          <li>L’alimentationL’activité physique</li>
          <li>La sphère psychologique et émotionnelle</li>
        </ul>

        <p>
          La formation du naturopathe lui confère la connaissance et la maitrise de nombreux outils
          naturels, ayant pour but d’être mis aux service de la santé. Tous ces outils suivent le
          principe d’Hippocrate « Primum non nocere » (d’abord ne pas nuire).
        </p>

        <p>En voici une liste non exhaustive :</p>

        <ul>
          <li>Nutrition et micronutrition</li>

          <li>Phytothérapie (Traitement par l’usage des plantes)</li>

          <li>Aromathérapie (Traitement par l'usage des huiles essentielles)</li>

          <li>
            Biothérapies (Utilisation des oligo-éléments, de la gemmothérapie et de la
            nutrithérapie)
          </li>

          <li>Exercices et activités physiques</li>

          <li>Elixirs ﬂoraux (Fleurs de Bach original ®)</li>

          <li>Accompagnement psychologique & émotionnel</li>

          <li>Techniques respiratoires (relaxation, Bol d’Air Jacquier ®)</li>

          <li>Réﬂexologie plantaire</li>

          <li>Massage bien-être et techniques de relaxation</li>
        </ul>

        <p>
          La sphère physique et la sphère psychologique étant intimement lié et indissociable, la
          naturopathie est aussi un lieu d’écoute, cherchant des solutions pour apaiser le mental,
          accueillir et écouter sans jugement, pour mieux guider.
        </p>

        <p>
          Une consultation dure environ 1h, et s’adapte aux besoins de la personne et à ses
          possibilités. Une fois cette heure écoulée, le naturopathe s’attelle à la réalisation
          d’une ﬁche de conseils personnalisés adaptés, puis l’envoie sous un certain délai (dans
          les 2 jours suivant la consultation dans mon cas).
        </p>

        <p>
          La fréquence des séances dépend des besoins de chacun et de l’état de santé. Le suivi peut
          être mensuel, trimestriel ou saisonnier. Le naturopathe est un accompagnant et un guide,
          et selon les besoins physiques, psychologiques et émotionnels de la personne qui consulte
          les séances peuvent être plus ou moins rapprochées.
        </p>
      </section>

      <section className="section_la_naturopathie">
        <h2>Dans quels cas ?</h2>

        <p>
          La naturopathie devrait, dans un monde idéal, être une hygiène et un équilibre de vie que
          chacun connaîtrait, appliquerait et transmettrait. Ce n’est malheureusement pas le cas
          dans nos sociétés modernes où la santé passe au second plan et ne devient préoccupante
          qu’à l’apparition d’une maladie.
        </p>

        <p>
          La naturopathie est donc préventive mais aussi curative, pour tous types de maux,
          ponctuels ou chroniques, pour trouver la cause du désordre ou tout simplement pour
          apprendre à gérer les symptômes d’une maladie ou d’un traitement. Elle est utile à tous,
          associée ou non aux autres médecines.
        </p>

        <p>Voici une liste non exhaustive des cas dans lesquels consulter :</p>

        <ul>
          <li>
            Troubles hormonaux : syndrôme pré-menstruel, SOPK, endométriose, infertilité, ménopause,
            etc.
          </li>

          <li>
            Troubles digestifs : constipation, ballonnements, inconforts, porosité, SIBO, candidose,
            syndrôme de l’intestin irritable, etc.
          </li>

          <li>Troubles cutanés : psoriasis, acné, eczéma, etc.</li>

          <li>Troubles anxieux : traumatismes, phobies, angoisse, anxiété généralisée.</li>

          <li>Fatigue et troubles du sommeil.</li>

          <li>Effets secondaires de traitement allopathique et chimiothérapie.</li>

          <li>Douleurs : maux de têtes, rhumatismes, règles douloureuses, etc.</li>

          <li>Stress ponctuel ou chronique.</li>

          <li>Dépression, burn out, baby blues.</li>

          <li>Accompagnement de la grossesse et post partum.</li>

          <li>Maladies chroniques. </li>
        </ul>
      </section>
    </main>
  );
}
