import {
    Create,
    SimpleForm,
    TextInput,
    SimpleFormIterator,
    ArrayInput,
    BooleanInput,
    SelectInput,
    NumberInput
} from "react-admin";

const typeChoices = [
    { id: 'about', name: 'About' },
    { id: 'home', name: 'Home' },
    { id: 'cart', name: 'Cart' },
    { id: 'shop', name: 'Shop' },
    { id: 'detail', name: 'Detail' },
    { id: 'profile', name: 'Profile' },
];

const categoryChoices = [
    { id: 'basic', name: 'Basic' },
    { id: 'medium', name: 'Medium' },
    { id: 'premium', name: 'Premium' },
]

const colorChoices = [
    { id: 'white', name: 'White' },
    { id: 'yellow', name: 'Yellow' },
    { id: 'blue', name: 'Blue' },
    { id: 'green', name: 'Green' },
    { id: 'brown', name: 'Brown' },
    { id: 'black', name: 'Black' },
    { id: 'red', name: 'Red' },
]

const PresetList = (props) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="name" label="Name" />
                <NumberInput source="price" label="Price" />
                <SelectInput source="defaultColor" label="Color" choices={colorChoices} />
                <SelectInput source="type" label="Type" choices={typeChoices} />
                <SelectInput source="category" label="Category" choices={categoryChoices} />
                <ArrayInput source="images" label="Images">
                    <SimpleFormIterator>
                        <TextInput />
                    </SimpleFormIterator>
                </ArrayInput>
                <TextInput source="url" label="URL" />
                <BooleanInput source="isDisabled" label="Is Disabled?" />
            </SimpleForm>
        </Create>
    );
};

export default PresetList;