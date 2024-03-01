import Buttons from "../../atom/Button"
import Input from "../../atom/Input"
import { Title } from "../../atom/Text"
import {LabelAtom,TextAreaAtom} from "../../atom/Label"


const AddItemMolecules = () => {
    return (

        <div className="w-300 h-213.72 top-203 left-45 bg-white rounded-lg p-8 text-left">

            <Title
                label="Add Item"
                size="text-2xl"
                spacebottom="mb-3"
            />

            <LabelAtom
                label="Product Link"
                id="nama"
                type="text"
                className="border border-gray-300 rounded px-2 py-1 mb-4"
                placeholder="sayang"
            />

            <LabelAtom
                label="Item Name"
                id="nama"
                type="text"
                className="border border-gray-300 rounded px-2 py-1 mb-4"
                placeholder="sayang"
            />

            <div className="grid grid-cols-3 gap-4" >

                <LabelAtom
                    label="Region"
                    id="nama"
                    type="text"
                    className="border border-gray-300 rounded px-2 py-1 mb-3"
                    placeholder="sayang"
                />

                <LabelAtom
                    label="Price"
                    id="nama"
                    type="text"
                    className="border border-gray-300 rounded px-2 py-1 mb-3"
                    placeholder=""
                />
            </div>

            <TextAreaAtom
                    label="Details"
                    id="nama"
                    type="textarea"
                    className="border border-gray-300 rounded px-2 py-1 mb-3"
                    placeholder=""
                />


            <div className="flex items-center justify-center mt-5">
                <Buttons title={"Share Bill"} size={"sm"} onClick='' />
            </div>


        </div>

    )
}

export default AddItemMolecules