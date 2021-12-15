import { AllCaps } from '../stories/components/MyLabel.stories';
import './mylabel.css';

export interface MyLabelProps {
    /**
   * This is the description of the text
   */
    label: string;
    /**
     * This is the size of the button
     */
    size: 'normal' | 'h1' | 'h3';
    allCaps?: boolean;
    color?: 'primary' | 'secondary' | 'tertiary'; 
}

export const MyLabel = ( { label = 'No Label', size = 'normal', color="primary", allCaps=false }: MyLabelProps ) => {
    return (
        <span className={`${size} ${`text-${color}`}`}>
            { allCaps === true ? label.toUpperCase() : label }
        </span>
    )
}
