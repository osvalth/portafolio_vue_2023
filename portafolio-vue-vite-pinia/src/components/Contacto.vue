<template>
  <div class="contact-section">
    <a
      href="https://www.facebook.com/OsvalthOsvalth"
      target="_blank"
      class="contact-card"
      @mouseover="flipCard('facebook')"
      @mouseleave="resetCard('facebook')"
      style="background-color: #1877f2;"
    >
      <div class="card-inner" :class="{ flipped: flippedCard === 'facebook' }">
        <div class="card-front">
          <i class="fa-brands fa-facebook-f"></i>
          <h3 style="color: white;">Facebook</h3>
        </div>
        <div class="card-back">
          <p>¡Sígueme en Facebook!</p>
        </div>
      </div>
    </a>

    <a
      href="https://twitter.com/OsvaltOsvalth"
      target="_blank"
      class="contact-card"
      @mouseover="flipCard('twitter')"
      @mouseleave="resetCard('twitter')"
      style="background-color: #1da1f2;"
    >
      <div class="card-inner" :class="{ flipped: flippedCard === 'twitter' }">
        <div class="card-front">
          <i class="fab fa-twitter fa-3x"></i>
          <h3 style="color: white;">Twitter</h3>
        </div>
        <div class="card-back">
          <p>¡Sígueme en Twitter!</p>
        </div>
      </div>
    </a>

    <a
      href="mailto:s.osbaldo23jg@gmail.com"
      class="contact-card"
      @mouseover="flipCard('email')"
      @mouseleave="resetCard('email')"
      style="background-color: #333;"
    >
      <div class="card-inner" :class="{ flipped: flippedCard === 'email' }">
        <div class="card-front">
          <i class="fas fa-envelope fa-3x"></i>
          <h3 style="color: white;">Email</h3>
        </div>
        <div class="card-back">
          <p>¡Contáctame por correo electrónico!</p>
        </div>
      </div>
    </a>
    <a
  href="https://www.linkedin.com/in/sergio-osbaldo-jos%C3%A9-garc%C3%ADa/"
  target="_blank"
  class="contact-card"
  @mouseover="flipCard('linkedin')"
  @mouseleave="resetCard('linkedin')"
  style="background-color: #0e76a8;"
>
  <div class="card-inner" :class="{ flipped: flippedCard === 'linkedin' }">
    <div class="card-front">
      <i class="fab fa-linkedin-in fa-3x"></i>
      <h3 style="color: white;">LinkedIn</h3>
    </div>
    <div class="card-back">
      <p>¡Conéctate conmigo en LinkedIn!</p>
    </div>
  </div>
</a>

  </div>
</template>

<script>
export default {
  name: "Contacto",
  data() {
    return {
      flippedCard: null,
    };
  },
  methods: {
    flipCard(card) {
      this.flippedCard = card;
    },
    resetCard(card) {
      if (this.flippedCard === card) {
        this.flippedCard = null;
      }
    },
  },
};
</script>

<style scoped>
.contact-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
}

.contact-card {
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  margin: 10px;
  perspective: 1000px;
  text-decoration: none; /* Añade este estilo para que los enlaces se vean como botones */
  color: inherit; /* Mantén el color del texto del enlace */
}

.contact-card:hover {
  transform: scale(1.05);
}

.card-inner {
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform-style: preserve-3d;
}

.contact-card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-front {
  transform: rotateY(0deg);
}

.card-back {
  transform: rotateY(180deg);
  background-color: #f0f0f0;
  color: #333;
  padding: 10px;
  border-radius: 10px;
}

.icon {
  font-size: 48px;
  color: #fff;
  transition: transform 0.3s, color 0.3s;
}

.icon.flipped {
  transform: rotateY(180deg);
  color: gray;
}

h3 {
  margin-top: 10px;
  font-size: 18px;
  color: #333;
}
</style>
