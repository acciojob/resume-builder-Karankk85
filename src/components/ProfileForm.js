import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../redux/slices/profileSlice';

export default function ProfileForm({ next }) {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateProfile({ [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <input name="fname" value={profile.fname} onChange={handleChange} placeholder="First Name" />
      <input name="lname" value={profile.lname} onChange={handleChange} placeholder="Last Name" />
      <input name="phone" value={profile.phone} onChange={handleChange} placeholder="Phone" />
      <input name="address" value={profile.address} onChange={handleChange} placeholder="Address" />
      <input name="url" value={profile.url} onChange={handleChange} placeholder="Image URL" />
      <button id="next" onClick={next}>Next</button>
    </div>
  );
}
