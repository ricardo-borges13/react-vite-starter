import { useNavigate } from 'react-router-dom';

export const QuemSomos = () => {

  const navigate = useNavigate();
  return (
    <div>
      <h1>Página Quem Somos</h1>
      <button onClick={() => navigate("/")}>Voltar</button>
    </div>
  )

}
