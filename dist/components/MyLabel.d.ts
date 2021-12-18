/// <reference types="react" />
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
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, color, fontColor, allCaps }: MyLabelProps) => JSX.Element;
