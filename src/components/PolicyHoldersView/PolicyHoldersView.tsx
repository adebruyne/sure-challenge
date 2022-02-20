import { Typography, Box } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import InfoTable from '../InfoTable';




function PolicyHoldersView() {
    const [policyHolders, setPolicyHolders] = useState([] as any);
    const policyHoldersURL = `https://fe-interview-technical-challenge-api-git-main-sure.vercel.app/api/policyholders`
    const getPolicyHolders = () => {
        axios.get(policyHoldersURL).then((response) => {
            const holders = response.data.policyHolders
            setPolicyHolders(holders)
        }).catch((error) => console.error(`Error: ${error}`))
    }

    useEffect(() => {
        getPolicyHolders()
    }, [] as any)
    return (
        <>
            <Typography variant="h2" textAlign="center" marginBottom="24px">
                Policy Holders
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
                {policyHolders.map((policyHolder: any, index: number) => {
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
                    },
                    ]
                    return (<InfoTable key={index} header={`Policy Holder: ${index + 1}`} rows={rows} />)
                })}
            </Box>
        </>
    );
}

export default PolicyHoldersView;