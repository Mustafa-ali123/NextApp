import Link from "next/link"


const Navbar = () => {
  return (
    <>
      <nav className=" navbar-expand-lg navbar bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">My Next App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="todo">Todo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" href="quiz">Quiz</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" href="/">Add Quiz</Link>
        </li>        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
