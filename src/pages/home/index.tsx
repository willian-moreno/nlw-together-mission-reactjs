import googleIconImg from '@/assets/images/google-icon.svg';
import illustrationImg from '@/assets/images/illustration.svg';
import loginIconImg from '@/assets/images/log-in.svg';
import logoImg from '@/assets/images/logo.svg';
import { Button } from '@/components/Button';
import { useAuth } from '@/hooks/useAuth';
import { database } from '@/plugins/firebase';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';

export function Home() {
  const history = useHistory();
  const [roomCode, setRoomCode] = useState('');
  const [disabledEnterRoom, setDisabledEnterRoom] = useState(true);
  const { user, signInWithGoogle } = useAuth();

  async function handleEnterRoom(event: FormEvent) {
    event.preventDefault();

    if (!roomCode.trim()) return;

    const roomRef = database.ref(`rooms/${roomCode}`).get();

    if (!(await roomRef).exists()) return alert('Room does not exists.');

    history.push(`/rooms/${roomCode}`);
  }

  function handleRoomCode(event: ChangeEvent<HTMLInputElement>) {
    const roomCode = event.target.value;
    setRoomCode(roomCode);

    if (!roomCode.trim()) setDisabledEnterRoom(true);
    else setDisabledEnterRoom(false);
  }

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push('/rooms/new');
  }

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
          <Button
            className="btn create-room"
            onClick={handleCreateRoom}
          >
            <img
              src={googleIconImg}
              alt="Google Logo"
            />
            Crie sua sala com o Google
          </Button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleEnterRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={handleRoomCode}
            />
            <Button
              type="submit"
              className="btn login"
              disabled={disabledEnterRoom}
            >
              <img
                src={loginIconImg}
                alt="Login Logo"
              />
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
