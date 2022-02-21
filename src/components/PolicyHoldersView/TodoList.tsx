import { Box, Checkbox, ListItemText, ListItemIcon, ListItemButton, ListItem, List } from '@mui/material';
import styled from 'styled-components';
import instructionsConfig from '../../constants/instructions'
import { listOfTodos } from '../../constants/todos';

const ShipItContainer = styled(Box)`
 display: flex;
 justify-content: center;
`
const TodoStyledList = styled(List)`
    width: 100%;
`

export default function TodoList() {
    const todos = [...instructionsConfig, ...listOfTodos]
    return (
        <>
            <ShipItContainer>
                <img
                    src="https://media.giphy.com/media/143vPc6b08locw/giphy.gif"
                    alt="welcome-gif"
                    style={{ maxWidth: '100%' }}
                />
            </ShipItContainer>
            <TodoStyledList>
                {todos.map((value: { title: string, label?: string }, index: number) => {
                    const labelId = `checkbox-list-label-${value}`;
                    return index === 0 ? <div key={index} ></div> :
                        (
                            <ListItem
                                key={index}
                                disablePadding
                            >
                                <ListItemButton role={undefined} dense>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={!!value.label}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={`${value.title}`} />
                                </ListItemButton>
                            </ListItem>
                        );
                })}
            </TodoStyledList>

        </>
    );
}

