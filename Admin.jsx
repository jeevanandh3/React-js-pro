import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addTeam,
  updateTeam,
  deleteTeam,
} from "../redux/teamSlice";

function Admin() {
  const dispatch = useDispatch();

  const teams = useSelector(
    (state) => state.teams.teams
  );

  const [form, setForm] = useState({
    id: null,
    name: "",
    shortName: "",
    captain: "",
    city: "",
    coach: "",
    titles: 0,
  });

  const [editing, setEditing] = useState(false);

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Team name is required";
    }

    if (!form.shortName.trim()) {
      newErrors.shortName = "Short name is required";
    }

    if (!form.captain.trim()) {
      newErrors.captain = "Captain is required";
    }

    if (!form.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!form.coach.trim()) {
      newErrors.coach = "Coach is required";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    if (editing) {
      dispatch(
        updateTeam({
          ...form,
          titles: Number(form.titles),
        })
      );
    } else {
      dispatch(
        addTeam({
          ...form,
          titles: Number(form.titles),
        })
      );
    }

    resetForm();
  };

  const handleEdit = (team) => {
    setForm(team);
    setEditing(true);
    setErrors({});
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this team?"
    );

    if (confirmed) {
      dispatch(deleteTeam(id));
    }
  };

  const resetForm = () => {
    setForm({
      id: null,
      name: "",
      shortName: "",
      captain: "",
      city: "",
      coach: "",
      titles: 0,
    });

    setEditing(false);
    setErrors({});
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <span className="section-label">ADMIN</span>

        <h1>Team Management</h1>

        <p>
          Add, edit and delete tournament teams.
        </p>
      </div>

      <div className="admin-layout">
        <form
          className="admin-form"
          onSubmit={handleSubmit}
        >
          <h2>
            {editing ? "Edit Team" : "Add New Team"}
          </h2>

          <div className="form-group">
            <label>Team Name</label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter team name"
            />

            {errors.name && (
              <small className="error">
                {errors.name}
              </small>
            )}
          </div>

          <div className="form-group">
            <label>Short Name</label>

            <input
              name="shortName"
              value={form.shortName}
              onChange={handleChange}
              placeholder="Example: CSK"
            />

            {errors.shortName && (
              <small className="error">
                {errors.shortName}
              </small>
            )}
          </div>

          <div className="form-group">
            <label>Captain</label>

            <input
              name="captain"
              value={form.captain}
              onChange={handleChange}
              placeholder="Enter captain"
            />

            {errors.captain && (
              <small className="error">
                {errors.captain}
              </small>
            )}
          </div>

          <div className="form-group">
            <label>City</label>

            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="Enter city"
            />

            {errors.city && (
              <small className="error">
                {errors.city}
              </small>
            )}
          </div>

          <div className="form-group">
            <label>Coach</label>

            <input
              name="coach"
              value={form.coach}
              onChange={handleChange}
              placeholder="Enter coach"
            />

            {errors.coach && (
              <small className="error">
                {errors.coach}
              </small>
            )}
          </div>

          <div className="form-group">
            <label>Tournament Titles</label>

            <input
              type="number"
              name="titles"
              value={form.titles}
              onChange={handleChange}
              min="0"
            />
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="btn primary-btn"
            >
              {editing ? "Update Team" : "Add Team"}
            </button>

            {editing && (
              <button
                type="button"
                className="btn cancel-btn"
                onClick={resetForm}
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <div className="admin-list">
          <h2>Teams</h2>

          {teams.map((team) => (
            <div
              className="admin-team"
              key={team.id}
            >
              <div>
                <h3>{team.name}</h3>

                <p>
                  {team.shortName} • {team.city}
                </p>

                <small>
                  Captain: {team.captain}
                </small>
              </div>

              <div className="admin-actions">
                <button
                  onClick={() => handleEdit(team)}
                  className="edit-btn"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(team.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;