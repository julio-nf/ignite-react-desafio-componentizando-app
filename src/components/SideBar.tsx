import { GenreResponseProps } from '../App';
import { Button } from '../components/Button';

import '../styles/sidebar.scss';

interface SideBarProps {
  genres: GenreResponseProps[];
  selected: number;
  onClick: (id: number) => void;
}

export function SideBar(props: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {props.genres.map((genre) => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.onClick(genre.id)}
            selected={props.selected === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
