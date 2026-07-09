
const AddEmployeeModal = ({ isOpen, onClose })=>{
    if (!isOpen) return null;
    return(
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl shadow-xl w-125 p-8">
                <h2 className="text-2xl font-bold mb-6">
                    Add New Employee
                </h2>

                <form className="space-y-4">
                    <input 
                        type="text" 
                        placeholder="Full Name"
                        className="w-full border rounded-lg p-3"
                    />

                    <input 
                        type="email"
                        placeholder="Email"
                        className="w-full border rounded-lg p-3" 
                    />

                     <input
                        type="text"
                        placeholder="Phone"
                        className="w-full border rounded-lg p-3"
                    />

                    <input
                        type="text"
                        placeholder="Website"
                        className="w-full border rounded-lg p-3"
                    />

                    <input
                        type="text"
                        placeholder="Company"
                        className="w-full border rounded-lg p-3"
                    />

                    <input
                        type="text"
                        placeholder="City"
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