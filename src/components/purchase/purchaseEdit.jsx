import { Edit, SimpleForm, SelectInput } from 'react-admin';

const paymentStatusChoices = [
    { id: true, name: 'Completed' },
    { id: false, name: 'Pending' }
];

const PurchaseEdit = (props) => {

    return (
        <Edit {...props}>
            <SimpleForm>
                <SelectInput
                    source="isPaid"
                    label="Payment status"
                    choices={paymentStatusChoices}
                    emptyValue={false}
                />
            </SimpleForm>
        </Edit>
    );
};

export default PurchaseEdit;