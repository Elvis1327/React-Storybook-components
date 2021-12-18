var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { MyLabel } from "../../components/MyLabel";
export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: { control: 'select' },
        fontColor: { control: 'color' }
    }
};
var Template = function (args) { return _jsx(MyLabel, __assign({}, args), void 0); };
export var Basic = Template.bind({});
Basic.args = {
    label: "Hola Mundo",
    size: 'h3',
    color: 'tertiary'
};
export var AllCaps = Template.bind({});
AllCaps.args = {
    label: "All Caps",
    size: 'normal'
};
export var Secondary = Template.bind({});
Secondary.args = {
    label: "Secondary",
    size: 'h3',
    color: 'primary'
};
export var Ternary = Template.bind({});
Ternary.args = {
    label: "Secondary",
    size: 'h3',
    color: 'primary',
    allCaps: true
};
export var CustomFontColor = Template.bind({});
CustomFontColor.args = {
    label: 'Custom Font Color',
    size: 'h1',
    fontColor: 'red'
};
