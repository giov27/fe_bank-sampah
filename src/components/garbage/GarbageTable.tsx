import React, { useEffect, useState } from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';
import DashboardCard from '../../../src/components/shared/DashboardCard';
import axios from 'axios';
import { GARBAGE_LIST } from '../../config/service.config';
import { toast } from 'react-toastify';

const GarbageTable = () => {
    const [garbageList, setGarbageList] = useState()

    const getGarbageList = async () => {
        try {
            const { data: { data } } = await axios.get<never>(GARBAGE_LIST);
            console.log(data)
            setGarbageList(data)
            toast.success("Get Success!");
        } catch (e) {
            toast.warning("Error!");
            console.warn(e)
        }
    };
    useEffect(() => {
        getGarbageList()
    }, [])
    return (

        <DashboardCard title="Product Performance">
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell align='center' style={{ width: "1 %" }}>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Num
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Name
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Sell Price
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Rapel Price
                                </Typography>
                            </TableCell>
                            <TableCell >
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Toni Price
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Action
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {garbageList && garbageList.map((garbage, i) => (
                            <TableRow key={garbage._id}>
                                <TableCell align='center'>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {i + 1}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                {garbage.name}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                sx={{
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {garbage.category?.name}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h6">
                                        {garbage.sellPrice}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h6">
                                        {garbage.appPrice}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h6">{garbage.toniPrice}</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h6"></Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default GarbageTable;
