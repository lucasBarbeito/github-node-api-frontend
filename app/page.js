import Feed from "../components/Feed";

const Home = () => {
  return (
    <section className=" lg:w-2/3 text-center mx-auto relative pt-36 ml-auto">
      {/* Cuando los Tags tienen un '_' en ellos, significa que viene de mis styles, en este caso de Globals.css */}
      <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
        Discover & Share
        {/* El "max-md:hidden" , es separar los 2 textos en pantallas grandes, pero en chicas no estan una debajo de la otra  */}
        <br className="max-md:hidden"></br>
        <span className="orange_gradient"> Github Users and their Repos</span>
      </h1>
      <Feed />
    </section>
  );
};

export default Home;
