import {
    List,
    Datagrid,
    TextField,
    NumberField,
    BooleanField,
    DateField,
    useListContext,
    ArrayField
} from 'react-admin';

const Presets = () => {
    const { data } = useListContext();
    console.log(data);
    return (
        <ul>
            {data.map(backlink => (
                <li key={backlink.preset.presetId}>{backlink.preset.presetName}</li>
            ))}
        </ul>
    );
};


const InvoiceList = (props) => {
    return (
        <List {...props}>
            <Datagrid >
                <TextField source="id" label="ID" />
                <NumberField source="totalAmount" label="Total Amount" />
                <TextField source="paymentMethod" label="Payment Method" />
                <BooleanField source="isPaid" label="Is Paid" />
                <TextField source="paymentId" label="Payment ID" />
                <DateField source="createdAt" label="Created At" showTime />
                <TextField source="userEmail" label="User Email" />
                <TextField source="user.name" label="User Name" />
                <ArrayField source="invoiceItems" label="Presets">
                    <Presets />
                </ArrayField>
            </Datagrid>
        </List>
    );
};



export default InvoiceList;
