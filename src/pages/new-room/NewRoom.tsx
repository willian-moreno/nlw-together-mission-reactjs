import './NewRoom.scss';
import { Link } from 'react-router-dom';
import { Button } from '@/components/button/Button';
import illustrationImg from '@/assets/images/illustration.svg';
import logoImg from '@/assets/images/logo.svg';

export function NewRoom() {
  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Illustration symbolizing asks and answers"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img
            src={logoImg}
            alt="Letmeask"
          />
          <h2>Criar uma nova sala</h2>
          <form>
            <input
              type="text"
              placeholder="Nome da sala"
            />
            <Button
              type="submit"
              className="btn login"
            >
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala já existente? <Link to="/">Click aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
