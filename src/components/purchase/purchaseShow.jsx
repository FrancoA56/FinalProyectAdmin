
import {
    List,
    Datagrid,
    useRecordContext,

} from 'react-admin';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const PresetsTable = ({ data }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Preset ID</TableCell>
                    <TableCell>Preset Name</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Price</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell>{item.presetId}</TableCell>
                        <TableCell>{item.preset.presetName}</TableCell>
                        <TableCell>{item.preset.type}</TableCell>
                        <TableCell>{item.preset.category}</TableCell>
                        <TableCell>{item.preset.price}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}; 

const InvoiceShow = (props) => {
    const record = useRecordContext();
    if (!record || !record.invoiceItems || !Array.isArray(record.invoiceItems)) {
        return null;
    }

    if (!record) return null;
    return (
        <List {...props}>
             <Datagrid>
                <PresetsTable data={record.invoiceItems} />
            </Datagrid>
        </List>
    )
}

export default InvoiceShow;
