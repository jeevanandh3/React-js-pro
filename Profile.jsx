import { useRef, useState } from "react";

function Profile() {
  const fileInputRef = useRef(null);

  const [image, setImage] = useState(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setImage(imageUrl);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <span className="section-label">PROFILE</span>

        <h1>Player Profile</h1>

        <p>
          Upload and preview your profile image.
        </p>
      </div>

      <div className="profile-card">
        <div className="profile-image-container">
          {image ? (
            <img
              src={image}
              alt="Profile preview"
              className="profile-image"
            />
          ) : (
            <div className="profile-placeholder">
              👤
            </div>
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          hidden
        />

        <button
          className="btn primary-btn"
          onClick={handleButtonClick}
        >
          {image ? "Change Image" : "Upload Image"}
        </button>
      </div>
    </div>
  );
}

export default Profile;