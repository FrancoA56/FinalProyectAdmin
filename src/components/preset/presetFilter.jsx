import { Filter, TextInput, SelectInput } from 'react-admin';

const PresetFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Name" source="name" />
        <SelectInput label="Type" source="type" choices={[
            { id: 'about', name: 'About' },
            { id: 'home', name: 'Home' },
            { id: 'cart', name: 'Cart' },
            { id: 'shop', name: 'Shop' },
            { id: 'detail', name: 'Detail' },
            { id: 'profile', name: 'Profile' },
        ]} />
        <SelectInput label="Category" source="category" choices={[
            { id: 'basic', name: 'Basic' },
            { id: 'medium', name: 'Medium' },
            { id: 'premium', name: 'Premium' },
        ]} />
    </Filter>
);

export default PresetFilter;
