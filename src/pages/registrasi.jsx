import './registrasi.css'; 
import { Link } from 'react-router-dom'; 
import axios from 'axios'; 
import { useState } from 'react'; 

const Registrasi = () => {
    const apiRegistrasi = process.env.REACT_APP_API_REGISTRASI
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    username: '',
    gender: 'Laki-laki',
    phoneNumber: '',
    konfirmasiPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.konfirmasiPassword) {
      console.error('Konfirmasi kata sandi tidak cocok');
      return;
    }

    try {
      const response = await axios.post(apiRegistrasi, formData);
      console.log('Registrasi berhasil:', response.data);
    } catch (error) {
      console.error('Kesalahan registrasi:', error);
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="card my-5" style={{ width: "40rem" }}>
        <div className="card-body">
          <h4 className="card-title">Registrasi</h4>
          <form className='text-start' onSubmit={handleSubmit}>
            <div className='px-5'>
              <div className="mb-3">
                <label htmlFor="namaAkun" className="form-label">Nama Akun</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="name"
                  className="form-control"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="namaLengkap" className="form-label">Nama Lengkap</label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  autoComplete="name"
                  className="form-control"
                  value={formData.fullname}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="new-password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="konfirmasiPassword" className="form-label">Konfirmasi Password</label>
                <input
                  type="password"
                  name="konfirmasiPassword"
                  id="konfirmasiPassword"
                  autoComplete="new-password"
                  className="form-control"
                  value={formData.konfirmasiPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Jenis Kelamin</label>
                <select
                  name="gender"
                  id="gender"
                  className="form-select"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">Nomor Telepon</label>
                <input
                  type="number"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="form-control"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  pattern='[0-9]*'
                />
              </div>
              <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" id="policy-agree" />
                <label className="form-check-label" htmlFor="policy-agree">
                  Dengan mengisi ini, anda sudah menyetujui{' '}
                  <Link to="/" className="text-primary">
                    Kebijakan Privasi
                  </Link>
                  .
                </label>
              </div>
            </div>
            <div className='mb-3 text-center'>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registrasi;
