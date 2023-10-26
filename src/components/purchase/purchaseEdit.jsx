import { Edit, SimpleForm, BooleanInput } from 'react-admin';

const PurchaseEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <BooleanInput source="isPaid" label="Payment status" />
            </SimpleForm>
        </Edit>
    );
};

export default PurchaseEdit;