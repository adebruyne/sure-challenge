import { Box, Checkbox, ListItemText, ListItemIcon, ListItemButton, ListItem, List } from '@mui/material';

import instructionsConfig from '../../constants/instructions'


export default function TodoList() {
    const todos = [...instructionsConfig, ...listOfTodos]
    return (
        <>
            <Box sx={{ textAlign: 'center' }}>
                <img
                    src="https://media.giphy.com/media/143vPc6b08locw/giphy.gif"
                    alt="welcome-gif"
                    style={{ maxWidth: '100%' }}
                />
            </Box>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((value: { title: string, label?: string }, index: number) => {
                    const labelId = `checkbox-list-label-${value}`;
                    return index === 0 ? <></> :
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
            </List>

        </>
    );
}

const listOfTodos = [
    {
        title: '10. Make less assumptions and ask more questions about why and who: if we were going to ship this to production, there would need to be a whole conversation about who this is for and why they need it. Is there a design approved? Do we need to add an form for users to add policy holders? Is there any scope we need to cut for time puporses? Are there any barriers allowing the code to be acccessible to those users both with and/or without disabilities so we are creating an inclusive space on our platform?'
    },
    {
        title: '11. Make the code cleaner: refactoring and organizing components. Make use of more styled components instead of passing styles inline. Find out how the team likes to format and organize code so I can match those practices (and also offer some solutions).'
    },
    {
        title: '12. Make the UI prettier: I was focused more on hitting the functionality in each challenge vs. making it look beautiful, which perhaps was a bad assumption on my part. Add a loading spinner for when the user is waiting on data reponse.'
    },
    {
        title: '13. Add more jest tests - test happy paths, edge cases. There were not any inputs from a form on this, but if we did, having some sort of validation schema would be nice.'
    },
    {
        title: '14. More functional testing: check performance on different browsers, slower browsers, different machines, different media views (mobile vs tablet), screen readers. '
    },
    {
        title: '15. Thorough code review performed by both myself and 2 peers. Is this the expected file structure? Are there areas where code could perform better with a refactor? Remove leftover comments - comments can lie, the code does not. '
    },

]