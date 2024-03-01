import Buttons from "../../atom/Button"
import Input from "../../atom/Input"
import { SubTitle, Title } from "../../atom/Text"


const CardBill = () => {
    return (

        <div className="w-300 h-213.72 top-203 left-45 bg-white rounded-lg p-8">
            <Title
                label="satu"
                size="text-2xl"
            />
            <SubTitle
                label="satu"
                size="text-sm"
                textcolor="text-gray-600"
            />

            <div className="shadow-lg mb-2">
                <div className="h-32 overflow-hidden rounded-t-lg">
                    <img
                        className="object-cover w-full h-full"
                        src="https://via.placeholder.com/300x200"
                        alt="Placeholder"
                    />
                </div>

                <div className="p-4 mb-2">
                    <div className="mb-4">
                        <Title
                            label="Set Abaya Maxi Dress..."
                            size="text-md"
                        />
                        <SubTitle
                            label="Rp 497.000"
                            size="text-md"
                            textcolor="text-blue-500"
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-3 ">
                        <SubTitle
                            label="Rp 497.000"
                            size="text-md"
                            textcolor="text-gray-600"
                        />

                        <Input
                            id='id'
                            type='type'
                            value='value'
                            onChange='onChange'
                            className="col-span-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-3 ">
                        <SubTitle
                            label="Rp 497.000"
                            size="text-md"
                            textcolor="text-gray-600"
                        />

                        <Input
                            id='id'
                            type='type'
                            value='value'
                            onChange='onChange'
                            className="col-span-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-3 ">
                        <SubTitle
                            label="Rp 497.000"
                            size="text-md"
                            textcolor="text-gray-600"
                        />

                        <Input
                            id='id'
                            type='type'
                            value='value'
                            onChange='onChange'
                            className="col-span-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <hr />

                    <div className="grid grid-cols-3 gap-4 mb-3 mt-3 ">
                        <SubTitle
                            label="Total Price"
                            size="text-md"
                            textcolor="text-gray-600"
                        />

                        <Input
                            id='id'
                            type='type'
                            value='Rp497.000,00'
                            onChange='onChange'
                            className="col-span-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-3 mt-3 ">
                        <SubTitle
                            label="Amount/each"
                            size="text-md"
                            textcolor="text-gray-600"
                        />

                        <Input
                            id='id'
                            type='type'
                            value='Rp71.000,00'
                            onChange='onChange'
                            className="col-span-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>



                </div>



            </div>

            <div className="flex items-center justify-center">
                <Buttons title={"Save"} size={"sm"} onClick='' />
            </div>


        </div>

    )
}

export default CardBill