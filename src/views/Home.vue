<template>
  <div class="div-home">
    <div class="header-client">
      <h1>HOME</h1>
      <span>de EasyChef</span>
      <span>Test de EasyChef</span>    
    </div>
    <div class="body-home">
      <div class="card">
        <div class="card-content">
          <h3>Total de clientes</h3>
          <p>Actualmente contamos con un total de :</p>
        </div>
        <div class="card-content-total">
          <h1 style="font-size:60px">{{cantidadClientes}}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      cantidadClientes: '',
    }
  },
  async created() {
    const data = await this.axios.get("http://localhost:8081/clients");
    this.cantidadClientes = data.data.length;
  }
}
</script>

<style scoped>
.header-client{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: aliceblue;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 15px;
  font-weight: 700;
  height: 25vh;

  background-image:linear-gradient(
    to right bottom,
    rgba(102, 85, 73, 0.8),
    rgba(0, 0, 0, 0.8)),
    url(../assets/backgroundClient.jpg);
  background-size: cover;
  background-position: top;
}

.body-home {
  margin-top: 20px;
  margin-left: 20px;
}
.card {
  background-color: rgb(39, 39, 39);
  color: #fff;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  width: 250px;
  animation-name: card;
  animation-duration: 1s;
}
.card-content{
  padding: 10px;
}
.card-content-total{
  background-color: rgba(255, 255, 255, 0.24);
  margin-right: 10px;
}

span {
  animation-name: letters;
  animation-duration: 4s;
}
h1 {
  animation-name: letters;
  animation-duration: 4s;
}

/* animations */
@keyframes card {
  from {margin-left:-300px;}
}

@keyframes letters {
 from {opacity: 0;}
 to {opacity: 1;}
}

</style>