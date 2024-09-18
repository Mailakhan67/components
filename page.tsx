

// 
// export default function Home() {
//   return (
//     <div className="h-20 w-20">
//  <h1 className="text-sm">hello world</h1>
//  <h2 className="text-xs">hello world</h2>
//  <h3 className="text-lg">helloworld</h3>
//  </div>
//   );
// }

import Footer from "./components/footer";
import Hero from "./components/hero";
import Nav from "./components/nav";

// 
export default function Home() {
  return (
 <>
 <Nav/>
 <Hero/>
 <Footer/>
 </>
  );
}
