import express from 'express';
import cors from 'cors';

// init app 
const app = express();
app.use(cors());
app.use(express.json());


import Chance from 'chance';
import { Resident } from '../types';
const chance = new Chance();

const residents: Resident[] = [...Array(250).keys()].map(id => {
  return {
    id,
    age: chance.age(),
    name: chance.name(),
    ssn: chance.ssn(),
    gender: chance.gender(),
  };
});

residents.push({
  id: 9999,
  age: myAge(),
  name: "Josh Baker",
  ssn: "111-111-1111",
  gender: 'Male'
});

// Search endpoint
app.get('', (req, res) => {

  // Grab query and filter residents by it 
  const q = req.query.q?.toLowerCase() || '';
  const results = residents.filter((resident) => resident.name.toLowerCase().includes(q));

  res.send(results);
});

app.listen(8080, () => 'listening on port http://localhost:8080');


function myAge() {
  const birthDate = new Date("05/01/1992");
  const date = new Date();

  let age = (date.getFullYear() - birthDate.getFullYear());

  if (date.getMonth() < birthDate.getMonth() ||
    date.getMonth() == birthDate.getMonth() && date.getDate() < birthDate.getDate()) {
    age--;
  }

  return age.toString();
}

