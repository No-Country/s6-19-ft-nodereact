const AsideFilter = () => {
  return (
    <div className="w-full md:w-1/4 p-4">
      <h3 className="text-2xl font-bold mb-10">
        <strong>Filtrar Por</strong>
      </h3>
      <div className="flex items-center mb-4">
        <select
          id="categoria"
          name="categoria"
          className="border-gray-400 rounded py-2 px-3 outline-none"
        >
          <option value="categoria" disabled selected hidden>
            Categoría
          </option>
          <option value="Recetas">Recetas</option>
          <option value="Ejecicio">Ejercicio</option>
          <option value="Historia">Historia</option>
          <option value="Motivacion">Motivación</option>
        </select>
      </div>

      <div className="flex items-center mb-4">
        <select
          id="precio"
          name="precio"
          className="border-gray-400 rounded py-2 px-3 outline-none"
        >
          <option value="precio" disabled selected hidden>
            Rango de precios
          </option>
          <option value="1">$0 - $9.99</option>
          <option value="2">$10 - $19.99</option>
          <option value="3">$20 - $29.99</option>
          <option value="4">$30+</option>
        </select>
      </div>
    </div>
  );
};
export default AsideFilter;
