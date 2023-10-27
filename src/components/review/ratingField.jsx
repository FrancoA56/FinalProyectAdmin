
import Rating from 'react-rating';
import Star from '@mui/icons-material/Star';
import { useRecordContext } from 'react-admin';

const RatingField = () => {
    const record = useRecordContext();
    if (!record) return null;
    return (
        <Rating
            emptySymbol={<Star style={{ color: 'grey' }} />}
            fullSymbol={<Star style={{ color: 'yellow' }} />}
            fractions={2}
            initialRating={record.rating}  // Aquí estableces el valor de la calificación
            readonly={true}
        />
    );
};

export default RatingField;
