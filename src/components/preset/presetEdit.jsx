import {
    Edit,
    SimpleForm,
    TextInput,
    SimpleFormIterator,
    ArrayInput,
    BooleanInput,
    SelectInput,
    NumberInput,
    required
} from "react-admin";

const typeChoices = [
    { id: 'about', name: 'About' },
    { id: 'home', name: 'Home' },
    { id: 'cart', name: 'Cart' },
    { id: 'shop', name: 'Shop' },
    { id: 'detail', name: 'Detail' },
    { id: 'profile', name: 'Profile' }
];

const categoryChoices = [
    { id: 'basic', name: 'Basic' },
    { id: 'medium', name: 'Medium' },
    { id: 'premium', name: 'Premium' }
]

const colorChoices = [
    { id: 'white', name: 'White' },
    { id: 'yellow', name: 'Yellow' },
    { id: 'blue', name: 'Blue' },
    { id: 'green', name: 'Green' },
    { id: 'brown', name: 'Brown' },
    { id: 'red', name: 'Red' }
]

const PresetEdit = (props) => {

    return (
        <Edit {...props}>
            <SimpleForm >
                <TextInput source="name" label="Name" />
                <NumberInput source="price" label="Price" />
                <SelectInput source="color"
                    label="Color" 
                    choices={colorChoices}
                    required />
                <SelectInput source="type"
                    label="Type"
                    choices={typeChoices}
                    required />
                <SelectInput source="category"
                    label="Category"
                    choices={categoryChoices}
                    required />
                <ArrayInput source="images" label="Images">
                    <SimpleFormIterator>
                        <TextInput />
                    </SimpleFormIterator>
                </ArrayInput>
                <TextInput source="url" label="URL" />
                <BooleanInput source="isDisabled" label="Is Disabled?" />
            </SimpleForm>
        </Edit>
    );
};

export default PresetEdit;