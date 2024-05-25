const addVehicleForm = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Add Vehicle
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Model
                </label>
                <input
                  type="text"
                  name=""model
                  id="model"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="toyota corolla"
                  required=""
                />
              </div>
              <div>
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="text"
                  id="name"
                  placeholder=" dodge"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              {/* select category and price on one row on larger devics but responsive on smaller devices */}
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <div>
                    <label
                        for="category"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Category
                    </label>
                    <select
                        id="category"
                        name="category"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                    >
                        <option value="SUV">SUV</option>
                        <option value="Sedan">Sedan</option>
                        <option value="Truck">Truck</option>
                        <option value="Coupe">Coupe</option>
                    </select>
                    </div>
                    <div>
                    <label
                        for="price"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Price
                    </label>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        placeholder="10000"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                    />
                    </div>
                </div>                
                {/* description  */}
                <div>
                    <label
                    for="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Description
                    </label>
                    <textarea
                    id="description"
                    name="description"
                    placeholder="This is a car"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    ></textarea>
                </div>
                {/* Hp and torque in numeric  in one row  on larger devics and full width on small devices */}
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <div>
                    <label
                        for="hp"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Horsepower
                    </label>
                    <input
                        type="text"
                        name="hp"
                        id="hp"
                        placeholder="100"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                    />
                    </div>
                    <div>
                    <label
                        for="torque"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Torque
                    </label>
                    <input
                        type="text"
                        name="torque"
                        id="torque"
                        placeholder="100"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                    />
                    </div>
                </div>
                {/* engine type and acceleration-sec to 60mp in on row on larger devices */}
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <div>
                    <label
                        for="engine"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Engine
                    </label>
                    <input
                        type="text"
                        name="engine"
                        id="engine"
                        placeholder="V8"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                    />
                    </div>
                    <div>
                    <label
                        for="acceleration"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Acceleration
                    </label>
                    <input
                        type="text"
                        name="acceleration"
                        id="acceleration"
                        placeholder="5"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                    />
                    </div>  
                </div>
                {/* button */}
                <div>
                    <button
                    type="submit"
                    className="w-full px-4 py-2 text-sm font-medium tracking-wider text-white uppercase bg-primary-600 rounded-lg focus:outline-none focus:ring shadow hover:bg-primary-700 dark:hover:bg-primary-500"
                    >
                    Add Vehicle
                    </button>
                </div>




 
             
          
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default addVehicleForm;
