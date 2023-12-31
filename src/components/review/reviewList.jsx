import {
    List,
    Datagrid,
    TextField
} from 'react-admin';

import RatingField from './ratingField';
import TextCustomField from "../../utils/textCustomField/TextCustomField";

const ReviewList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" label="Id" />
                <TextField source="user.name" label="User" />
                <TextField source="email" label="Email" />
                <TextField source="preset.name" label="Preset" />
                <RatingField source="rating" label="Rating" />
                <TextCustomField source="message" label="Message" />
            </Datagrid>
        </List>
    )
};

export default ReviewList;
