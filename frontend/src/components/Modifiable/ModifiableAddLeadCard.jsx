import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";

const baseLead = {
    image: "",
    name: "",
    position: "",
    blurbs: "",
};

const ModifiableAddLeadCard = () => {
    const [currentImage, setCurrentImage] = useState();
    const [newLead, setNewLead] = useState(baseLead);

    const handleInputChange = (event) => {
        event.preventDefault();
        let value = event.target.value;
        setNewLead({
            ...newLead,
            [event.target.name]: value,
        });
    };

    const submitLead = async () => {
        const firestore = getFirestore();
        setCurrentImage(newLead.image);
        await addDoc(collection(firestore, "leadership"), newLead);
        setNewLead(baseLead)
    };
    const { name, image, position, blurbs } = newLead

    return (
        <div className="bg-gray-200 rounded-md flex justify-between">
            <div className="pt-2 pb-4 px-4">
                <span className="font-bold">Name: </span>
                <input
                    name="name"
                    type="text"
                    className="font-bold text-2xl mb-1 p-1"
                    onChange={handleInputChange}
                    value={name}
                />
                <div className="my-2">
                    <span className="font-bold">Position: </span>
                    <input
                        name="position"
                        type="text"
                        className="bg-white p-1"
                        onChange={handleInputChange}
                        value={position}
                    />
                </div>
                <span className="font-bold">Description: </span>
                <textarea
                    name="blurbs"
                    rows="6"
                    cols="40"
                    className="mb-1 p-1"
                    onChange={handleInputChange}
                    value={blurbs}
                />
                <p className="my-2">
                    <span className="font-bold">Image: </span>
                    <input
                        className="w-100"
                        name="image"
                        onChange={handleInputChange}
                        type="text"
                        value={image}
                    />
                </p>
                <button
                    className="font-bold border-2 p-1 mt-5 rounded-md border-slate-400 bg-green-600 text-white hover:bg-green-800"
                    onClick={submitLead}
                >
                    Submit
                </button>
            </div>
            <img className="rounded-t-md w-1/2" src={currentImage} alt="None"/>
        </div>
    );
};

export default ModifiableAddLeadCard;