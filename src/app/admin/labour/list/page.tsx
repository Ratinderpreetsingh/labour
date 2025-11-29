"use client";

import { useState } from "react";
import Button from "@/components/Button";
import Container from "@/components/Container";
import {
  useDeleteLabourMutation,
  useGetLaboursQuery,
  useUpdateLabourMutation,
} from "@/redux/services/labourAPI";
import { Labour } from "@/lib/types/labour.type";

export default function LabourListPage() {
  const { data: labours, isLoading } = useGetLaboursQuery();
  const [deleteLabour] = useDeleteLabourMutation();
  const [updateLabour] = useUpdateLabourMutation();

  const [editingId, setEditingId] = useState<string | number | null>(null);
  const [editForm, setEditForm] = useState<Labour>({
    name: "",
    phone: "",
    address: "",
    aadhar: "",
    salary: 0,
    joiningDate: "",
    skill: "",
    city: "",
    price: 0,
    status: "active",
  });

  const handleEditClick = (labour: Labour) => {
    if (!labour.id) return;
    setEditingId(labour.id);
    setEditForm({ ...labour });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Ensure numeric fields are stored as numbers
    if (name === "salary" || name === "price") {
      setEditForm({ ...editForm, [name]: Number(value) });
    } else {
      setEditForm({ ...editForm, [name]: value });
    }
  };

  const handleUpdate = async () => {
    if (editingId !== null) {
      try {
        await updateLabour({ id: editingId, data: editForm }).unwrap();
        alert("Labour updated successfully!");
        setEditingId(null);
      } catch (err) {
        console.error(err);
        alert("Failed to update labour");
      }
    }
  };

  const handleDelete = async (id?: string | number) => {
    if (!id) return;
    if (confirm("Are you sure you want to delete this labour?")) {
      try {
        await deleteLabour(id).unwrap();
        alert("Labour deleted successfully!");
      } catch (err) {
        console.error(err);
        alert("Failed to delete labour");
      }
    }
  };

  if (isLoading) return <p>Loading labours...</p>;

  return (
    <Container>
      <div className="min-h-screen bg-[#0b1012] text-white py-10">
        <h1 className="text-3xl font-bold mb-6 text-cyan-400 text-center">Labours List</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-[#111a1c] rounded-lg shadow-md">
            <thead>
              <tr className="text-left border-b border-gray-700">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Skill</th>
                <th className="px-4 py-2">City</th>
                <th className="px-4 py-2">Salary</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {labours?.map((labour) => (
                <tr key={labour.id} className="border-b border-gray-700">
                  <td className="px-4 py-2">
                    {editingId === labour.id ? (
                      <input
                        name="name"
                        value={editForm.name}
                        onChange={handleChange}
                        className="bg-[#1a2226] text-white px-2 py-1 rounded"
                      />
                    ) : (
                      labour.name
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editingId === labour.id ? (
                      <input
                        name="phone"
                        value={editForm.phone}
                        onChange={handleChange}
                        className="bg-[#1a2226] text-white px-2 py-1 rounded"
                      />
                    ) : (
                      labour.phone
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editingId === labour.id ? (
                      <input
                        name="skill"
                        value={editForm.skill}
                        onChange={handleChange}
                        className="bg-[#1a2226] text-white px-2 py-1 rounded"
                      />
                    ) : (
                      labour.skill
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editingId === labour.id ? (
                      <input
                        name="city"
                        value={editForm.city}
                        onChange={handleChange}
                        className="bg-[#1a2226] text-white px-2 py-1 rounded"
                      />
                    ) : (
                      labour.city
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editingId === labour.id ? (
                      <input
                        name="salary"
                        type="number"
                        value={editForm.salary}
                        onChange={handleChange}
                        className="bg-[#1a2226] text-white px-2 py-1 rounded"
                      />
                    ) : (
                      labour.salary
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editingId === labour.id ? (
                      <select
                        name="status"
                        value={editForm.status}
                        onChange={handleChange}
                        className="bg-[#1a2226] text-white px-2 py-1 rounded"
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    ) : (
                      labour.status
                    )}
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    {editingId === labour.id ? (
                      <>
                        <Button onClick={handleUpdate} variant="primary">
                          Save
                        </Button>
                        <Button
                          onClick={() => setEditingId(null)}
                          variant="secondary"
                        >
                          Cancel
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          onClick={() => handleEditClick(labour)}
                          variant="primary"
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={() => handleDelete(labour.id)}
                          variant="danger"
                        >
                          Delete
                        </Button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}
