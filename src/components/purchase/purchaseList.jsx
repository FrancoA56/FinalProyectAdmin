import {
    List,
    Datagrid,
    TextField,
    NumberField,
    DateField,
    SelectField,
    EditButton
} from 'react-admin';

import InvoiceShow from './purchaseShow';

const paymentStatusChoices = [
    { id: true, name: 'Completed' },
    { id: false, name: 'Pending' },
];

const InvoiceList = (props) => {
    return (
        <List {...props}>
            <Datagrid rowClick="expand"
                expand={<InvoiceShow />}>
                <TextField source="id" />
                <NumberField source="totalAmount" label="Total Amount" />
                <TextField source="paymentMethod" label="Payment Method" />
                <SelectField source="isPaid" label="Payment Status" choices={paymentStatusChoices} />
                <TextField source="paymentId" label="Payment ID" />
                <DateField source="createdAt" label="Created At" showTime />
                <TextField source="userEmail" label="User Email" />
                <TextField source="user.name" label="User Name" />
                <EditButton />
            </Datagrid>
        </List>
    );
};

export default InvoiceList;
