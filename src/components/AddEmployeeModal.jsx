import { useEffect, useState } from "react";

const AddEmployeeModal = ({ isOpen, onClose, onAddEmployee, editingEmployee })=>{

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        website: "",
        company: "",
        city: "",
        });

    useEffect(()=>{
        if(editingEmployee){
            setFormData({
                name: editingEmployee.name,
                email: editingEmployee.email,
                phone: editingEmployee.phone,
                website: editingEmployee.website,
                company: editingEmployee.company.name,
                city: editingEmployee.address.city,
            });
        }
    },[editingEmployee]);
    

    const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
            ...prev,
            [name]: value,}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.name ||
            !formData.email ||
            !formData.phone ||
            !formData.website ||
            !formData.company ||
            !formData.city
            ) 
            {
            alert("Please fill in all fields.");
            return;
        }

        const newEmployee = {
            id: Date.now(),
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            website: formData.website,

            company: {
            name: formData.company,
            },

            address: {
            city: formData.city,
            },
        };

        onAddEmployee(newEmployee);

        setFormData({
            name: "",
            email: "",
            phone: "",
            website: "",
            company: "",
            city: "",
        });
    };


    if (!isOpen) return null;
    return(
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl shadow-xl w-125 p-8">
                <h2 className="text-2xl font-bold mb-6">
                    Add New Employee
                </h2>

                <form
                    onSubmit={handleSubmit} 
                    className="space-y-4"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                    />

                    <input 
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                    />

                     <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                    />

                    <input
                        type="text"
                        name="website"
                        placeholder="Website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                    />

                    <input
                        type="text"
                        name="company"
                        placeholder="Company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                    />

                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                    />

                    <div className="flex justify-end gap-4 pt-4">
                        <button
                            type="button"
                            onClick={onClose} 
                            className="border px-5 py-2 rounded-lg"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700"
                        >
                            Add Employee
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};
export default AddEmployeeModal;