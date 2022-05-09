import React from "react";
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
  const { register, handleSubmit, setValue, formState: { errors },
  } = useForm({
    defaultValues: props.currentUser
  });

  setValue('name', props.currentUser.name)
  setValue('username', props.currentUser.username)

  const onSubmit = (data, e) => {
    if (window.confirm("¿Desea editar a este ususario?")) {
      data.id = props.currentUser.id
      props.updateUser(props.currentUser.id, data);
      //Limpiar campos
      e.target.reset();
      alert("Editado con éxito");
    }else{
      alert("Después lo editas crack :)");
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
      <button>Editar usuario</button>
    </form>
  );
}

export default EditUserForm;