import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type Person = { name: string; amount: number };

type Props = {
  people: Person[];
  onRemove: (index: number) => void;
};

export default function PersonList({ people, onRemove }: Props) {
  return (
    <List>
      {people.map((person, index) => (
        <ListItem
          key={index}
          secondaryAction={
            <IconButton edge="end" onClick={() => onRemove(index)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText
            primary={person.name}
            secondary={`$${person.amount.toFixed(2)}`}
          />
        </ListItem>
      ))}
    </List>
  );
}
