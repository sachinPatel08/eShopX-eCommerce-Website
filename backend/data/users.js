import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Dhrutik Patel',
    email: 'dhrutik@eshopx.com',
    password: bcrypt.hashSync('eshopx', 10),
    isAdmin: true,
  },
  {
    name: 'Sachin Patel',
    email: 'sachin@eshopx.com',
    password: bcrypt.hashSync('eshopx', 10),
  },
];

export default users;
