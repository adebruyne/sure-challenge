import { Typography, Box, Button } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IPolicyHolder } from '../../databaseTypes';
import InfoTable from '../InfoTable';
import Modal from '../Modal';
import TodoList from './TodoList';

const ButtonContainer = styled(Box)`
 padding-top: 16px;
 text-align: center;
`
const HeaderTitle = styled(Typography)`
text-align: center;
margin-bottom: 24px;
`
const PolicyHoldersContainer = styled(Box)`
text-align: center;
`


const policyHoldersGetURL = "https://fe-interview-technical-challenge-api-git-main-sure.vercel.app/api/policyholders";
const policyHoldersPostUrl = "https://fe-interview-technical-challenge-api-git-main-sure.vercel.app/api/policyholders";
const payload = {
    "name": "Yul B.Allwright",
    "age": 89,
    "address": {
        "line1": "5555 No Friggin Way",
        "line2": "APT H",
        "city": "Silver City",
        "state": "New Mexico",
        "postalCode": "88036",
    },
    "phoneNumber": "123-444-5678"
}

function PolicyHoldersView() {
    const [policyHolders, setPolicyHolders] = useState([] as IPolicyHolder[]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getPolicyHolders = async () => {
        const response = await axios.get(policyHoldersGetURL).then((response) => {
            return response.data.policyHolders
        }).catch((error) => console.error(`Error: ${error}`))
        if (response) {
            return setPolicyHolders(response)
        }
    }

    useEffect(() => {
        getPolicyHolders()
    }, [])

    const handleAddAnotherPolicy = async () => {
        const response = await axios
            .post(policyHoldersPostUrl, payload)
            .then((response) => {
                return response.data.policyHolders;
            })
            .catch((error) => {
                console.error(`Error: ${error}`)
            });
        if (response) {
            return setPolicyHolders(response);
        }
    };
    return (
        <>
            <HeaderTitle variant='h2'>
                Policy Holders
            </HeaderTitle>
            <PolicyHoldersContainer>
                {policyHolders.map((policyHolder: IPolicyHolder, index: number) => {
                    const rows = [{
                        key: 'Name',
                        value: policyHolder.name
                    },
                    {
                        key: 'Age',
                        value: policyHolder.age
                    },
                    {
                        key: 'Address',
                        value: `${policyHolder.address.line1}\n${policyHolder.address.line2}\n${policyHolder.address.city}, ${policyHolder.address.state} ${policyHolder.address.postalCode}`
                    },
                    {
                        key: 'Phone number',
                        value: policyHolder.phoneNumber
                    },
                    {
                        key: 'Primary policyholder',
                        value: policyHolder.isPrimary ? 'Yes' : 'No'
                    }
                    ]
                    return (<InfoTable key={index} header={`Policy Holder: ${index + 1}`} rows={rows} />)
                })}
            </PolicyHoldersContainer>
            <ButtonContainer
            >
                <Button
                    className={'add_policyHolder_button'}
                    onClick={handleAddAnotherPolicy}
                    variant="contained"
                    color="success"
                    size="large"
                >
                    Add a policyHolder
                </Button>
            </ButtonContainer>
            <ButtonContainer>
                <Button
                    className={'todo_list_button'}
                    onClick={() => setIsModalOpen(true)}
                    variant="contained"
                    color="warning"
                    size="large"
                >
                    List of Todos
                </Button>
                <Modal
                    isOpen={isModalOpen}
                    handleClose={() => setIsModalOpen(false)}
                    title="Remaing Work"
                >
                    <TodoList />
                </Modal>
            </ButtonContainer>
        </>
    );
}

export default PolicyHoldersView;