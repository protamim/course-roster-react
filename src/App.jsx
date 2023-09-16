import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header/Header";
import Courses from "./components/courses/courses";
import Cart from "./components/Cart/Cart";

function App() {
  const [courseName, setCourseName] = useState([]);
  const [creditHr, setCreditHr] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCourses = (courseTitle, credit, coursePrice) => {
    const existItem = courseName.find(item => item === courseTitle);
    if(existItem){
      toast('Already added it to the cart!');
    }else{
      const newCourseName = [...courseName, courseTitle];
      setCourseName(newCourseName);
      handleCredit(credit);
      handleTotalPrice(coursePrice);
    }
  }

  const handleCredit = (credit) => {
    if(creditHr <= 20 && (credit + creditHr) <= 20){
      const newCredit = credit + creditHr;
      setCreditHr(newCredit)
    }else{
      toast('Check out your remaining credit!');
    }
  }
  
  const handleTotalPrice = (coursePrice) => {
    const newPrice = coursePrice + totalPrice;
    setTotalPrice(newPrice);

  }

  return (
    <>
     <header className="mt-8">
        <div className="container mx-auto px-4">
          <Header/>
        </div>
     </header>
     <ToastContainer/>
      <section className="mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <main className="w-full md:w-3/4">
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Courses handleCourses={handleCourses} />
              </div>
            </main>
            <aside className="w-full md:w-3/12">
              <div>
                <Cart courseName={courseName} creditHr={creditHr} totalPrice={totalPrice} />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
