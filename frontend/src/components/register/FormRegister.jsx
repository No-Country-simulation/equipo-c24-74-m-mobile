import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ArrowBackButton from "../_common/ArrowBackButton";
import axios from "axios";

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const ENDPOINT = import.meta.env.VITE_JAVA_API_URL;

  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const onSubmit = async (event) => {
    if (!event.email.trim() || !event.password.trim()) {
      return window.alert("Email y contraseña obligatorios.");
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(event.email)) {
      return window.alert("El formato del email no es correcto!");
    }

    try {
      const response = await axios.post(`${ENDPOINT}/usuario/newUsuario`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      });
      console.log(response);

      if (!response.ok) {
        const errorData = await response.json();
        const message =
          errorData.message || "Ocurrió un error con la solicitud.";
        return window.alert(`${message} 🙁.`);
      } else {
        handleLoginRedirect();
      }
    } catch (error) {
      console.error(error);
      window.alert(
        "No se pudo conectar con el servidor. Por favor, intenta más tarde."
      );
    }
  };

  return (
    <div className="w-full flex justify-center mt-10 lg:mt-0">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-100 rounded-lg w-[287px] py-4 tablet:w-[730px] tablet:px-[3rem] desktop:w-[1084px] shadow-lg "
        style={{
          backgroundImage:
            'url("/src/assets/images/bg2.png"), linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))',
          backgroundBlendMode: "overlay",
        }}
      >
        {/*componente de boton flecha < goback */}
        <ArrowBackButton />

        <h2 className="font-workSans italic text-2xl font-semibold mb-4 tablet:mt-10 text-center">
          Te damos la Bienvenida!
        </h2>
        <p className="text-center mb-6">
          Regístrate y empieza a mejorar tu relación comunidad-escuela
        </p>

        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block font-medium">
              Nombre *
            </label>
            <input
              type="text"
              name="firstName"
              {...register("firstName", { required: "Nombre es requerido" })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md h-[50px]"
              placeholder="Nombres"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="block font-medium">
              Apellido *
            </label>
            <input
              type="text"
              name="lastName"
              {...register("lastName", { required: "Apellido es requerido" })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md h-[50px]"
              placeholder="Apellidos"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">
              Correo electrónico *
            </label>
            <input
              type="email"
              name="email"
              {...register("email", {
                required: "Correo electrónico es requerido",
              })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md h-[50px]"
              placeholder="ejemplo@gmail.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="country" className="block font-medium">
              País
            </label>
            <select
              name="country"
              {...register("country", { required: "País es requerido" })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md h-[50px]"
            >
              <option value="" hidden>País</option>
              <option value="México">México</option>
              <option value="Argentina">Argentina</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Chile">Chile</option>
              <option value="Perú">Perú</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Bolivia">Bolivia</option>
              <option value="España">España</option>
              <option value="Otro">Otro</option>
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="education" className="block font-medium">
              Educación *
            </label>
            <select
              name="education"
              {...register("education", { required: "Educación es requerido" })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md h-[50px]"
            >
              <option value="" hidden>Educación</option>
              <option value="Educación Media">
                Educación Media
              </option>
              <option value="Educación Basica">
                Educación Basica
              </option>
              <option value="Educación Pre-escolar">
                Educación Pre-escolar
              </option>
              <option value="Otro">Otro</option>
            </select>
            {errors.education && (
              <p className="text-red-500 text-sm">{errors.education.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="jobTitle" className="block font-medium">
              Cargo *
            </label>
            <select
              name="jobTitle"
              {...register("jobTitle", { required: "Cargo es requerido" })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md h-[50px]"
            >
              <option value="" hidden>Cargo</option>
              <option value="Profesor">Profesor</option>
              <option value="Representante">Representante</option>
              <option value="Alumno">Alumno</option>
              <option value="Otro">Otro</option>
            </select>
            {errors.jobTitle && (
              <p className="text-red-500 text-sm">{errors.jobTitle.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block font-medium">
              Crear Contraseña *
            </label>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: "Contraseña es requerida",
                minLength: { value: 8, message: "Mínimo 8 caracteres" },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
                  message:
                    "Debe contener al menos una letra mayúscula, una minúscula y un número",
                },
              })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md h-[50px]"
              placeholder="Crea una contraseña"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className=" text-xl font-workSans font-semibold w-full h-[50px] mx-auto block tablet:w-[461px] bg-primary-500 text-white py-2 px-4 rounded-full hover:bg-primary-700 "
          >
            Crear cuenta
          </button>
        </div>

        <div className="text-sm tablet:text-xl mt-9 text-center flex justify-center gap-2">
          <p className="font-normal ">
            ¿Ya tienes cuenta?{" "}
          </p>
          <button className="font-semibold" onClick={handleLoginRedirect}>Inicia Sesión </button>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
