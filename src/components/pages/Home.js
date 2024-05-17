import Cart from "../Cart";
import "./Home.module.css";

function Home() {
  return (
    <main>
      <div id="home-title">
        <h2>You are welcome</h2>
        <p>Here you'll find a bit of my work. Feel free to contact me throught my social media</p>
      </div>
      <Cart title="API Development" 
      description="Are you looking for someone to create and maintence APIs for your company? I am the one" 
      />

      <Cart title="Website development"
        description="A website helps potential customers to find your business and make your business more credible"
      />

      <Cart title="Online Store"
        description="Are you looking for a customized online store? Paymant integration? You're in the right place"
      />

      <Cart title="App Development"
        description="Do you have an app idea? Want to implement it? I am the right guy"
      />
    </main>
  );
}

export default Home;
