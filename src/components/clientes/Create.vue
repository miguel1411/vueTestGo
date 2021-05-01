<template>
  <div class="create-client">
    <h1>Registrar Cliente</h1><br>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="No Compartiremos Tu Correo con Nadie"
      >
        <b-form-input
          id="input-1"
          v-model="form.correo"
          type="email"
          placeholder="Ingrese su Correo"
          required
        />
      </b-form-group>
      <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.nombre"
          placeholder="Ingrese su Nombre"
          required
        />
      </b-form-group>
      <b-form-group id="input-group-3" label="Apellido:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.apellido"
          placeholder="Ingrese su Apellido"
          required
        />
      </b-form-group>
      <b-form-group id="input-group-4" label="Entidad Federativa:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.entidad"
          placeholder="Entidad Federativa"
          required
        />
      </b-form-group>      
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    // props: ['client'],
    data() {
      return {
        form: {
          nombre: '',
          apellido: '',
          correo: '',
          entidad: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.Register()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.nombre = ''
        this.form.correo = ''
        this.form.apellido = ''
        this.form.entidad = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      async Register(){
        const nombre = this.form.nombre;
        const correo = this.form.correo;
        const apellido = this.form.apellido;
        const entidad = this.form.entidad;

        const request = await this.axios.post(`http://localhost:8081/clients/${nombre}/${apellido}/${correo}/${entidad}`)
        console.log(request);
      }
    }
  }
</script>

<style>
.create-client{
  margin-left: 20px;
  margin-bottom: 20px;
  width: 50%;
  }
</style>