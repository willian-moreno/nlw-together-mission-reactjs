import illustrationImg from '@/assets/images/illustration.svg';
import logoImg from '@/assets/images/logo.svg';
import { Button } from '@/components/Button';
import { useAuth } from '@/hooks/useAuth';
import { database } from '@/plugins/firebase';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './index.scss';

export function NewRoom() {
  const { user } = useAuth();
  const [roomName, setRoomName] = useState('');
  const [disabledCreateRoom, setDisabledCreateRoom] = useState(true);
  const history = useHistory();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (!roomName.trim()) return;

    const roomRef = database.ref('rooms');
    const firebaseRoom = await roomRef.push({
      title: roomName,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  }

  function handleRoomName(event: ChangeEvent<HTMLInputElement>) {
    const roomName = event.target.value;
    setRoomName(roomName);

    if (!roomName.trim()) setDisabledCreateRoom(true);
    else setDisabledCreateRoom(false);
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
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={handleRoomName}
              value={roomName}
            />
            <Button
              type="submit"
              className="btn login"
              disabled={disabledCreateRoom}
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
