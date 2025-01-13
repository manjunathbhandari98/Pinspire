import Card from "../components/Card.jsx";
import "../assets/styles/Card.css";
const Home = () => {
  return (
    <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 space-x-2 space-y-3 p-4">
      <Card image="https://i.pinimg.com/236x/e9/5a/4b/e95a4b9d1352b08c783ec123ec4ea6c3.jpg" />
      <Card image="https://i.pinimg.com/236x/74/de/66/74de66b9fd6a20d4f53c7466cee6e914.jpg" />
      <Card image="https://i.pinimg.com/474x/c5/df/81/c5df815bd674591fe3e9dae5f5955424.jpg" />
      <Card image="https://i.pinimg.com/236x/67/fc/ef/67fcef8d02b94942fdfb51b608038dcd.jpg" />
      <Card image="https://i.pinimg.com/474x/e2/d3/12/e2d312017833a0ab9aee7697be3d1a6b.jpg" />
      <Card image="https://i.pinimg.com/236x/16/c8/94/16c894e70bbc89dc1955779f0c45caab.jpg" />
      <Card image="https://i.pinimg.com/236x/50/98/a8/5098a880c0aa330af1ce07c35d20f149.jpg" />
      <Card image="https://i.pinimg.com/474x/78/5e/84/785e84f2037506c4308c44dbd0c992a1.jpg" />
    </div>
  );
};

export default Home;
