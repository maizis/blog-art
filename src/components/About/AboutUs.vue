<template>
  <div class="about-us  has-text-weight-light">
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <div class="tile is-child">
          <!-- About Image -->
          <img
            src="../../assets/img/img_about_1.jpeg"
            width="500px"
          >
        </div>

        <!-- About Presentation -->
        <div class="tile is-child">
          <p class="title is-size-6 has-text-weight-light">
            AU COMMENCEMENT, LE JARDIN ROYAL DES PLANTES MÉDICINALES
          </p>
          <p class="has-text-justified">
            L’histoire du Muséum commence avec celle du Jardin royal des plantes médicinales.
            Au XVIIe siècle, les jardins botaniques sont en plein essor en Europe.
            Celui de Paris est créé en 1635 sur ordre de Louis XIII, influencé par son médecin Guy de La Brosse.
            Après cinq années de travaux et d’ensemencements nécessaires, le Jardin est ouvert au public et
            connaît un important succès. Il propose en effet un triptyque d'enseignements scientifiques
            (botanique, chimie et anatomie) gratuits, accessibles à tous, et de surcroît en français -
            alors que tous les autres établissements dispensent des cours en latin.
          </p>
        </div>
      </div>
    </div>
    <br>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <div class="tile is-child has-text-centered">

          <!-- About Contact -->
          <p class="is-size-5">
            Horaire d'ouvertures
          </p>
          Lundi au Samedi : 9h-20h
          <br>
          Dimanche et jour fériés : 10h-18h
          <br>
          <br>

          <p class="is-size-5">
            Adresses
          </p>
          57 Rue Cuvier, 75005 Paris
          <br>
          <br>

          <p class="is-size-5">
            Contact
          </p>
          <a href="tel:+33623449290">01.23.44.92.90
          </a>
          <br>
          <a href="mailto:contact@example.com">museeum-history@gmail.com
          </a>
        </div>

        <!-- About Map Image -->
        <div class="tile is-child">
          <img
            src="../../assets/img/img_about_map.png"
            width="500px"
            class="is-pulled-right"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AboutUs'
};
</script>

<style>
.about-us {
  margin-top:50px;
  height:700px;
}
</style>
