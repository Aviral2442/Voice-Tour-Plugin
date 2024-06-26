'use client'
import React, { useEffect, useState } from 'react'
import cx from "clsx"
import { Table, ScrollArea, TextInput, Card } from "@mantine/core"
import classes from "./webpageTable.module.css"
import { IconSearch } from '@tabler/icons-react'
import useAppContext from '@/context/AppContext'
import clsx from 'clsx'
import { Jost, Quicksand } from 'next/font/google'

const font = Quicksand({ subsets: ['latin'], weight: ['300', '400', '500', "600", '700'] });
const fonts = Jost({ subsets: ['latin'], weight: ['100', '400'] });


// Search code for search box to search 

// function filterData(data, search) {
//     const query = search.toLowerCase().trim()
//     return data.filter(item =>
//       keys(data[0]).some(key => item[key].toLowerCase().includes(query))
//     )
//   }

const data = [
    {
        name: "Athena Weissnat",
        company: "Little - Rippin",
        email: "Elouise.Prohaska@yahoo.com"
    },
    {
        name: "Deangelo Runolfsson",
        company: "Greenfelder - Krajcik",
        email: "Kadin_Trantow87@yahoo.com"
    },
    {
        name: "Danny Carter",
        company: "Kohler and Sons",
        email: "Marina3@hotmail.com"
    }
]


const WebpageTable = () => {

    const [scrolled, setScrolled] = useState(false);
    const [Search, setSearch] = useState('');

    const { currentUser } = useAppContext();

    const [webpageList, setWebpageList] = useState([]);
    const [masterList, setMasterList] = useState([]);

    const handleSearchChange = event => {
        const { value } = event.target;
        // console.log(value);
        setSearch(value)
        setWebpageList(masterList.filter(item => item.name.toLowerCase().includes(value.toLowerCase())))
    }

    const fetchWebpagesData = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/webpage/getbyuser`, {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': currentUser.token
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setWebpageList(data);
                setMasterList(data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        fetchWebpagesData();
    }, [])

    const rows = webpageList.map(row => (
        <Table.Tr key={row._id}>
            <Table.Td>{row.name}</Table.Td>
            <Table.Td>{row.address}</Table.Td>
            <Table.Td>{row.description}</Table.Td>
            <Table.Td>{new Date(row.createdAt).toLocaleString()}</Table.Td>
        </Table.Tr>
    ))
    return (
       
            <Card shadow='lg' c='white' p={20} className={classes.card}>
                <TextInput
                    placeholder="Search your webpage here..."
                    mb="xl"
                    c="white"
                    leftSection={
                        <IconSearch
                            style={{ width: ' rem(14)', height: 'rem(14)' }}
                            stroke={1.5}
                        />
                    }
                    // value={search}
                    onChange={handleSearchChange}
                    className={classes.table}
                />
                <Table className={clsx(classes.table,font.className)} horizontalSpacing="xl" withTableBorder>
                    <Table.Thead
                        className={clsx(classes.header, { [classes.scrolled]: scrolled })}
                    >
                        <Table.Tr>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Address</Table.Th>
                            <Table.Th>Description</Table.Th>
                            <Table.Th>CreateAt</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </Card>
    )
}

export default WebpageTable