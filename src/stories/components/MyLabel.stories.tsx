import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: {control: 'select'},
        fontColor: {control: 'color'}
    }
} as ComponentMeta<typeof MyLabel >

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args = {
    label: "Hola Mundo",
    size: 'h3',
    color: 'tertiary'
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    label: "All Caps",
    size: 'normal'
}

export const Secondary = Template.bind({})
Secondary.args = {
    label: "Secondary",
    size: 'h3',
    color: 'primary'
}

export const Ternary = Template.bind({})
Ternary.args = {
    label: "Secondary",
    size: 'h3',
    color: 'primary',
    allCaps: true
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    label: 'Custom Font Color',
    size: 'h1',
    fontColor: 'red'
}

