import {
    List,
    Datagrid,
    TextField,
    NumberField,
    BooleanField,
    DateField,
    useListContext,
    ArrayField,
    SelectField
} from 'react-admin';

const Presets = () => {
    const { data } = useListContext();
    return (
        <ul>
            {data.map(backlink => (
                <li key={backlink.preset.presetId}>{backlink.preset.presetName}</li>
            ))}
        </ul>
    );
};

const paymentStatusChoices = [
    { id: true, name: 'Completed' },
    { id: false, name: 'Pending' },
];

const InvoiceList = (props) => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <NumberField source="totalAmount" label="Total Amount" />
                <TextField source="paymentMethod" label="Payment Method" />
                <SelectField source="isPaid" label="Payment Status" choices={paymentStatusChoices} />
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
