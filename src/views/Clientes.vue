<template>
  <div class="home-table">
    <div class="header-client">
      <h1>Clientes</h1>
      <span>de EasyChef</span> <br>
      <span>Total de clientes en el sistema: {{dataArray.length}}</span>    
    </div>
    <div class="userTable">
      <b-form-input v-model="keyboard" placeholder="Busqueda por Nombre" style="width: 80%; margin-left: 10px"></b-form-input><br>
      <b-table
        striped
        hover
        :keyboard="keyboard"
        responsive
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        small
        @row-clicked="myRowClickHandler"
      />
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        id="client-pagination"
      />
    </div>
    <b-modal ref="my-modal" hide-footer title="Cliente Seleccionado">
      <div class="d-block text-center">
        <h2>{{NombreCliente}}  {{ApellidoCliente}}</h2>
        <h4>{{CorreoCliente}}</h4>
      </div>
      <b-button class="mt-3" variant="outline-danger" block  @click="hideModal">Eliminar Cliente</b-button>
    </b-modal>
    <createClient />
  </div>
</template>

<script>
import createClient from '../components/clientes/Create'

export default {
  data() {
    return {
      idClinte: "",
      NombreCliente:"",
      ApellidoCliente:"",
      CorreoCliente: "",
      keyboard:"",
      perPage: 10,
      currentPage: 1,
      dataArray: [],
      fields: [
        {key: 'first_name', label: 'First name', sortable: true},
      ],
    };
  },
  components: {
    createClient
  },
  methods: {
  myRowClickHandler(record, index) {
    console.log(record.ID, index);
    this.idClinte = record.ID
    this.NombreCliente = record.Nombre
    this.ApellidoCliente = record.Apellido
    this.CorreoCliente = record.Correo
    this.showModal()
  },
  showModal() {
        this.$refs['my-modal'].show()
  },
  async hideModal() {
    let cliente = this.idClinte
    await this.axios.put(`http://localhost:8081/clients/${cliente}`);
    this.getAllClients();
    this.$refs['my-modal'].hide()
  },
  async getAllClients() {
    const data = await this.axios.get("http://localhost:8081/clients");
    this.dataArray = data.data;
  }
},
  computed: {
    rows() {
      return this.dataArray.length
    },
    items() {
      return this.keyboard
        ? this.dataArray.filter(item => item.first_name.includes(this.keyboard) || item.last_name.includes(this.keyboard))
        : this.dataArray
    }    
  },
  created() {
    this.getAllClients();
  }
};
</script>

<style>
.home-table {
  min-height: 100%;
  width: 100%;
}
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
.userTable {
  margin-top: 20px;
  width: 100%;
}
#client-pagination{
  margin-top: 35px;
  display: flex;
  justify-content: center;
}


span {
  animation-name: letters;
  animation-duration: 4s;
}
header-client h1 {
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
