/**
 * Form_Container generated on 2021-01-29
 * {@link https://github.com/apioo}
 */


import {Form_Element_Input} from "./Form_Element_Input";
import {Form_Element_Select} from "./Form_Element_Select";
import {Form_Element_Tag} from "./Form_Element_Tag";
import {Form_Element_TextArea} from "./Form_Element_TextArea";

export interface Form_Container {
    element?: Array<Form_Element_Input | Form_Element_Select | Form_Element_Tag | Form_Element_TextArea>
}

