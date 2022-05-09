import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data, e) => {
    if (window.confirm("¿Quieres agregar a este usuario?")) {
      props.addUser(data);
      //Limpiar campos
      e.target.reset();
      alert("Agregado correctamente");
    } else {
      alert("En otra ocasión lo agregaras...");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre</label>
      <input type="text" name="name"
        {...register("name", { required: { value: true } })} />
      <div>
        {errors.name && <div>Este campo es requerido</div>}
      </div>
      <label>Nombre de usuario</label>
      <input type="text" name="username"
        {...register("username", { required: { value: true } })} />
      {errors.username && <div>Este campo es requerido</div>}
      <button>Agregar nuevo usuario</button>
    </form>
  );
}

export default AddUserForm;