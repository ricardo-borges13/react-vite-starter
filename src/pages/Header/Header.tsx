import { useNavigate } from "react-router-dom"


export const HeaderMain = () => {
  const navigate = useNavigate()
  return (
    <>
    <div>
      <h1>HEADER MAIN</h1>
    </div>
    <nav>
      <button onClick={() => navigate("/quem-somos")}>Quem Somos</button>
    </nav>
    </>
  )
}
