const { default: axios } = require("axios");

const buscarCursos = (profesor, data) => {
  const cursosDelProfesor = data.filter((item) => item.profesor === profesor);
  console.log(cursosDelProfesor);
};

const peticion = async () => {
  try {
    const { data } = await axios.get(
      "https://api.npoint.io/e8698903c4eee0df84b1"
    );
    // ** Mostrar los cursos de Jose
    buscarCursos("jose trujillo", data);

    // ** Mostrar los cursos de jorge
    // buscarCursos("jorge trujillo", data)

    // ** Mostrar los cursos de juan
    // buscarCursos("juan trujillo", data)
  } catch (error) {
    console.log("Error a la hora de obtener los cursos", error.message);
  }
};

peticion();
